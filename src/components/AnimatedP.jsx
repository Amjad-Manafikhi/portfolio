// components/AnimatedDiv.jsx
import { motion } from "framer-motion";

// This component will use framer-motion internally
const AnimatedP = ({ children, variants, className }) => {
  return (
    <motion.p
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export default AnimatedP;