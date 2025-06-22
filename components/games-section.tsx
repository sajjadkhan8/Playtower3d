import { ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const games = [
  {
    name: "Coin Rainbow: Lucky Dozer",
    image: "/placeholder.svg?height=200&width=300",
    description: "Push coins and collect treasures in this exciting dozer game with rainbow rewards and lucky bonuses!",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.coinrainbow",
    featured: true,
  },
  {
    name: "Coins Carnival: Christmas",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Celebrate the holidays with festive coin-pushing action and Christmas-themed rewards and decorations.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.coinscarnival",
    featured: false,
  },
  {
    name: "Dash Ball Up Impossible",
    image: "/placeholder.svg?height=200&width=300",
    description: "Test your reflexes in this challenging ball-bouncing game with impossible levels and endless fun.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.dashballup",
    featured: false,
  },
  {
    name: "Even Odd Balloons",
    image: "/placeholder.svg?height=200&width=300",
    description: "Pop balloons while solving math puzzles in this educational and entertaining number-based game.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.evenoddballoons",
    featured: false,
  },
  {
    name: "Penguin Cliff Dive",
    image: "/placeholder.svg?height=200&width=300",
    description: "Help brave penguins dive from icy cliffs in this thrilling arctic adventure with stunning visuals.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.penguincliffdive",
    featured: true,
  },
  {
    name: "Snow Moto Racer",
    image: "/placeholder.svg?height=200&width=300",
    description: "Race through snowy landscapes on powerful snowmobiles in this high-speed winter racing game.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.snowmotoracer",
    featured: false,
  },
  {
    name: "Yellow Fish Twins",
    image: "/placeholder.svg?height=200&width=300",
    description: "Guide twin fish through underwater adventures in this charming aquatic puzzle-adventure game.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.yellowfishtwins",
    featured: false,
  },
  {
    name: "Zombie Tree - Climb Simulator",
    image: "/placeholder.svg?height=200&width=300",
    description: "Climb the mysterious zombie tree while avoiding dangers in this unique survival climbing simulator.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.zombietree",
    featured: true,
  },
]

export default function GamesSection() {
  return (
    <section id="games" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Games</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of exciting mobile games that have entertained millions of players worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg ${
                game.featured ? "ring-2 ring-orange-200" : ""
              }`}
            >
              <CardHeader className="p-0 relative">
                {game.featured && (
                  <div className="absolute top-3 right-3 z-10 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {game.name}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {game.description}
                </CardDescription>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                  <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Download Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
