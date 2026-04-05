import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const noMotionStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const noMotion = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export default function PageTransition({ children, className = "" }: Props) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={prefersReducedMotion ? noMotionStagger : stagger}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSection({ children, className = "" }: Props) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={prefersReducedMotion ? noMotionStagger : stagger}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, className = "" }: Props) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div className={className} variants={prefersReducedMotion ? noMotion : fadeUp}>
      {children}
    </motion.div>
  );
}

export function SlideUp({ children, className = "" }: Props) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div className={className} variants={prefersReducedMotion ? noMotion : slideUp}>
      {children}
    </motion.div>
  );
}
