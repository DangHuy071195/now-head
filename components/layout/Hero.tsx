import React, { useEffect, useState } from 'react';
import ComputerCanvas from '../computer';
const Hero = () => {
  const refHeroDesc = React.useRef<HTMLDivElement>(null);
  const [heightOfLineHero, setHeightOfLineHero] = useState(0);

  useEffect(() => {
    setHeightOfLineHero(refHeroDesc?.current?.offsetHeight ?? 40);
  }, []);
  return (
    <>
      <section className="relative w-full h-auto mx-auto mt-[48px]">
        <div className=" inset-0  mx-auto flex flex-grow items-start gap-5">
          <div
            className="flex flex-col justify-center items-center "
            style={{ height: heightOfLineHero }}>
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div
              className="w-1 "
              style={{ height: '100%', background: 'linear-gradient(transparent, #7C72FF 30%)' }}
            />
          </div>
          <div ref={refHeroDesc}>
            <h1 className="text-[30px] text-[#915eff]">
              Hi, I am <span className="">Huy Nguyen</span>
            </h1>
            <ul
              className="text-[#fff] text-2xl"
              style={{ listStyle: 'inside' }}>
              <li>
                Im software engineer with experience in building web and mobile applications. I specialize in front-end
                development and UI/UX design.
              </li>
              <li>I also develop RESTful APIs and microservices for web and mobile applications.</li>
              <li>
                <span className="text-[#fff]">
                  I have not had the opportunity to participate in projects with Nextjs but I have knowledge and
                  understanding of it. Based on my background and experience with React JS and the course on Udemy about
                  NextJs, I am confident that I can work with it with the requirements of optimizing SEO and performance
                  for the website...etc.
                  <br />
                </span>
              </li>
              <li>
                <span className="text-white">
                  My English skills are not perfect, but they are sufficient for chatting, writing, understanding, and a
                  little bit of listening. I am not completely confident, but I am eager to try and secure a job.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <ComputerCanvas />
      </section>
    </>
  );
};

export default Hero;
