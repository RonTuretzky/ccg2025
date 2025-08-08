import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Euro, Home, Utensils } from 'lucide-react'

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

      <main className="relative z-20 container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="outline" className="mb-8 border-white/50 text-gray-200 hover:bg-white/10 hover:text-white bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="bg-white/10 border border-gray-400/50 p-8 text-white rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-8">Financial Transparency</h1>
            
            <div className="space-y-8">
              <div className="bg-green-500/20 border border-green-400/50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Euro className="h-6 w-6 text-green-300 mt-1 flex-shrink-0" />
                  <h2 className="text-2xl font-bold">Ticket Price</h2>
                </div>
                
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-xl font-semibold">
                    <strong>Standard: €200</strong> (Available)
                  </p>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="mb-2">Direct link to payment:</p>
                    <a 
                      href="https://normie.tech/product/_S_SSa4fH8d8e7/pay" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 underline hover:text-blue-200 break-all"
                    >
                      https://normie.tech/product/_S_SSa4fH8d8e7/pay
                    </a>
                  </div>
                  
                  <p>
                    The ticket price is set to cover the venue rental and basic infrastructure, based on expected attendance. No one from the organizing team is being paid from ticket sales, and all are covering their own travel, food and accommodation, until more sustainable structures and future sponsorships are in place.
                  </p>
                </div>
              </div>

              <div className="bg-blue-500/20 border border-blue-400/50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Home className="h-6 w-6 text-blue-300 mt-1 flex-shrink-0" />
                  <h2 className="text-2xl font-bold">Accommodation and Food</h2>
                </div>
                
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Note that accommodation and food are not included in the ticket price. These are provided by the Commons Hub:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Utensils className="h-5 w-5 text-orange-300" />
                        <h3 className="text-xl font-semibold">Food</h3>
                      </div>
                      <p>
                        <strong>€22.50/day average</strong> (first 3 days fully catered at €35/day; last 3 days self-organized by participants and the Crypto Commons Association at ~€10/day)
                      </p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Home className="h-5 w-5 text-purple-300" />
                        <h3 className="text-xl font-semibold">Dorm Accommodation</h3>
                      </div>
                      <p>
                        <strong>€37.90/day</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-400/50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Need Financial Support?</h2>
                <p className="text-lg leading-relaxed">
                  We know these costs add up, especially with travel. If the price is a barrier, please don't hesitate to reach out at{" "}
                  <a 
                    href="mailto:cryptocommonsgathering@gmail.com"
                    className="text-blue-300 underline hover:text-blue-200"
                  >
                    cryptocommonsgathering@gmail.com
                  </a>
                  . We'll do our best to find a solution together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
