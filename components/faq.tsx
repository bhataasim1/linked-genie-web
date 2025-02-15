import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animation-variants';
import Link from 'next/link';
import TextBlur from './ui/text-blur';
import { faqs } from '@/lib/faq';


export default function FAQ() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='max-w-[800px] mx-auto px-4 md:px-8 md:pb-24 md:pt-4 w-full'
    >
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
          text="FAQ"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-base text-zinc-300 sm:text-lg"
          text="Some of the frequently asked questions"
          duration={0.8}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mx-auto my-12">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col items-center justify-center space-y-2"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={faq.question}
              className="w-full overflow-hidden rounded-lg border"
            >
              <AccordionTrigger className="px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
      <motion.div variants={itemVariants}>
        <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
          Still have questions? Email us at
          {' '}
          <Link href="mailto:bhataasimofficial@gmail.com" className="underline">
            bhataasimofficial@gmail.com
          </Link>
        </h4>
      </motion.div>
    </motion.div>
  )
}