import { Facebook, FileText, Shield, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                playtower<span className="text-orange-500">3d</span>
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Creating amazing mobile games that bring joy and entertainment to millions of players worldwide. Join our
              gaming community today!
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/playtower3d"
                target="_blank"
                className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:contact@playtower3d.com"
                className="w-10 h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#games" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Our Games
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/playtower3d"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-orange-500 transition-colors flex items-center"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Playtower3d. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
