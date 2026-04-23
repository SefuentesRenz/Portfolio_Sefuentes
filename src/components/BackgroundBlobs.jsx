import { motion, useReducedMotion } from 'framer-motion';

const BackgroundBlobs = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-black/25" />

      <motion.div
        className="absolute w-120 h-120 -top-24 -left-24 rounded-full blur-2xl opacity-55 hidden md:block"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.55), rgba(168, 85, 247, 0.14) 55%, transparent 76%)'
        }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.45 }
            : {
                x: [0, 36, -18, 0],
                y: [0, -24, 14, 0]
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.2 }
            : {
                duration: 36,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
              }
        }
      />

      <div
        className="absolute w-96 h-96 top-[14%] -right-20 rounded-full blur-2xl opacity-40"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.45), rgba(236, 72, 153, 0.12) 55%, transparent 76%)'
        }}
      />

      <div
        className="absolute w-104 h-104 -bottom-16 left-[20%] rounded-full blur-2xl opacity-40"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.45), rgba(99, 102, 241, 0.12) 55%, transparent 76%)'
        }}
      />

      <div className="absolute inset-0 bg-radial-[at_50%_20%] from-purple-500/16 via-transparent to-transparent" />
    </div>
  );
};

export default BackgroundBlobs;
