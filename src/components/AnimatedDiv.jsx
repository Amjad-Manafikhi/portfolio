// components/AnimatedDiv.jsx
import { motion } from "framer-motion";

// This component will use framer-motion internally
const AnimatedDiv = ({ children, variants, className }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;