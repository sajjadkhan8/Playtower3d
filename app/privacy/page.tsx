import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <Button asChild variant="ghost" className="mb-6 text-gray-600 hover:text-orange-500">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

          <div className="text-gray-700 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>
                We may collect information you provide directly to us, such as when you contact us for support. We also
                collect certain information automatically when you use our games, including device information, gameplay
                statistics, and crash reports to improve our games.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our games, respond to your
                inquiries, and analyze usage patterns to enhance user experience. We do not sell your personal
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Information Sharing</h2>
              <p>
                We may share your information with third-party service providers who assist us in operating our games,
                such as analytics providers and crash reporting services. These providers are bound by confidentiality
                agreements and may only use your information to provide services to us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information against
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Children's Privacy</h2>
              <p>
                Our games are not directed to children under 13. We do not knowingly collect personal information from
                children under 13. If we become aware that we have collected such information, we will take steps to
                delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our official channels or
                social media pages.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
