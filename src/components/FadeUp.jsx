import { motion, useReducedMotion } from 'framer-motion';

const FadeUp = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  distance = 40,
  amount = 0.2,
  once = true,
  as: Component = motion.div
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: shouldReduceMotion ? 0.01 : duration, delay, ease: 'easeOut' }}
    >
      {children}
    </Component>
  );
};

export default FadeUp;
