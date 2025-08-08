"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
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

export default function AboutPage() {
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

          <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-8">About CCG 2025</h1>
            
            <div className="space-y-6 text-lg text-gray-200 drop-shadow-md leading-relaxed">
              <p>
                Among the events held at the Commons Hub, the Crypto Commons Gathering has always held a special place. What began in 2021 as a modest excuse for then-PhD researcher Felix Fritsch to bring together crypto-commons thinkerers from around the world in his own backyard has since evolved into an annual moment of (re)connection and reflection for a growing community, and for the many lived practices and experiments in commoning, degrowth, mutualism and post-capitalist economic worldbuilding it is linked to.
              </p>
              
              <p>
                Over the years, CCG has welcomed activists, researchers, hackers, builders, artists, game designers and others, newcomers and "OGs" alike. It has shaped itself as a convivial and fertile space for people and projects working across and beyond web3 to cross-pollinate visions, trajectories and strategies for realising regenerative and cooperative infrastructures.
              </p>
              
              <p>
                While remaining an unconference at heart, each edition has reflected the community's shifting priorities and aspirations. In 2025, the gathering enters its fifth year, presenting not only a space to collectively take stock of what crypto commons has become and what it still could be, but also a moment for the growing community to think and organize itself anew.
              </p>
              
              <p>
                This year's edition marks a shift in infrastructure as well:
              </p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  The Commons Hub has become a full-fledged event hosting organization of its own, co-led by brothers Felix and Emil Fritsch, with exciting expansion and ecovillage plans in the works.
                </li>
                <li>
                  The Crypto Commons Association, until 2024 stewarded by Felix Fritsch and Giulio Quarta, is being reimagined as a cooperative vehicle for organising and supporting events at the Hub and elsewhere, introducing and evolving peer-production values and frameworks around them.
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white drop-shadow-lg mt-8 mb-4">What to expect</h2>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Gather with others in a convivial, off-grid setting in the Austrian countryside, whether you're reconnecting or arriving for the first time.
                </li>
                <li>
                  Explore key themes through participant-led sessions, including: regenerative and collaborative finance, MycoFi, community currencies, digital and crypto commons, open source, degrowth, post-capitalism, ecofeminism, multispecies justice, radical game design, speculative fiction, and more.
                </li>
                <li>
                  Participate in a fully unconferenced structure, with time and sessions treated as a collectively managed resource. Bring your ideas for talks, roundtables, workshops, prototyping sessions, board game nights, LARPs, etc., immerse yourself, find inspiration, and team up with others.
                </li>
                <li>
                  If you're interested, contribute to the ongoing co-creation of the Crypto Commons Association as it transitions into an events-oriented cooperative, a DAO, or something in between.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
