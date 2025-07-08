import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {keywords.map((word, index) => {
          const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%) rotate(${Math.random() * 90 - 45}deg)`,
            fontSize: `${Math.random() * 1.5 + 0.75}rem`,
            opacity: Math.random() * 0.3 + 0.1,
          }
          return (
            <span key={index} className="absolute whitespace-nowrap font-mono uppercase text-blue-300" style={style}>
              {word}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default function CryptoCommonsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <Image src="../valley.jpeg" alt="Placeholder user image" fill className="object-cover" quality={100} />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <SprawlingKeywordsOverlay />

      <main className="relative z-20 container mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-8">
            <Image
              src="/poster.jpg"
              alt="Crypto Commons Gathering Poster"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Crypto Commons Gathering
          </h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-gray-200 drop-shadow-md">
            The fifth edition will once more bring together hackers & builders, visionaries, artists, creatives and
            others with affiliation to the web3 ecosystem to imagine desired futures, probe regenerative forms of
            living, and playfully explore commons practices.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Apply to Join
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-200 hover:bg-white/10 hover:text-white bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>

        <section className="mt-24 sm:mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-black/40 backdrop-blur-sm border-gray-700">
              <CardContent className="p-0">
                <Image
                  src="/venue-street.jpeg"
                  alt="Street view of the venue"
                  width={600}
                  height={400}
                  className="object-cover rounded-t-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-700">
              <CardContent className="p-0">
                <Image
                  src="/river-workshop.jpeg"
                  alt="Workshop by the river"
                  width={600}
                  height={400}
                  className="object-cover rounded-t-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-700">
              <CardContent className="p-0">
                <Image
                  src="/green-valley.jpeg"
                  alt="People walking in a green valley"
                  width={600}
                  height={400}
                  className="object-cover rounded-t-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-700">
              <CardContent className="p-0">
                <Image
                  src="/person-by-river.jpeg"
                  alt="Person sitting by the river"
                  width={600}
                  height={400}
                  className="object-cover rounded-t-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-700">
              <CardContent className="p-0">
                <Image
                  src="/hot-tub.jpeg"
                  alt="Wood-fired hot tub"
                  width={600}
                  height={400}
                  className="object-cover rounded-t-lg"
                />
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-700">
              <CardContent className="p-0">
                <Image
                  src="/card-game-session.jpeg"
                  alt="People playing a card game"
                  width={600}
                  height={400}
                  className="object-cover rounded-t-lg"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
