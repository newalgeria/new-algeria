import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://github.com/newalgeria/new-algeria/releases/download/0.0.0/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/50 dark:bg-primary/70" />
      <div className="container relative z-10 pt-20">
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold max-w-3xl mb-8 text-white"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap gap-4 mb-8"
        >
          {Object.keys(t('hero.categories', { returnObjects: true })).map((key) => (
            <motion.span
              key={key}
              variants={itemVariants}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
            >
              {t(`hero.categories.${key}`)}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;