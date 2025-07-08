import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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

const KeywordOverlay = () => {
  const positions = keywords.map(() => ({
    x: Math.random() * 95,
    y: Math.random() * 95,
    size: Math.random() * (16 - 10) + 10,
    rotation: Math.random() * 90 - 45,
  }))

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

export default function DirectionsPage() {
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black/50 text-white p-4 md:p-8">
        <div className="w-full max-w-4xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-8">Directions</h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              The Commons Hub is located in Reichenau an der Rax, a small Austrian village between Vienna and Graz. In
              this section you will find info on how to reach Reichenau by train and from the airport, and then the
              final stretch from Reichenau’s station to the Hub itself.
            </p>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Taking the train to Reichenau an der Rax</h2>
              <p>
                The nearest train station to the Hub is Payerbach-Reichenau Bahnof (”station” in German). To plan your
                trip by train, we suggest using{" "}
                <a
                  href="https://www.thetrainline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Trainline
                </a>
                .
              </p>
              <p className="mt-2">
                Keep in mind that Payerbach-Reichenau is a smaller station, and it might be more convenient, or faster,
                to search for trains heading to Vienna or Wiener Neustadt, and then getting a different train to reach
                Reichenau an der Rax.
              </p>
              <p className="mt-2">
                If you are arriving in Vienna by plane, you can simply take the train route suggested by Maps. Try to
                avoid the CAT (City Airport Train), unless necessary — it’s a more expensive option that takes just 10
                minutes less than the standard train.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">From Payerbach-Reichenau to the Hub</h2>
              <p>Once you are at Payerbach-Reichenau train station, getting to the Hub is pretty simple:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  <strong>By Bus:</strong> you can buy a bus ticket from the station at{" "}
                  <a
                    href="https://shop.vor.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    this link
                  </a>
                  . The Bus line is 341, and it should take fifteen minutes at most.
                </li>
                <li>
                  <strong>By Taxi:</strong> if you are planning to arrive later than the last bus, or don’t want to take
                  it, you can call a taxi. The price should be around €15. You can simply ask to be taken “to the church
                  in Hirschwang”, since it’s very close to the Hub and a good reference point.
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>
                      Flackl-Wirt Taxi: <span className="font-mono">+43 26665 2291</span>
                    </li>
                    <li>
                      Funk-Taxi Fritz Scharfegger: <span className="font-mono">+43 2665 2200</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Walking:</strong> of course, nothing is stopping you from having a healthy walk up to the Hub!
                  It’s only around 5km, an hour of walking more or less, and most of the route goes through nature.
                </li>
              </ul>
              <p className="mt-4">
                If you think you are going to be too late for any service, make sure to contact us so we’ll be able to
                organize a car to come and get you!
              </p>
            </section>
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white/50 text-white bg-black/20 hover:bg-white/10"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
