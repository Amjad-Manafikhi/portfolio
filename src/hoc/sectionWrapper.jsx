import { motion } from "framer-motion";
import { style } from "../styles/style";
import { staggerContainer } from "../utils/motion";
import { cn } from '@/lib/utils'

// SectionWrapper is a function that takes a component (WrappedComponent)
// and an idName string, and returns a new component (HOC)
const SectionWrapper = (WrappedComponent, idName) => {
  function HOC(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cn(style.padding, 'max-w-7xl mx-auto relative z-0')}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <WrappedComponent {...props} />
      </motion.section>
    );
  }
  return HOC;
};

export default SectionWrapper;