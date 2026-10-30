import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/sections/PageHeader'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found', 'The page you were looking for could not be found.')

  return (
    <>
      <PageHeader
        eyebrow="404"
        title="We couldn't find that page"
        description="The link may be broken or the page may have moved."
      />
      <section className="bg-white py-20">
        <Container className="flex justify-center gap-4">
          <Button to="/" variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Back to home
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </Container>
      </section>
    </>
  )
}
