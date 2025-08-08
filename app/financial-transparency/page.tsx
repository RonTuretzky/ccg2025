"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Euro, Home, Utensils, HelpCircle } from 'lucide-react'
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
]

export default function FinancialTransparencyPage() {
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

      <main className="relative z-20 container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="outline" className="mb-8 border-white/50 text-gray-200 hover:bg-white/10 hover:text-white bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-6">Financial Transparency</h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              We believe in complete transparency about the costs and financial structure of CCG 2025. Here's a detailed breakdown of all expenses and what your contribution covers.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Euro className="h-6 w-6 text-green-400" />
                <h2 className="text-2xl font-bold">Ticket Price</h2>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <div className="bg-green-500/20 border border-green-400/50 p-4 rounded-lg">
                  <p className="text-xl font-semibold">
                    <strong>Standard: €200</strong> (Available)
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p>
                    <strong>Direct link to payment:</strong>{" "}
                    <a 
                      href="https://normie.tech/product/_S_SSa4fH8d8e7/pay" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-white break-all"
                    >
                      https://normie.tech/product/_S_SSa4fH8d8e7/pay
                    </a>
                  </p>
                  
                  <p>
                    The ticket price is set to cover the venue rental and basic infrastructure, based on expected attendance. No one from the organizing team is being paid from ticket sales, and all are covering their own travel, food and accommodation, until more sustainable structures and future sponsorships are in place.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Home className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Accommodation</h2>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Note that accommodation is not included in the ticket price. These are provided by the Commons Hub:
                </p>
                
                <div className="bg-blue-500/20 border border-blue-400/50 p-4 rounded-lg">
                  <p className="text-xl font-semibold">
                    <strong>Dorm accommodation:</strong> €37.90/day
                  </p>
                </div>
                
                <p>
                  Accommodation includes shared dormitory-style rooms with basic amenities. Bedding and towels are provided.
                </p>
              </div>
            </div>

            <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Utensils className="h-6 w-6 text-orange-400" />
                <h2 className="text-2xl font-bold">Food</h2>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Food is also not included in the ticket price and is provided by the Commons Hub:
                </p>
                
                <div className="bg-orange-500/20 border border-orange-400/50 p-4 rounded-lg">
                  <p className="text-xl font-semibold">
                    <strong>Food:</strong> €22.50/day average
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p><strong>Breakdown:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>First 3 days: fully catered at €35/day</li>
                    <li>Last 3 days: self-organized by participants and the Crypto Commons Association at ~€10/day</li>
                  </ul>
                </div>
                
                <p>
                  Meals include breakfast, lunch, and dinner with vegetarian and vegan options available. The self-organized days involve communal cooking and shared meal preparation.
                </p>
              </div>
            </div>

            <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">Total Cost Estimate</h2>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p>For the full 6-day event (August 24-29), here's what you can expect to pay:</p>
                
                <div className="bg-purple-500/20 border border-purple-400/50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p><strong>Ticket:</strong> €200</p>
                    <p><strong>Accommodation (6 nights):</strong> €227.40</p>
                    <p><strong>Food (6 days):</strong> €135</p>
                    <hr className="border-purple-400/50 my-3" />
                    <p className="text-xl font-bold"><strong>Total:</strong> €562.40</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-300">
                  *This is an estimate. Final costs may vary slightly based on actual meal arrangements and accommodation choices.
                </p>
              </div>
            </div>

            <div className="bg-yellow-500/20 border border-yellow-400/50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="h-6 w-6 text-yellow-300" />
                <h2 className="text-xl font-semibold">Need Financial Support?</h2>
              </div>
              
              <p className="text-lg leading-relaxed">
                We know these costs add up, especially with travel. If the price is a barrier, please don't hesitate to reach out at{" "}
                <a 
                  href="mailto:cryptocommonsgathering@gmail.com"
                  className="text-blue-400 underline hover:text-white"
                >
                  cryptocommonsgathering@gmail.com
                </a>
                . We'll do our best to find a solution together.
              </p>
              
              <p className="mt-4 text-base text-gray-200">
                We believe that financial constraints should not prevent anyone from participating in building commons-oriented futures. We're committed to working with participants to find creative solutions for those who need support.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
