import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* AIPartners Logo Animation */}
        <motion.div
          className="text-3xl font-bold text-google-blue"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          AIPartners
        </motion.div>
        
        {/* Loading dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-google-blue rounded-full"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.6,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <p className="text-google-gray text-sm">Loading...</p>
      </motion.div>
    </div>
  );
}