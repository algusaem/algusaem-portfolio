import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Custom hook to control the fade-in animation used when clicking on the NavBar
const useFadeIn = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    setIsContentLoaded(true);
  }, []);

  const FadeInComponent: React.FC<FadeInProps> = ({ children }) => (
    <motion.div
      initial="hidden"
      animate={isContentLoaded ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );

  FadeInComponent.displayName = "FadeInComponent";

  return FadeInComponent;
};

export default useFadeIn;
