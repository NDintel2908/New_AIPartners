import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useI18n } from "../contexts/i18n-context";

const getValues = (t: (key: string) => string) => [
  {
    title: t("AboutSection.values.0.title"),
    description: t("AboutSection.values.0.description"),
  },
  {
    title: t("AboutSection.values.1.title"),
    description: t("AboutSection.values.1.description"),
  }
];

export default function AboutSection() {
  const { t } = useI18n();
  const values = getValues(t);
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("AboutSection.title")}
          </h2>
          <p className="text-xl text-google-gray max-w-4xl mx-auto leading-relaxed">
            {t("AboutSection.description")}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t("AboutSection.storyTitle")}
            </h3>
            <div className="space-y-4 text-google-gray">
              <p className="text-lg leading-relaxed">
                {t("AboutSection.storyContent")}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600"
                alt="AI Solutions team collaborating in modern office environment with advanced technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-google-blue/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-google-blue text-white rounded-full p-3">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-google-gray">{t("AboutSection.expertTeamMembers")}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Vision and Mission Section - Full Width Storytelling Design */}
        <div className="mb-24 relative overflow-hidden">
          {/* Parallax Background Layers */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100"
            style={{ y: "-50px" }}
            whileInView={{ y: "0px" }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/8 to-blue-900/8"
            style={{ y: "-30px" }}
            whileInView={{ y: "0px" }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          ></motion.div>

          {/* AI Technology Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="none"/>
                  <circle cx="10" cy="10" r="1" fill="currentColor"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>

          <div className="relative z-10 py-16">
            {/* Vision Section - Full Width */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-16"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-10 lg:p-16 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-8">
                    <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t('AboutSection.visionSubtitle')}
                    </span>
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-wide mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span className="border-b-4 border-slate-700 pb-2">{t("AboutSection.visionTitle")}</span>
                    </h3>
                  </div>

                  <div className="text-center mb-8">
                    <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium italic mb-6" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                      "{t("AboutSection.visionText")}"
                    </blockquote>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-slate-600 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span className="bg-slate-100 px-4 py-2 rounded-full">{t("AboutSection.targetGoal")}</span>
                    <span className="bg-slate-100 px-4 py-2 rounded-full">{t("AboutSection.businessesTransformed")}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Section - Full Width */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-slate-900/95 backdrop-blur-sm rounded-xl p-10 lg:p-16 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-8">
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t('AboutSection.missionSubtitle')}
                    </span>
                    <h3 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span className="border-b-4 border-blue-400 pb-2">{t("AboutSection.missionTitle")}</span>
                    </h3>
                  </div>

                  <div className="text-center">
                    <blockquote className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium italic" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                      "{t("AboutSection.missionText")}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values Section - Clean Professional Design */}
        <div className="bg-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16 leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="border-b-2 border-slate-300 pb-2">{t("AboutSection.coreValuesTitle")}</span>
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("AboutSection.transformationOptimization")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("AboutSection.values.0.description")}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("AboutSection.oneStopNetwork")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("AboutSection.values.1.description")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section - Removed as per user request */}
      </div>
    </section>
  );
}