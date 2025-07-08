"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const allKeywords = [
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
  "zero-knowledge futures",
  "peer-to-peer governance",
  "distributed ledgers",
  "smart contract commons",
  "emergent behavior",
  "complex adaptive systems",
  "autopoiesis",
  "computational governance",
  "gift economies",
  "circular economies",
  "platform cooperativism",
  "decommodification",
  "universal basic assets",
  "collective intelligence",
  "stigmergic collaboration",
  "consensus mechanics",
  "participatory budgeting",
  "digital tribes",
  "counter-surveillance",
  "data unions",
  "algorithmic accountability",
  "digital sovereignty",
  "speculative design",
  "ontological design",
  "hyperstitional vectors",
  "xenofeminist tech",
  "critical engineering",
  "radical imagination",
  "generative aesthetics",
  "bio-art experiments",
  "tactical media",
  "net-art revival",
  "collective sensemaking",
  "embodied cognition",
  "psychedelic cybernetics",
  "protocol-based sociality",
  "fugitive planning",
  "feral systems",
]

const galleryImages = [
  { src: "/CCG24 Photos 32.jpg", alt: "Workshop by the river" },
  { src: "/photo_2024-09-24 11.56.50.jpeg", alt: "People playing a card game" },
  { src: "/photo_2024-09-24 11.59.37.jpeg", alt: "Wood-fired hot tub" },
  { src: "/photo_2024-09-24 11.55.05.jpeg", alt: "Person sitting by the river" },
  { src: "/CCG24 Photos 13.jpg", alt: "Street view of the venue" },
  { src: "/CCG24 Photos 28.jpg", alt: "People walking in a green valley" },
]

const SprawlingKeywordsOverlay = ({ keywords }: { keywords: string[] }) => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {keywords.map((word, index) => {
          const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%) rotate(${Math.random() * 90 - 45}deg)`,
            fontSize: `${Math.random() * 0.75 + 0.75}rem`, // 0.75rem to 1.5rem
            opacity: Math.random() * 0.2 + 0.1, // 0.1 to 0.3
          }
          return (
            <span key={index} className="absolute whitespace-nowrap font-mono uppercase text-blue-300/70" style={style}>
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
        <Image
          src="/valley.jpeg"
          alt="Scenic valley with sun flare over mountains"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-blue-950/60" />
      </div>

      <SprawlingKeywordsOverlay keywords={allKeywords} />

      <main className="relative z-20 container mx-auto px-4 py-16 sm:py-24 flex flex-col gap-16 sm:gap-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Crypto Commons Gathering
          </h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-gray-200 drop-shadow-md">
            The fifth edition brings together hackers, builders, visionaries, and artists to imagine desired futures,
            probe regenerative forms of living, and playfully explore commons practices.
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

        <section className="w-full max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="rounded-lg overflow-hidden aspect-[3/2] shadow-lg">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white bg-black/30 hover:bg-black/50 border-white/40" />
            <CarouselNext className="text-white bg-black/30 hover:bg-black/50 border-white/40" />
          </Carousel>
        </section>
      </main>
    </div>
  )
}
