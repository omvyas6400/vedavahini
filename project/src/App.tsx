import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import PoojaBooking from './components/PoojaBooking';
import BrahminDirectory from './components/BrahminDirectory';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      <main>
        <Hero />
        <PoojaBooking />
        <BrahminDirectory />
        <ContactForm />
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;