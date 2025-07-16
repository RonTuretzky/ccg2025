"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
        <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm p-8 rounded-lg text-white">
          <h1 className="text-4xl font-bold mb-6">Directions</h1>
          <div className="space-y-6 text-lg text-gray-200">
            <p>
              The Commons Hub is located in Reichenau an der Rax, a small Austrian village between Vienna and Graz. In
              this section you will find info on how to reach Reichenau by train and from the airport, and then the
              final stretch from Reichenau’s station to the Hub itself.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-2 text-white">Arriving during the day?</h2>
              <p>
                Here is an ÖBB link with an overview of transport options between Vienna Hauptbahnhof (Main Station) and
                the Commons Hub:{" "}
                <a
                  href="https://fahrplan.oebb.at/webapp/?context=TP&SID=A%3D1%40O%3DWien%40X%3D16372134%40Y%3D48208547%40U%3D81%40L%3D1190100%40&ZID=A%3D1%40O%3DHirschwang%20an%20der%20Rax%40X%3D15812178%40Y%3D47704746%40U%3D81%40L%3D1131887%40&date=23.08.2025&time=12:00:00&timeSel=1&returnTimeSel=1&journeyProducts=7167&start=1&#!P%7CTP!H%7C885574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LINK
                </a>
                . If you purchase your tickets through ÖBB, you can save some money by buying a combined train+bus
                ticket. The relevant buses are 341 and 342.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2 text-white">Arriving in the evening?</h2>
              <p>
                If you are arriving after 7pm and/or there are no buses available, try train connections to
                Payerbach-Reichenau Bahnhof and arrange a taxi from there. Some local taxi service numbers:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Flackl Taxi: +43 2666 52084</li>
                <li>Scharfegger Taxi: +43 2665 2200</li>
                <li>Kobald Taxi: +43 2666 52461</li>
              </ul>
            </section>

            <p className="pt-4">
              If you think you are going to be too late for any service, make sure to contact us so we’ll be able to
              organize a car to come and get you!
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link href="/">
              <Button
                variant="outline"
                className="border-white/50 text-gray-200 hover:bg-white/10 hover:text-white bg-transparent"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
