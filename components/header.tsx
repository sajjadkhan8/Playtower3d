import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P3</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              playtower<span className="text-orange-500">3d</span>
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#games" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Games
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Studio
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Privacy
            </Link>
            <Link
              href="https://facebook.com/playtower3d"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
