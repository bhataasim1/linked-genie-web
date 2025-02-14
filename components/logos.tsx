import Marquee from '@/components/ui/marquee'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animation-variants'
import TextBlur from './ui/text-blur'
import LINKEDIN_LOGO from '@/public/LinkedIn-Logo.wine.png'

// const companies = [
//   'Google',
//   'Microsoft',
//   'Amazon',
//   'Netflix',
//   'YouTube',
//   'Instagram',
//   'Uber',
//   'Spotify',
// ]

const LOGOS = [
  { src: LINKEDIN_LOGO, alt: 'LinkedIn' },
  { src: LINKEDIN_LOGO, alt: 'LinkedIn' },
  { src: LINKEDIN_LOGO, alt: 'LinkedIn' },
]

export default function Logos() {
  return (
    <section id="logos">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-12 md:px-8 md:pb-24 md:pt-16"
      >
        <motion.div variants={itemVariants}>
          <TextBlur
            className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
            text="Supports"
          />
        </motion.div>

        {/* <motion.div variants={itemVariants}>
          <TextBlur
            className="text-center text-base text-zinc-300 sm:text-lg"
            text="Currently supports the following companies"
            duration={0.8}
          />
        </motion.div> */}

        <motion.div
          variants={itemVariants}
          className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {LOGOS.map((logo, idx) => (
              <Image
                key={idx}
                width={200}
                height={40}
                src={logo.src}
                className="h-30 w-28 opacity-30 grayscale dark:brightness-0 dark:invert"
                alt={logo.alt}
                // src={`https://cdn.magicui.design/companies/${logo}.svg`}
                // className="h-10 w-28 opacity-30 grayscale dark:brightness-0 dark:invert"
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
