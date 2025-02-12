import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed flex right-0 left-0 justify-end top-0 z-[50] m-4">
      <motion.div variants={itemVariants}>
        <Link href="https://github.com/bhataasim1/linked-genie" rel="noopener noreferrer" target="_blank">
          <Button
            size="sm"
            variant="secondary"
            className="text-yellow-50 transition-all duration-150 ease-linear md:hover:text-yellow-200">
            <FaGithub className="md:mr-1.5" />
            <span className="hidden md:inline">Open Source</span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
