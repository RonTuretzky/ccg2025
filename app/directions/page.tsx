"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Train, Car, Plane } from 'lucide-react'
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

export default function DirectionsPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-6">Directions to the Hub</h1>
            
            <div className="bg-blue-500/20 border border-blue-400/50 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Address</h2>
                  <p className="text-lg">
                    Richard von Schoeller-Straße 9, 2651 Reichenau an der Rax, Austria at the{" "}
                    <a
                      href="https://www.commons-hub.at/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white"
                    >
                      Commons Hub
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Train className="h-6 w-6 text-green-400" />
                <h2 className="text-2xl font-bold">By Train</h2>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  The closest train station is <strong>Payerbach-Reichenau</strong>, which is about 10 minutes by car from the Commons Hub.
                </p>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">From Vienna:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Take the S-Bahn S1 or S2 from Vienna to Wiener Neustadt (about 45 minutes)</li>
                    <li>Transfer to the regional train (R) towards Semmering/Mürzzuschlag</li>
                    <li>Get off at Payerbach-Reichenau (about 30 minutes from Wiener Neustadt)</li>
                    <li>Total journey time: approximately 1.5-2 hours</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">From Graz:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Take the regional train (R) towards Vienna/Wiener Neustadt</li>
                    <li>Get off at Payerbach-Reichenau</li>
                    <li>Journey time: approximately 2 hours</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Car className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold">From the Train Station</h2>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <h3 className="text-xl font-semibold">Taxi Services:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Taxi Reichenau:</strong> +43 2666 52 777</li>
                  <li><strong>Taxi Payerbach:</strong> +43 2666 52 888</li>
                  <li>Cost: approximately €15-20 to the Commons Hub</li>
                  <li>Journey time: about 10 minutes</li>
                </ul>
                
                <p className="mt-4">
                  <strong>Note:</strong> It's recommended to call ahead and book a taxi, especially during peak times or late arrivals.
                </p>
              </div>
            </div>

            <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Car className="h-6 w-6 text-red-400" />
                <h2 className="text-2xl font-bold">By Car</h2>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">From Vienna (about 1 hour):</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Take the A2 motorway towards Graz</li>
                    <li>Exit at "Seebenstein" (Exit 46)</li>
                    <li>Follow signs to Reichenau an der Rax</li>
                    <li>Continue on B27 to Reichenau an der Rax</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">From Graz (about 1.5 hours):</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Take the A2 motorway towards Vienna</li>
                    <li>Exit at "Seebenstein" (Exit 46)</li>
                    <li>Follow signs to Reichenau an der Rax</li>
                  </ul>
                </div>
                
                <p className="bg-yellow-500/20 border border-yellow-400/50 p-4 rounded-lg">
                  <strong>Parking:</strong> Free parking is available at the Commons Hub.
                </p>
              </div>
            </div>

            <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Plane className="h-6 w-6 text-purple-400" />
                <h2 className="text-2xl font-bold">By Plane</h2>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Vienna International Airport (VIE):</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Take the CAT (City Airport Train) or S7 to Vienna city center</li>
                    <li>Transfer to S1 or S2 towards Wiener Neustadt</li>
                    <li>Continue as described in the train directions above</li>
                    <li>Total journey time: approximately 2.5-3 hours</li>
                  </ul>
                </div>
                
                <p className="mt-4">
                  <strong>Alternative:</strong> Rent a car at the airport for a direct 1.5-hour drive to Reichenau an der Rax.
                </p>
              </div>
            </div>

            <div className="bg-green-500/20 border border-green-400/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Need Help?</h2>
              <p className="text-gray-200">
                If you need assistance with directions or transportation, feel free to reach out to us at{" "}
                <a href="mailto:cryptocommonsgathering@gmail.com" className="text-blue-400 underline hover:text-white">
                  cryptocommonsgathering@gmail.com
                </a>{" "}
                or ask in the{" "}
                <a href="https://t.me/+8a7PooNV6202YjI0" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-white">
                  CCG25 Telegram group
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
