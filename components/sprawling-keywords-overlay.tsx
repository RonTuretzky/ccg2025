"use client"

import { useState, useEffect } from "react"

type KeywordStyle = {
  top: string
  left: string
  transform: string
  fontSize: string
  opacity: number
  transition: string
}

export const SprawlingKeywordsOverlay = ({ keywords }: { keywords: string[] }) => {
  const [styles, setStyles] = useState<KeywordStyle[]>([])

  // Function to generate new random styles
  const generateStyles = (): KeywordStyle[] => {
    return keywords.map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      transform: `translate(-50%, -50%) rotate(${Math.random() * 90 - 45}deg)`,
      fontSize: `${Math.random() * 0.75 + 0.75}rem`,
      opacity: Math.random() * 0.3 + 0.2, // Fade in to this opacity
      transition: "opacity 2s ease-in-out", // Only transition opacity
    }))
  }

  useEffect(() => {
    // Initial position generation
    if (keywords.length > 0) {
      setStyles(generateStyles())
    }

    const intervalId = setInterval(() => {
      // Trigger fade out
      setStyles((prevStyles) => prevStyles.map((style) => ({ ...style, opacity: 0 })))

      // After fade out duration, reshuffle positions and trigger fade in
      setTimeout(() => {
        setStyles(generateStyles())
      }, 2000) // This duration should match the CSS transition duration for opacity
    }, 7000) // Total cycle time: 2s fade out + 5s visible

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords])

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {styles.length > 0 &&
          keywords.map((word, index) => (
            <span key={index} className="absolute whitespace-nowrap font-mono text-blue-300/90" style={styles[index]}>
              {word}
            </span>
          ))}
      </div>
    </div>
  )
}
