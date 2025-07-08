"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const keywords = [
  "Cybernetics",
  "Decentralization",
  "Web3",
  "Post-capitalism",
  "DAOs",
  "ReFi",
  "Solarpunk",
  "Governance",
  "Tokenomics",
  "Privacy",
  "ZK",
  "Cryptography",
  "Automation",
  "Commons",
  "P2P",
  "Network States",
  "Digital Art",
  "NFTs",
  "Smart Contracts",
  "Oracles",
  "DeSci",
  "Futarchy",
  "Stigmergy",
  "E-governance",
  "Liquid Democracy",
  "Holacracy",
  "Sociocracy",
  "Game Theory",
  "Mechanism Design",
  "Algorithmic Governance",
  "Prediction Markets",
  "Reputation Systems",
  "Digital Identity",
  "Self-Sovereign Identity",
  "Mesh Networks",
  "Edge Computing",
  "Federated Learning",
  "Swarm Intelligence",
  "Bio-hacking",
  "Transhumanism",
  "Circular Economy",
  "Regenerative Agriculture",
  "Local Currencies",
  "Mutual Credit",
  "Time Banking",
  "Gift Economy",
  "Open Source",
  "Open Hardware",
  "Data Unions",
  "Co-ownership",
  "Platform Cooperativism",
  "Digital Nomadism",
  "Radical Candor",
  "Non-violent Communication",
]

const galleryImages = [
  { src: "/CCG24 Photos 1.jpg", alt: "A group of people sitting on a riverbank during a conference." },
  { src: "/CCG24 Photos 12.jpg", alt: "A person speaking to a group in a sunlit room." },
  { src: "/CCG24 Photos 13.jpg", alt: "A green classic car parked on a cobblestone street in a village." },
  { src: "/CCG24 Photos 28.jpg", alt: "Two people walking across a lush green field towards a forest." },
  { src: "/CCG24 Photos 32.jpg", alt: "A casual gathering of people by a river with bicycles." },
  { src: "/photo_2024-09-24 11.55.05.jpeg", alt: "A person sitting by a stream in a tranquil natural setting." },
  { src: "/photo_2024-09-24 11.56.50.jpeg", alt: "Four people playing a card game at a table." },
  { src: "/photo_2024-09-24 11.59.37.jpeg", alt: "A person presenting to a group in an informal outdoor setting." },
  { src: "/reichenau nature.jpg", alt: "A scenic view of the Reichenau landscape with mountains and trees." },
  { src: "/river conference.jpg", alt: "Attendees of a conference gathered by a rocky river." },
  { src: "/statue garden.jpg", alt: "A peaceful garden with statues and greenery." },
]

const topRowImages = galleryImages.slice(0, 6)
const bottomRowImages = galleryImages.slice(5)

const KeywordOverlay = () => {
  const positions = useMemo(() => {
    return keywords.map(() => ({
      x: Math.random() * 95,
      y: Math.random() * 95,
      size: Math.random() * (16 - 10) + 10,
      rotation: Math.random() * 90 - 45,
    }))
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {keywords.map((keyword, i) => (
        <span
          key={i}
          className="absolute text-white/40"
          style={{
            left: `${positions[i].x}%`,
            top: `${positions[i].y}%`,
            fontSize: `${positions[i].size}px`,
            transform: `rotate(${positions[i].rotation}deg)`,
          }}
        >
          {keyword}
        </span>
      ))}
    </div>
  )
}

const ImageMarquee = ({
  images,
  direction = "left",
}: { images: typeof galleryImages; direction?: "left" | "right" }) => {
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
  return (
    <div
      className="relative w-full overflow-hidden group"
      style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" }}
    >
      <div
        className={`flex gap-4 ${animationClass} group-hover:[animation-play-state:paused]`}
        style={{ "--duration": "80s" } as React.CSSProperties}
      >
        {[...images, ...images].map((image, index) => (
          <div key={index} className="relative h-48 w-64 flex-shrink-0">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
)

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Image
        src="/valley.jpeg"
        alt="A scenic valley with mountains in the background"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
      />
      <KeywordOverlay />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black/30 text-white p-4 md:p-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">Crypto Commons Gathering</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            An unconference for builders, researchers, and stewards of the digital commons. Join us for a week of
            co-living, co-working, and co-creating in the Austrian Alps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6">
              <a
                href="https://t.me/+gcO15eVjr4s2Njc8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <TelegramIcon />
                Join the Telegram
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white/50 text-white bg-black/20 hover:bg-white/10"
            >
              <Link href="/directions">View Directions</Link>
            </Button>
          </div>
        </div>

        <div className="w-full space-y-4 my-12">
          <ImageMarquee images={topRowImages} direction="left" />
          <ImageMarquee images={bottomRowImages} direction="right" />
        </div>

        <div className="w-full max-w-5xl mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Tickets</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Early Bird</CardTitle>
                <CardDescription className="text-white/80">by July 5th</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-4xl font-bold">€150.00</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Purchase</Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Standard</CardTitle>
                <CardDescription className="text-white/80">by August 5th</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-4xl font-bold">€200.00</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Purchase</Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Last Minute</CardTitle>
                <CardDescription className="text-white/80">by August 23rd</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-4xl font-bold">€250.00</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Purchase</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
