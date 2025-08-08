"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Send } from 'lucide-react'
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
{ src: "/work circle.jpg", alt: "A group of people in a workshop circle." },
]

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
        <h1 className="text-5xl sm:text-6xl md:text-7xl text-white drop-shadow-lg">Crypto Commons Gathering</h1>
        <p className="mt-4 max-w-3xl text-lg sm:text-xl text-gray-200 drop-shadow-md">
          The fifth edition of CCG brings together international activists, researchers, hackers, builders, artists, game designers and others to collectively explore, imagine and enact futures at the intersection of commoning, degrowth and web3 through an unconference format.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 text-gray-200 text-lg">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>August 24-29</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>
              Richard von Schoeller-Straße 9, 2651 Reichenau an der Rax, Austria at the{" "}
              <a
                href="https://www.commons-hub.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Commons Hub
              </a>
            </span>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/about">
            <Button size="lg" variant="outline" className="border-white/50 text-gray-200 hover:bg-white/10 hover:text-white bg-transparent text-lg px-8 py-6">
              About CCG 2025
            </Button>
          </Link>
          <Link
            href="https://docs.google.com/forms/d/1crj5ukURBHMKhVg71cDbikjL2D8BVtNw9C6gl3myG9c/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
              Register and Get Tickets
            </Button>
          </Link>
          <Link href="https://t.me/+8a7PooNV6202YjI0" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="bg-blue-500/20 border-blue-400 text-white hover:bg-blue-500/30 text-lg px-8 py-6"
            >
              <Send className="mr-2 h-5 w-5" />
              Join CCG25 Telegram
            </Button>
          </Link>
          <Link href="/directions">
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-gray-200 hover:bg-white/10 hover:text-white bg-transparent text-lg px-8 py-6"
            >
              Directions to the Hub
            </Button>
          </Link>
          <Link href="/financial-transparency">
            <Button size="lg" variant="outline" className="border-white/50 text-gray-200 hover:bg-white/10 hover:text-white bg-transparent text-lg px-8 py-6">
              Financial Transparency
            </Button>
          </Link>
        </div>
      </div>

      <section className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-[3/2]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center">
        <div className="bg-white/10 border border-gray-400/50 p-8 max-w-4xl text-white rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-6 text-center">
            What is an Unconference?
          </h2>
          <div className="space-y-4 text-lg text-gray-200 drop-shadow-md">
            <p>
              An unconference is a participant-driven event format that emphasizes open, flexible, and spontaneous
              discussions rather than traditional pre-planned presentations. Unlike conventional conferences,
              unconferences have no predefined agenda or speakers. Instead, attendees collaboratively propose topics,
              sessions, and activities on the spot, usually at the beginning of the event.
            </p>
            <p>
              Participants vote or self-organize around topics they find most interesting, forming small groups or
              breakout sessions where discussions, workshops, or hands-on activities take place. The structure
              encourages active participation, collective knowledge sharing, and informal networking.
            </p>
            <p>
              Unconferences are particularly valuable for fostering creativity, innovation, and community engagement,
              as everyone is considered equally qualified to contribute, share insights, and guide conversations.
              Common formats include open space technology, barcamps, and lightning talks, all of which rely heavily
              on attendee interaction and collective decision-making.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
)
}
