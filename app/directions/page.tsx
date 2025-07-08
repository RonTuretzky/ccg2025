"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

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

const SprawlingKeywordsOverlay = ({ keywords }: { keywords: string[] }) => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {keywords.map((word, index) => {
          const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%) rotate(${Math.random() * 90 - 45}deg)`,
            fontSize: `${Math.random() * 0.75 + 0.75}rem`,
            opacity: Math.random() * 0.2 + 0.1,
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
        <div className="absolute inset-0 bg-blue-950/70" />
      </div>

      <SprawlingKeywordsOverlay keywords={allKeywords} />

      <main className="relative z-20 container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm p-8 sm:p-12 rounded-lg text-gray-200">
          <Link href="/" className="mb-8 inline-block">
            <Button
              variant="outline"
              className="border-gray-400 text-gray-200 hover:bg-white/10 hover:text-white bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-8">Directions</h1>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p>
              The Commons Hub is located in Reichenau an der Rax, a small Austrian village between Vienna and Graz. In
              this section you will find info on how to reach Reichenau by train and from the airport, and then the
              final stretch from Reichenau’s station to the Hub itself.
            </p>
            <h2 className="text-white">Taking the train to Reichenau an der Rax</h2>
            <p>
              The nearest train station to the Hub is Payerbach-Reichenau Bahnof (”station” in German). To plan your
              trip by train, we suggest using{" "}
              <a href="https://www.thetrainline.com/" target="_blank" rel="noopener noreferrer">
                Trainline
              </a>
              .
            </p>
            <p>
              Keep in mind that Payerbach-Reichenau is a smaller station, and it might be more convenient, or faster, to
              search for trains heading to Vienna or Wiener Neustadt, and then getting a different train to reach
              Reichenau an der Rax.
            </p>
            <p>
              If you are arriving in Vienna by plane, you can simply take the train route suggested by Maps. Try to
              avoid the CAT (City Airport Train), unless necessary — it’s a more expensive option that takes just 10
              minutes less than the standard train.
            </p>
            <p>Once you are at Payerbach-Reichenau train station, getting to the Hub is pretty simple:</p>
            <ul>
              <li>
                <strong>By Bus:</strong> you can buy a bus ticket from the station at{" "}
                <a href="https://shop.vor.at/" target="_blank" rel="noopener noreferrer">
                  this link
                </a>
                . The Bus line is 341, and it should take fifteen minutes at most.
              </li>
              <li>
                <strong>By Taxi:</strong> if you are planning to arrive later than the last bus, or don’t want to take
                it, you can call a taxi. The price should be around €15. You can simply ask to be taken “to the church
                in Hirschwang”, since it’s very close to the Hub and a good reference point.
                <ul className="list-none pl-0 mt-2">
                  <li>
                    Flackl-Wirt Taxi: <a href="tel:+43266652291">+43 26665 2291</a>
                  </li>
                  <li>
                    Funk-Taxi Fritz Scharfegger: <a href="tel:+4326652200">+43 2665 2200</a>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Walking:</strong> of course, nothing is stopping you from having a healthy walk up to the Hub!
                It’s only around 5km, an hour of walking more or less, and most of the route goes through nature.
              </li>
            </ul>
            <p>
              If you think you are going to be too late for any service, make sure to contact us so we’ll be able to
              organize a car to come and get you!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
