import React from 'react';
import { motion } from 'framer-motion';
import { LucideNetwork, Cpu, Database, Zap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';


const VarahamihiraLab = () => {
const executives = [
  {
    name: 'Poojan Patel',
    specialization: 'Deep Learning & Neural Networks',
    image: 'https://res.cloudinary.com/djtemmctt/image/upload/v1761841362/Screenshot_from_2025-10-30_21-36-50_dbpkou.png', // 🔹 Replace with actual Cloudinary link
    linkedin: 'https://www.linkedin.com/in/poojan-patel/', // 🔹 Replace with actual link
    twitter: 'https://twitter.com/poojan_patel', // 🔹 Replace with actual link
  },
  {
    name: 'Lokesh K',
    specialization: 'Generative AI & LLMs',
    image: 'https://res.cloudinary.com/demo/image/upload/v1730412345/lokesh_k_profile.jpg', // 🔹 Replace with actual Cloudinary link
    linkedin: 'https://www.linkedin.com/in/lokesh-k/', // 🔹 Replace with actual link
    twitter: 'https://twitter.com/lokesh_k', // 🔹 Replace with actual link
  },
];


  // const affiliates = [
  //   {
  //     name: 'Prof. Michael Zhang',
  //     role: 'Faculty Advisor',
  //     specialization: 'Computer Vision',
  //     affiliation: 'Department of Computer Science'
  //   },
  //   {
  //     name: 'Dr. Emily Watson',
  //     role: 'Industry Partner',
  //     specialization: 'MLOps & Production Systems',
  //     affiliation: 'TechCorp AI Research'
  //   },
  //   {
  //     name: 'Dr. James Park',
  //     role: 'Collaborating Researcher',
  //     specialization: 'Natural Language Processing',
  //     affiliation: 'NLP Research Institute'
  //   }
  // ];

  const members = [
    {
      name: 'Kartikey Juyal',
      // role: 'PhD Student',
      specialization: 'Computer Vision',
      year: '1st Year'
    },
    {
      name: 'Sriman Rutvik. V',
      // role: 'MS Student',
      specialization: 'Reinforcement Learning',
      year: '2nd Year'
    },
    // {
    //   name: 'Lisa Wang',
    //   role: 'Undergraduate Researcher',
    //   specialization: 'Generative Models',
    //   year: 'Senior'
    // },
    // {
    //   name: 'Tom Wilson',
    //   role: 'PhD Student',
    //   specialization: 'Federated Learning',
    //   year: '4th Year'
    // },
    // {
    //   name: 'Anna Patel',
    //   role: 'MS Student',
    //   specialization: 'Explainable AI',
    //   year: '1st Year'
    // },
    // {
    //   name: 'Chris Brown',
    //   role: 'Undergraduate Researcher',
    //   specialization: 'Deep Reinforcement Learning',
    //   year: 'Junior'
    // }
  ];

  const researchAreas = [
    {
      title: 'Deep Learning Architectures',
      description: 'Developing novel neural network architectures for improved performance and efficiency.',
      icon: LucideNetwork,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Generative AI Systems',
      description: 'Creating advanced generative models for text, image, and multimodal content generation.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Machine Learning Infrastructure',
      description: 'Building scalable ML pipelines and MLOps systems for production deployment.',
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Ethics & Fairness',
      description: 'Ensuring responsible AI development through bias detection and fairness metrics.',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
          src="https://res.cloudinary.com/djtemmctt/video/upload/v1761303579/WhatsApp_Video_2025-09-23_at_12.37.07_AM_clamy4.mp4"
        />

        {/* Overlay for readability */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 2
          }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <LucideNetwork className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 font-heading">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">VarahaMihira</span> Lab
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-body">
              Cloud Computing & Cybersecurity
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl leading-relaxed font-body">
              Varahamihira Lab, named after the brilliant astronomer and polymath, is the Cloud Computing and Cybersecurity division of the Singularity Student Research Lab at SRM University AP. It’s where the cloud meets code and security meets strategy — students architect scalable cloud systems, fortify networks, and explore the art of digital defense. From deploying robust infrastructures to safeguarding cyberspace, Varahamihira Lab empowers minds to build and protect the future of tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-body">
              To advance the field of artificial intelligence through innovative research in machine learning, 
              deep learning, and generative AI. We aim to create intelligent systems that are not only powerful 
              but also ethical, explainable, and beneficial to society. Our research spans from fundamental 
              theoretical advances to practical applications that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Research <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl font-body">
              Our research spans multiple domains within artificial intelligence and machine learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 card-hover flex flex-col items-center text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center flex-shrink-0 mb-4`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-body">{area.title}</h3>
                <p className="text-gray-300 leading-relaxed font-body text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl font-body">
              Meet the brilliant minds driving innovation in artificial intelligence & cybersecurity.
            </p>
          </motion.div>

          {/* Executives */}
<div className="mb-16">
  <h3 className="text-2xl font-bold text-white mb-8 font-heading">Executives</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {executives.map((executive, index) => (
      <motion.div
        key={executive.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative glass-effect rounded-xl p-6 flex flex-col items-center md:items-start text-center md:text-left card-hover overflow-hidden"
      >
        {/* 🔹 Top-right Lab Logo */}
        <img
          src="https://res.cloudinary.com/djtemmctt/image/upload/v1761840524/WhatsApp_Image_2025-10-30_at_9.37.08_PM_e2urti.jpg" // <-- replace with your actual Cloudinary logo link
          alt="Lab Logo"
          className="absolute top-3 right-3 w-10 h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
        />

        {/* Executive Image */}
        <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-700">
          <img
            src={executive.image}
            alt={executive.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/api/placeholder/150/150';
            }}
          />
        </div>

        {/* Executive Info */}
        <h4 className="text-xl font-bold text-white mb-2 font-body">{executive.name}</h4>
        <p className="text-blue-400 font-semibold mb-2 font-body">{executive.role}</p>
        <p className="text-gray-400 text-sm mb-8 font-body">{executive.specialization}</p>

        {/* 🔹 Social Icons (Bottom Right) */}
        <div className="absolute bottom-3 right-4 flex space-x-3">
          {/* LinkedIn */}
          {executive.linkedin && (
            <a
              href={executive.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              title="View LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5V9h3v10zm-1.5-11.271c-.966 0-1.75-.786-1.75-1.75S5.534 4.229 6.5 4.229s1.75.786 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.271h-3v-5.604c0-1.336-.025-3.056-1.861-3.056-1.861 0-2.145 1.454-2.145 2.956V19h-3V9h2.879v1.366h.041c.402-.76 1.384-1.561 2.849-1.561 3.046 0 3.61 2.006 3.61 4.617V19z" />
              </svg>
            </a>
          )}

          {/* Twitter */}
          {executive.twitter && (
            <a
              href={executive.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              title="View Twitter Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.719 0-4.924 2.206-4.924 4.924 0 .39.045.765.127 1.124-4.09-.205-7.72-2.166-10.148-5.144-.424.729-.667 1.577-.667 2.476 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.444 3.377 4.6 3.417-1.68 1.317-3.809 2.102-6.115 2.102-.397 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.213-.004-.425-.014-.637.961-.693 1.8-1.562 2.46-2.549z" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
    ))}
  </div>
</div>


          {/* Affiliates */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 font-heading">Affiliates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {affiliates.map((affiliate, index) => (
                <motion.div
                  key={affiliate.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-lg p-6 card-hover"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-body">{affiliate.name}</h4>
                  <p className="text-cyan-400 font-semibold mb-2 font-body">{affiliate.role}</p>
                  <p className="text-gray-400 text-sm mb-2 font-body">{affiliate.specialization}</p>
                  <p className="text-gray-500 text-xs font-body">{affiliate.affiliation}</p>
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* Members */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 font-heading">Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="glass-effect rounded-lg p-6 card-hover"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-body">{member.name}</h4>
                  <p className="text-cyan-400 font-semibold mb-2 font-body">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-2 font-body">{member.specialization}</p>
                  <p className="text-gray-500 text-xs font-body">{member.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Join Our Research
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-body">
              Interested in contributing to cutting-edge AI research? We welcome passionate researchers 
              and students to join our mission of advancing artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScydNENhXxXQhfKd8nWbawxD2y0jtPTcYjqFqRqhOyz-Da3tw/viewform?usp=header', '_blank')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-black transition-all duration-300">
                View Publications
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VarahamihiraLab;