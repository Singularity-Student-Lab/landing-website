import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Zap, Database, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

// Use your Cloudinary cloud name
const CLOUDINARY_CLOUD_NAME = 'djtemmctt';

const getCloudinaryUrl = (publicId, transformations = '') => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${transformations}${publicId}`;
};

const AgastyaLab = () => {
  const executives = [
    {
      name: 'Pradeep Chalamcharla',
      // role: 'Lab Director',
      specialization: 'Robotics & Autonomous Systems',
      image: 'image link here',
      bio: 'Leading robotics expert with 12+ years of experience in autonomous systems and robotic intelligence.'
    },
  ];

  // const affiliates = [
  //   {
  //     name: 'Prof. John Robotics',
  //     role: 'Faculty Advisor',
  //     specialization: 'Mechanical Engineering',
  //     affiliation: 'Department of Engineering'
  //   },
  //   {
  //     name: 'Dr. Sarah Sensors',
  //     role: 'Industry Partner',
  //     specialization: 'Sensor Technologies',
  //     affiliation: 'SmartTech Industries'
  //   },
  //   {
  //     name: 'Dr. Mike Embedded',
  //     role: 'Collaborating Researcher',
  //     specialization: 'Embedded Systems',
  //     affiliation: 'Embedded Research Labs'
  //   }
  // ];

  const members = [
     {
      name: 'Vedansh Rathore',
      // role: 'MS Student',
      specialization: 'Smart Sensors',
      year: '3rd Year'
    },
     {
      name: 'Yogendra Konduru',
      // role: 'MS Student',
      specialization: 'Smart Sensors',
      year: '2nd Year'
    },
    {
      name: 'Aditya Kumar',
      // role: 'PhD Student',
      specialization: 'Autonomous Navigation',
      year: '2nd Year'
    },
    // {
    //   name: 'Emma Sensor',
    //   role: 'MS Student',
    //   specialization: 'Smart Sensors',
    //   year: '2nd Year'
    // },
    // {
    //   name: 'David IoT',
    //   role: 'Undergraduate Researcher',
    //   specialization: 'IoT Networks',
    //   year: 'Senior'
    // },
    // {
    //   name: 'Sophie Embedded',
    //   role: 'PhD Student',
    //   specialization: 'Embedded AI',
    //   year: '4th Year'
    // },
    // {
    //   name: 'Ryan Automation',
    //   role: 'MS Student',
    //   specialization: 'Industrial Automation',
    //   year: '1st Year'
    // },
    // {
    //   name: 'Maya Smart',
    //   role: 'Undergraduate Researcher',
    //   specialization: 'Smart Cities',
    //   year: 'Junior'
    // }
  ];

  const researchAreas = [
    {
      title: 'Robotics',
      description: 'Developing intelligent robotic systems with advanced perception, planning, and control capabilities.',
      icon: Cpu,
      color: 'from-blue-500 to-blue-500'
    },
    {
      title: 'Internet of Things',
      description: 'Building connected IoT ecosystems with smart sensors, edge computing, and data analytics.',
      icon: Wifi,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Embedded Systems',
      description: 'Designing efficient embedded computing platforms for real-time applications and edge intelligence.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart Environments',
      description: 'Creating intelligent environments that adapt and respond to human needs through automation.',
      icon: Database,
      color: 'from-purple-500 to-pink-500'
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
          src="https://res.cloudinary.com/djtemmctt/video/upload/v1761393761/WhatsApp_Video_2025-09-24_at_11.38.39_PM_zm6ivn.mp4"
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Cpu className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">Agastya</span> Lab
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-body">
              Robotics, IoT & Embedded Systems
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl leading-relaxed font-body">
              Agastya Lab, inspired by the ancient sage known for his wisdom and innovation, is the Drones, IoT, and LoRa division of the Singularity Student Research Lab at SRM University AP. It’s where circuits take flight and ideas connect — students build smart systems, autonomous drones, and long-range IoT networks that bridge the physical and digital worlds. From sky to sensor, Agastya Lab turns imagination into intelligent motion.
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
              To advance the field of robotics, IoT, and embedded systems through innovative research in autonomous 
              systems, smart sensors, and intelligent automation. We develop practical solutions that enhance human 
              capabilities, improve efficiency, and create sustainable smart environments that benefit society and 
              industry.
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
              Research <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl font-body">
              Our research spans the exciting domains of robotics, IoT, and embedded systems
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
              Our <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl font-body">
              Meet the engineers building the intelligent systems of tomorrow
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
                  className="glass-effect rounded-xl p-6 flex flex-col items-center md:items-start text-center md:text-left card-hover"
                >
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
                  <h4 className="text-xl font-bold text-white mb-2 font-body">{executive.name}</h4>
                  <p className="text-blue-400 font-semibold mb-2 font-body">{executive.role}</p>
                  <p className="text-gray-400 text-sm mb-3 font-body">{executive.specialization}</p>
                  <p className="text-gray-300 text-sm leading-relaxed font-body">{executive.bio}</p>
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
                  <p className="text-blue-400 font-semibold mb-2 font-body">{affiliate.role}</p>
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
                  <p className="text-blue-400 font-semibold mb-2 font-body">{member.role}</p>
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
              Build the Future of Automation
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-body">
              Ready to create intelligent systems that transform how we live and work? Join our team of 
              robotics and IoT innovators building the smart world of tomorrow.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScydNENhXxXQhfKd8nWbawxD2y0jtPTcYjqFqRqhOyz-Da3tw/viewform?usp=header', '_blank')}
                className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-black transition-all duration-300">
                View Our Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AgastyaLab;