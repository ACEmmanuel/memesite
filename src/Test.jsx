import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Component for each section that animates when it comes into view
const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);  // Reference to track element
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Adjust margin if needed

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}  // Start invisible and moved down
      animate={isInView ? { opacity: 1, y: 0 } : {}}  // Animate on view
      transition={{ duration: 0.5 }}  // Transition settings
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Main component with multiple sections
const Test = () => {
  return (
    <div className="space-y-20">
      {/* Section 1 */}
      <AnimatedSection className="h-80 bg-blue-500 text-white flex items-center justify-center text-3xl">
        Section 1: I animate when in view!
      </AnimatedSection>

      {/* Section 2 */}
      <AnimatedSection className="h-80 bg-green-500 text-white flex items-center justify-center text-3xl">
        Section 2: I also animate when in view!
      </AnimatedSection>

      {/* Section 3 */}
      <AnimatedSection className="h-80 bg-red-500 text-white flex items-center justify-center text-3xl">
        Section 3: Me too!
      </AnimatedSection>

      {/* Section 4 */}
      <AnimatedSection className="h-80 bg-yellow-500 text-black flex items-center justify-center text-3xl">
        Section 4: I appear when you scroll to me!
      </AnimatedSection>
    </div>
  );
};

export default Test;
