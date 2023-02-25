import { motion } from 'framer-motion'


const AnimatedPage = ({ children, data }) => {
  const animation = { ...data }
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
export default AnimatedPage;