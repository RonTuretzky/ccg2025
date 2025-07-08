import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MountainIcon } from "lucide-react"

const keywords = [
  "cybernetics",
  "hope",
  "ambiguous design systems",
  "value discovery network",
  "economic media",
  "communal computing",
  "ketamine",
  "emotive interactions",
  "computational media",
  "tools for thought",
  "cryptographic ownership",
  "post-capitalist economic design",
  "solidarity protocols",
  "algorithmic justice",
  "decentralized autonomy",
  "artivist collectives",
  "mutual aid ledgers",
  "regenerative finance",
  "cooperative AI",
  "sexual harm prevention crypto",
  "techno-utopian dreaming",
  "mesh network commons",
  "open-source cooperativism",
  "intersectional futurism",
  "data soverignty",
  "post collapse solarpunk",
  "radical transparency",
  "liquidity of care",
  "civic hacktivism",
  "post-cap-work ideation",
  "community staking",
  "tokenized solidarity",
  "algorithmic mutualism",
  "self sustanence logistics",
  "networked abolition",
  "commons utilities",
  "third space tokenization",
  "distributed decision tooling",
  "divergent cooperative design",
  "privacy normalization",
  "eco-social computation",
  "decolonial algorithms",
  "participatory ontology",
  "post crypto trustless culture",
  "mindful machine learning",
  "cooperative clouds",
  "glitch aesthetics",
]

const SprawlingKeywordsOverlay = () => {
  const positionedKeywords = [...keywords, ...keywords, ...keywords].map((keyword) => ({
    word: keyword,
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 1.5 + 0.75}rem`,
      opacity: Math.random() * 0.5 + 0.3,
      transform: `translate(-50%, -50%) rotate(${Math.random() * 50 - 25}deg)`,
    },
  }))

  return (
    <div className="absolute inset-0 z-10 h-full w-full overflow-hidden">
      {positionedKeywords.map((item, index) => (
        <span key={index} className="absolute text-white/90 whitespace-nowrap font-medium" style={item.style}>
          {item.word}
        </span>
      ))}
    </div>
  )
}

export default function CryptoCommonsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/valley-background.jpeg"
          alt="Scenic valley background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <SprawlingKeywordsOverlay />

      <div className="relative z-20">
        <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <section className="grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[70vh]">
            <div className="space-y-6 bg-black/50 backdrop-blur-md p-6 rounded-lg border border-white/10">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Crypto Commons Gathering</h1>
              <p className="text-lg md:text-xl text-gray-200">
                The fifth edition brings together hackers, builders, visionaries, and artists to imagine desired
                futures, probe regenerative forms of living, and playfully explore commons practices.
              </p>
              <p className="text-sm text-gray-300">August 24–29, Reichenau an der Rax, Austria</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Apply to Join</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden border-2 border-white/20">
              <Image
                src="/images/poster.jpg"
                alt="Crypto Commons Gathering Poster"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto bg-black/50 backdrop-blur-md p-8 rounded-lg border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">A Confluence of Minds and Nature</h2>
              <p className="text-gray-200 md:text-lg">
                We gather to share ideas, build connections, and find inspiration in the intersection of technology,
                art, and the natural world. From intense workshops to quiet moments by the river, CCG is a space for
                co-creation and reflection.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/river-workshop.jpeg"
                  alt="Group workshop by the river"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/card-game-session.jpeg"
                  alt="Attendees playing a card game"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/hot-tub.jpeg"
                  alt="Wood-fired hot tub in a rustic setting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/person-by-river.jpeg"
                  alt="A person sitting contemplatively by the river"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/venue-street.jpeg"
                  alt="The street view of the venue in Reichenau an der Rax"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/green-valley.jpeg"
                  alt="A wide shot of the green valley surrounding the event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md">
          <div className="container mx-auto px-4 md:px-6 py-6 flex justify-between items-center text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} Crypto Commons Gathering</p>
            <div className="flex items-center gap-2">
              <MountainIcon className="h-4 w-4" />
              <span>Commons-Based Peer Production</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
