# Rebuilds public/logo.svg + logoParts from the original 500px logo.png (needs: pip install numpy pillow fonttools).
# Run from a folder that sits next to public/, e.g. python tools/build_logo.py (paths below assume ../public).
import json, math, numpy as np
from PIL import Image
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

im = np.array(Image.open('../public/logo.png').convert('RGBA')).astype(float)
R_,B_,A_ = im[...,0],im[...,2],im[...,3]/255
gold = np.where((R_-B_)>60, A_*np.clip((255-B_)/(255-89),0,1),0)
blue = np.where((B_-R_)>60, A_*np.clip((255-R_)/255,0,1),0)

def bbox(cov,x0,x1,y0,y1,t=0.5):
    ys,xs=np.where(cov[y0:y1,x0:x1]>t); return xs.min()+x0, xs.max()+x0+1, ys.min()+y0, ys.max()+y0+1
gb = bbox(blue,204,250,225,275); ab = bbox(gold,294,345,225,275)
print('globe bbox',gb,'aperture bbox',ab)
gcx,gcy = (gb[0]+gb[1])/2,(gb[2]+gb[3])/2; gR=(gb[1]-gb[0]+gb[3]-gb[2])/4
acx,acy = (ab[0]+ab[1])/2,(ab[2]+ab[3])/2; aR=(ab[1]-ab[0]+ab[3]-ab[2])/4
print('globe',gcx,gcy,gR,'aperture',acx,acy,aR)

f = lambda v: f'{v:.2f}'.rstrip('0').rstrip('.')
poly = lambda pts: 'M'+'L'.join(f'{f(x)} {f(y)}' for x,y in pts)+'Z'

# --- exact polygons (original-pixel coordinates) ---
gold_chev = poly([(171,163.5),(22.1,250),(171,336.5),(171,287.5),(106.5,250),(171,212.5)])
blue_chev = poly([(328,163.5),(477.7,250),(328,336.5),(328,287.9),(393.5,250),(328,212.1)])
cx=181.2
Y = poly([(cx-19.9,231),(cx-6.95,231),(cx,243.2),(cx+6.95,231),(cx+19.9,231),(cx+5.7,252.3),(cx+5.7,267),(cx-5.7,267),(cx-5.7,252.3)])
L = poly([(258,231),(270,231),(270,258),(288,258),(288,267),(258,267)])

# --- globe (strokes) ---
rr = gR-1.05
globe = (f'<circle cx="{f(gcx)}" cy="{f(gcy)}" r="{f(rr)}" fill="none" stroke-width="2.1"/>'
         f'<g fill="none" stroke-width="1.3">'
         f'<ellipse cx="{f(gcx)}" cy="{f(gcy)}" rx="9.8" ry="{f(rr)}"/>'
         f'<line x1="{f(gcx)}" y1="{f(gcy-rr)}" x2="{f(gcx)}" y2="{f(gcy+rr)}"/>'
         f'<line x1="{f(gcx-rr)}" y1="{f(gcy)}" x2="{f(gcx+rr)}" y2="{f(gcy)}"/>'
         + ''.join(f'<line x1="{f(gcx-math.sqrt(rr*rr-d*d))}" y1="{f(gcy+d)}" x2="{f(gcx+math.sqrt(rr*rr-d*d))}" y2="{f(gcy+d)}"/>' for d in (-10,10))
         + '</g>')

# --- aperture: ring with hex opening + 6 tangent gaps (via mask) ---
apothem, rv = 11.2, 11.2/math.cos(math.radians(30))
th0 = -46.5
vs=[(acx+rv*math.cos(math.radians(th0+60*k)), acy+rv*math.sin(math.radians(th0+60*k))) for k in range(6)]
hexpts = poly(vs)
gaps=''
for k in range(6):
    v,vn = vs[k], vs[(k+1)%6]
    dx,dy = v[0]-vn[0], v[1]-vn[1]; n=math.hypot(dx,dy); dx,dy=dx/n,dy/n
    gaps += f'<line x1="{f(v[0])}" y1="{f(v[1])}" x2="{f(v[0]+dx*16)}" y2="{f(v[1]+dy*16)}"/>'
aperture_mask = (f'<circle cx="{f(acx)}" cy="{f(acy)}" r="{f(aR)}" fill="#fff"/>'
                 f'<path d="{hexpts}" fill="#000"/><g stroke="#000" stroke-width="1.7">{gaps}</g>')

# --- text from real font outlines ---
def text_path(font_path, text, left, right, top, bottom):
    font = TTFont(font_path); gs = font.getGlyphSet(); cmap = font.getBestCmap()
    names=[cmap[ord(c)] for c in text]; bounds=[]
    for n in names:
        bp=BoundsPen(gs); gs[n].draw(bp); bounds.append(bp.bounds)
    adv=[font['hmtx'][n][0] for n in names]
    ymin=min(b[1] for b in bounds if b); ymax=max(b[3] for b in bounds if b)
    scale=(bottom-top)/(ymax-ymin)
    widths=[(b[2]-b[0])*scale if b else adv[i]*scale for i,b in enumerate(bounds)]
    gap=((right-left)-sum(widths))/(len(text)-1); out=[]; cur=left
    for n,b,w,c in zip(names,bounds,widths,text):
        if c==' ' or b is None: cur+=w+gap; continue
        sp=SVGPathPen(gs, ntos=lambda v: f(v))
        tp=TransformPen(sp,(scale,0,0,-scale,cur-b[0]*scale,bottom+ymin*scale))
        gs[n].draw(tp); out.append(sp.getCommands()); cur+=w+gap
    return ''.join(out)
def tb(y0,y1):
    ys,xs=np.where(A_[y0:y1,195:300]>0.35); return xs.min()+195, xs.max()+196, ys.min()+y0, ys.max()+1+y0
b1,b2=tb(282,299),tb(305,320)
text = text_path('C:/Windows/Fonts/segoeuib.ttf','SOLUTIONS',*b1) + text_path('C:/Windows/Fonts/segoeui.ttf','Estd 2024',*b2)

parts = dict(goldChevron=gold_chev, blueChevron=blue_chev, y=Y, l=L, globe=globe,
             apertureMask=aperture_mask, aperture=f'{f(acx-aR)} {f(acy-aR)} {f(2*aR)} {f(2*aR)}', text=text,
             globeC=[gcx,gcy,gR], apC=[acx,acy,aR])
json.dump(parts, open('parts.json','w'))

def svg(blue_c, ink_c, gold_c='#FFBD59', ident='a'):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="22 163 456 174" role="img" aria-label="YOLO Solutions">'
      f'<defs><mask id="ap{ident}" maskUnits="userSpaceOnUse" x="{f(acx-aR-2)}" y="{f(acy-aR-2)}" width="{f(2*aR+4)}" height="{f(2*aR+4)}">{aperture_mask}</mask></defs>'
      f'<path fill="{gold_c}" d="{gold_chev}{L}"/>'
      f'<rect fill="{gold_c}" x="{f(acx-aR)}" y="{f(acy-aR)}" width="{f(2*aR)}" height="{f(2*aR)}" mask="url(#ap{ident})"/>'
      f'<path fill="{blue_c}" d="{blue_chev}{Y}"/>'
      f'<g stroke="{blue_c}">{globe}</g>'
      f'<path fill="{ink_c}" d="{text}"/></svg>')
open('../public/logo.svg','w').write(svg('#004AAD','#0B1220'))
open('../public/logo-light.svg','w').write(svg('#5B9BFF','#FFFFFF'))
print('ok', len(svg('#000','#000')))
