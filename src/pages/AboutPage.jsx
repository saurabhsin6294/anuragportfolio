import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const AboutPage = () => {
  const stats = [
    { label: "Dashboards Built", value: "5+" },
    { label: "Tools Mastered", value: "5+" },
    { label: "Bootcamp Training", value: "100+ Hrs" },
    { label: "Graduation (B.Com)", value: "2025" }
  ];

  const values = [
    {
      title: "Data-Driven Insights",
      desc: "Analyzing sales figures and regional data points to discover actionable insights and optimize marketing decisions.",
      icon: "📊"
    },
    {
      title: "Interactive Dashboards",
      desc: "Developing and deploying clean, comprehensive visualizations in Power BI and Tableau for decision makers.",
      icon: "📉"
    },
    {
      title: "Structured SQL Queries",
      desc: "Querying relational databases efficiently to extract, filter, and clean structural records.",
      icon: "🗄️"
    },
    {
      title: "Python Data Wrangling",
      desc: "Using Python (pandas, NumPy) for parsing data, handling missing fields, and descriptive statistical analysis.",
      icon: "🐍"
    }
  ];

  const timeline = [
    {
      year: "2022 - 2025",
      title: "Bachelor's Degree (B.Com)",
      institution: "GOEL INSTITUTE OF TECHNOLOGY AND MANAGEMENT, Lucknow",
      desc: "Studied commerce, retail, financial accounting, and business statistics, establishing a strong background in commercial logic."
    },
    {
      year: "2024",
      title: "Marketing & Data Intern",
      institution: "Brindavan Bottlers Pvt. Ltd.",
      desc: "Analyzed distributor sales, created Tableau/Power BI charts, and designed data-driven campaigns."
    },
    {
      year: "2024",
      title: "Data Science Bootcamp Graduate",
      institution: "Console Flare",
      desc: "Underwent rigorous, hands-on bootcamp training covering Python libraries, SQL databases, and dashboard configurations."
    },
    {
      year: "2021 - 2022",
      title: "Intermediate Education",
      institution: "Saraswati Senior Secondary Vidya Mandir, Deoria",
      desc: "Completed secondary school commerce studies with focus on accounting, economics, and business studies."
    }
  ];

  const hobbies = [
    { name: "Visual Storytelling", desc: "Crafting infographics and visual summaries of complex data." },
    { name: "Puzzle Solving", desc: "Training logical reasoning and statistical problem solving." },
    { name: "Tech Analytics", desc: "Exploring new developments in Big Data and AI tools." }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-6 md:px-12 font-sans relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-blue-800/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8"
          >
            ABOUT <span className="text-[#00a2ff]">ME.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Biography */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 space-y-6 text-white/80 text-base md:text-lg leading-relaxed font-medium"
            >
              <p>
                Hello! I am <strong className="text-white">Anurag Tiwari</strong>, an enthusiastic and highly analytical Data Analyst. I specialize in parsing complex datasets, cleaning databases, and designing intuitive dashboard reports using **Python, SQL, Power BI, and Tableau**.
              </p>
              <p>
                My professional philosophy is centered around translating complex numbers into simple, actionable visual metrics. I enjoy helping businesses make strategic, data-driven decisions by highlighting sales trends, distributor insights, and target demographic behaviors.
              </p>
              <p>
                With a Bachelor of Commerce (B.Com) degree and specialized training from Console Flare Data Science Bootcamp, I merge commercial logic with data analytics rigor to deliver premium reports and high-performing dashboards.
              </p>
            </motion.div>

            {/* Avatar / Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative group w-64 h-64">
                <div className="absolute inset-0 bg-[#00a2ff] rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20" />
                <div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 rounded-3xl relative z-10 overflow-hidden shadow-2xl flex justify-center items-center">
                  <img 
                    src="/src/assets/about/anurag-avatar.png" 
                    alt="Anurag Tiwari" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg hover:border-sky-500/30 transition-colors duration-300"
            >
              <h4 className="text-[#00a2ff] text-4xl md:text-5xl font-black mb-2">{stat.value}</h4>
              <p className="text-white/60 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Work Philosophy / Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tight">Core Work Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-sky-500/20 transition-all duration-300 flex gap-5 items-start group hover:bg-white/[0.07]"
              >
                <div className="text-4xl p-3 bg-white/5 rounded-2xl group-hover:bg-[#00a2ff]/20 transition-colors duration-300">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors duration-300">
                    {val.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-medium">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Journey Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tight">Educational Timeline</h2>
          <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-[#00a2ff] rounded-full border-4 border-black shadow-[0_0_10px_#00a2ff]" />
                
                <span className="text-[#00a2ff] text-xs font-bold font-mono uppercase tracking-widest">{item.year}</span>
                <h3 className="text-white text-xl font-bold mt-1 mb-0.5">{item.title}</h3>
                <p className="text-white/40 text-xs font-semibold mb-3 uppercase tracking-wider">{item.institution}</p>
                <p className="text-white/60 text-sm leading-relaxed max-w-2xl font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hobbies / Interests */}
        <div>
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Interests & Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbies.map((hob, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-sky-500/20 transition-all duration-300"
              >
                <h4 className="text-[#00a2ff] text-lg font-bold mb-2">{hob.name}</h4>
                <p className="text-white/60 text-sm font-medium leading-relaxed">{hob.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default AboutPage;
