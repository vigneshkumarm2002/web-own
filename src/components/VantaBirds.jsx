'use client'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

const VantaBirds = () => {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    const handleVanta = () => {
      if (!vantaEffect && window.VANTA) {
        setVantaEffect(
          window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            birdSize: 0.7,
            separation: 50.0,
            alignment: 1.0,
            quantity: 3.5,
            cohesion: 100.0,
            color1: '#00DC46',
            color2: '#00DC46',
            backgroundColor: 'none',
            colorMode: 'lerp',
          }),
        )
      }
    }

    handleVanta()
    window.addEventListener('resize', handleVanta)

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
      }
      window.removeEventListener('resize', handleVanta)
    }
  }, [vantaEffect])

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        strategy="beforeInteractive"
      />
      <div
        ref={vantaRef}
        className="s-page-1 s-section-1 s-section h-[750px]"
      ></div>
    </>
  )
}

export default VantaBirds
