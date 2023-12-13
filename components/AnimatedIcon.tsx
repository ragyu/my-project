'use client';
import React from 'react';
import Image from 'next/image';
import myIcon from '../public/gmail.png';
import { motion } from 'framer-motion';
import { SiGithub, SiNaver } from 'react-icons/si';
const LINKS = [
  { icon: <SiGithub />, url: 'https://github.com/ragyu' },
  {
    icon: <SiNaver className="text-green-500" />,
    url: 'mailto:ragyu0506@naver.com',
  },
  {
    img: <Image src={myIcon} alt="My Icon" />,
    url: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ragyu0506@gmail.com&body=&subject=',
  },
];
export default function AnimatedIcon() {
  return (
    <section className="flex items-center justify-center flex-wrap">
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <motion.a
            className="w-5 mx-3 hover:text-yellow-400 sm:mx-1"
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon || link.img}
          </motion.a>
        ))}
      </ul>
    </section>
  );
}
