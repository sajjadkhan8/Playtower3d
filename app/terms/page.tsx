import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>

          <div className="text-gray-700 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using any Playtower3d games, you agree to be bound by these Terms &
                Conditions. If you do not agree to these terms, please do not use our games.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Use of Games</h2>
              <p>
                Our games are provided for personal, non-commercial use only. You may not modify, distribute, or create
                derivative works based on our games without explicit written permission from Playtower3d.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Conduct</h2>
              <p>
                Users must not engage in any activity that could harm, disable, or impair our games or interfere with
                other users' enjoyment of the games. This includes but is not limited to cheating, hacking, or
                exploiting bugs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
              <p>
                All content, including but not limited to graphics, sounds, music, and gameplay mechanics, are the
                intellectual property of Playtower3d and are protected by copyright and other intellectual property
                laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
              <p>
                Playtower3d shall not be liable for any indirect, incidental, special, or consequential damages arising
                from the use of our games, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our games after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us through our official
                channels.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
