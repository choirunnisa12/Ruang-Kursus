import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className='container mx-auto flex justify-between gap-14 md:gap-4'
      >
        {/* First Section */}
        <div className='flex flex-col justify-between space-y-4 max-w-[300px]'>
          <h1 className='text-2xl font-bold'>Ruang Kursus</h1>
          <p className='text-dark2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam impedit nam atque iste quas eius, ipsam minima ut odit id hic officia, aut nihil, vel placeat optio alias assumenda earum?
          </p>
        </div>

        {/* Second Section */}
        <div className="flex justify-around w-full">
          <div className="space-y-4 min-w-[200px]">
            <h1 className="text-2xl font-bold">Hot Tools</h1>
            <ul className="text-dark2 space-y-2 text-lg">
              <li className="cursor-pointer hover:text-secondary duration-200">Figma</li>
              <li className="cursor-pointer hover:text-secondary duration-200">Flutter</li>
              <li className="cursor-pointer hover:text-secondary duration-200">React JS</li>
              <li className="cursor-pointer hover:text-secondary duration-200">Node JS</li>
            </ul>
          </div>

          <div className="space-y-4 min-w-[200px]">
            <h1 className="text-2xl font-bold">Company</h1>
            <ul className="text-dark2 space-y-2 text-lg">
              <li className="cursor-pointer hover:text-secondary duration-200">Home</li>
              <li className="cursor-pointer hover:text-secondary duration-200">Service</li>
              <li className="cursor-pointer hover:text-secondary duration-200">About</li>
              <li className="cursor-pointer hover:text-secondary duration-200">Contact</li>
            </ul>
          </div>

          <div className="space-y-4 min-w-[200px]">
            <h1 className="text-2xl font-bold">Learn Language</h1>
            <ul className="text-dark2 space-y-2 text-lg">
              <li className="cursor-pointer hover:text-secondary duration-200">PHP</li>
              <li className="cursor-pointer hover:text-secondary duration-200">JavaScript</li>
              <li className="cursor-pointer hover:text-secondary duration-200">Dart</li>
              <li className="cursor-pointer hover:text-secondary duration-200">HTML & CSS</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
