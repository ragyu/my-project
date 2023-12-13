'use client';
import React from 'react';
import Image from 'next/image';
import profileImage from '../public/images/Main.jpg';
import AnimatedIcon from './AnimatedIcon';
import AnimatedText from './AnimatedText';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';
import { AiOutlineUser, AiFillCalendar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';

export default function HomeSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-14 md:py-16 md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-1/2 md:mt-1">
          <Image
            className="rounded-full md:shadow-2xl"
            src={profileImage}
            alt="profileImage"
            width={300}
            height={300}
            priority
          />
          <div className="flex text-center justify-center my-6 md:px-10 md:inline-block">
            <ul className="list-inside mx-auto border-3 leading-relaxed space-y-2 md:space-y-1">
              <li>
                <h2 className="text-xl font-bold mt-2 md:text-xl">
                  {'이라규 91812842'}
                </h2>
              </li>
              <li>
                <AnimatedIcon />
              </li>
              <li>
                <h3 className="text-base font-semibold flex space-x-3 md:text-base">
                  <AiOutlineUser className="inline-block mx-2" />
                  중부대학교 정보보호학과 3학년
                </h3>
              </li>
              <li>
                <h3 className="text-base font-semibold flex space-x-3 md:text-base">
                  <AiFillCalendar className="inline-block mx-2" /> 1999.05.06
                </h3>
              </li>
              <li>
                <h3 className="text-base font-semibold flex space-x-3 md:text-base">
                  <MdLocationOn className="inline-block mx-2" /> 경기도 고양시
                  덕양구 거주
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:mt-0 md:w-3/5">
          <AnimatedText
            text=" 환영합니다!"
            className="text-4xl/loose mt-6 !text-left m-4"
          />
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            제 프로젝트들을 소개하는 홈페이지 입니다.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center cursor-pointer mb-28">
        <Link
          to="projects"
          activeClass="action"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
