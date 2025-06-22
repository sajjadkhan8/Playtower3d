import { Gamepad2, Download, Trophy } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We make
                <br />
                <span className="text-orange-500 relative">
                  Chart Topping
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10"></div>
                </span>
                <br />
                <span className="text-gray-900">Games!</span>
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gamepad2 className="w-8 h-8 text-orange-500" />
                </div>
                <div className="font-bold text-gray-900">ACTIVE</div>
                <div className="text-sm text-gray-600">SINCE 2020</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-8 h-8 text-orange-500" />
                </div>
                <div className="font-bold text-gray-900">8+</div>
                <div className="text-sm text-gray-600">GAMES</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="w-8 h-8 text-orange-500" />
                </div>
                <div className="font-bold text-gray-900">MILLION</div>
                <div className="text-sm text-gray-600">DOWNLOADS</div>
              </div>
            </div>

            {/* Company Description */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are an indie mobile game development studio passionate about creating fun, engaging, and innovative
                games for players worldwide. Our diverse portfolio spans from exciting arcade adventures to challenging
                puzzle games.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-3xl overflow-hidden">
              {/* 3D Game Visual Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Game Logo Mockup */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Coin Rainbow</h3>
                    <p className="text-orange-500 font-semibold">Lucky Dozer</p>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-400 rounded-lg animate-pulse"></div>
                  <div className="absolute top-1/2 -left-12 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 gap-2 h-full p-4">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white/30 rounded-lg"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: "pulse 2s infinite",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
