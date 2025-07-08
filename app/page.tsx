"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"
import { SprawlingKeywordsOverlay } from "@/components/sprawling-keywords-overlay"

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
  { src: "/reichenau nature.jpg", alt: "A scenic view of a lake with mountains in the background." },
  { src: "/photo_2024-09-24 11.59.37.jpeg", alt: "Wood-fired hot tub" },
  { src: "/CCG24 Photos 1.jpg", alt: "A group of people gathered in a cozy room with a fireplace." },
  { src: "/photo_2024-09-24 11.55.05.jpeg", alt: "Person sitting by the river" },
  { src: "/river conference.jpg", alt: "People sitting on rocks by a river during a discussion." },
  { src: "/CCG24 Photos 13.jpg", alt: "Street view of the venue" },
  { src: "/statue garden.jpg", alt: "A serene garden with statues and lush greenery." },
  { src: "/CCG24 Photos 28.jpg", alt: "People walking in a green valley" },
  { src: "/CCG24 Photos 12.jpg", alt: "A person presenting to a group in an outdoor setting." },
]

const rowOneImages = galleryImages.slice(0, 6)
const rowTwoImages = galleryImages.slice(galleryImages.length - 6)

const ticketTiers = [
  {
    name: "Early Bird",
    deadline: "by July 5th",
    price: "€150.00",
    link: "https://normie.tech/product/twGJwxt3b_nBCo/pay",
  },
  {
    name: "Standard",
    deadline: "by August 5th",
    price: "€200.00",
    link: "https://normie.tech/product/_S_SSa4fH8d8e7/pay",
  },
  {
    name: "Last Minute",
    deadline: "by August 23rd",
    price: "€250.00",
    link: "https://normie.tech/product/nH1OjeMlT7t5bY/pay",
  },
]

const ImageMarquee = ({
  images,
  direction = "left",
}: { images: { src: string; alt: string }[]; direction?: "left" | "right" }) => {
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
  const duration = images.length * 8 // ~8s per image for a slow scroll

  return (
    <div
      className="w-full overflow-x-hidden group"
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div
        className={`flex w-max gap-4 py-2 group-hover:[animation-play-state:paused] ${animationClass}`}
        style={{ "--duration": `${duration}s` } as React.CSSProperties}
      >
        {[...images, ...images].map((image, index) => (
          <div key={`${direction}-${index}`} className="w-auto h-[200px] shrink-0">
            <div className="rounded-lg overflow-hidden aspect-[3/2] shadow-lg h-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
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
          <h1 className="font-cooper text-5xl sm:text-6xl md:text-7xl text-white drop-shadow-lg">
            Crypto Commons Gathering
          </h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-gray-200 drop-shadow-md">
            The fifth edition brings together hackers, builders, visionaries, and artists to imagine desired futures,
            probe regenerative forms of living, and playfully explore commons practices.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#tickets-section">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
                Get Tickets
              </Button>
            </Link>
            <Link href="https://t.me/+gcO15eVjr4s2Njc8" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="bg-blue-500/20 border-blue-400 text-white hover:bg-blue-500/30 text-lg px-8 py-6"
              >
                <Send className="mr-2 h-5 w-5" />
                Join the Telegram
              </Button>
            </Link>
            <Link href="/directions">
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-gray-200 hover:bg-white/10 hover:text-white bg-transparent text-lg px-8 py-6"
              >
                View Directions
              </Button>
            </Link>
          </div>
        </div>

        <section className="w-full flex flex-col gap-4">
          <ImageMarquee images={rowOneImages} direction="left" />
          <ImageMarquee images={rowTwoImages} direction="right" />
        </section>

        <section id="tickets-section" className="w-full flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">Get Your Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {ticketTiers.map((ticket) => (
              <Card key={ticket.name} className="bg-white/10 border-gray-400/50 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                  <CardDescription className="text-gray-300">{ticket.deadline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">{ticket.price}</p>
                </CardContent>
                <CardFooter>
                  <Link href={ticket.link} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full" variant="secondary">
                      Purchase
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
