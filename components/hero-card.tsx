import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { EnhancedButton } from "./ui/enhanced-btn";
import { DOWNLOAD_URL } from "@/lib/constants";
import { ChromeIcon } from "lucide-react";
import VIDEO_THUMBNAIL from "@/public/video-thumbnail-dark.png"

export const HeroCard = () => {

  const handleDownload = () => {
    window.open(DOWNLOAD_URL, "_blank");
  }

  return (
    <>
      <motion.div
        className="mt-6 flex w-full max-w-[24rem] justify-center gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants}>
          <EnhancedButton
            variant="expandIcon"
            Icon={ChromeIcon}
            onClick={handleDownload}
            iconPlacement="right"
            className="mt-2 w-full"
          >
            Add to Chrome
          </EnhancedButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mt-6 max-w-[70rem] flex justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="w-full"
        >
          <HeroVideoDialog
            className="block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc={VIDEO_THUMBNAIL.src}
            thumbnailAlt="Hero Video"
          />
        </motion.div>
      </motion.div>
    </>
  )
}