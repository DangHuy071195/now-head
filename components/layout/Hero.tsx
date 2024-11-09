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
      <section className="relative w-full h-screen mx-auto ">
        <div className="absolute inset-0 top-[24px] mx-auto flex flex-grow items-start gap-5">
          <div
            className="flex flex-col justify-center items-center mt-5"
            style={{ height: heightOfLineHero }}>
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div
              className="w-1 "
              style={{ height: '100%', background: 'linear-gradient(transparent, #7C72FF 30%)' }}
            />
          </div>
          <div ref={refHeroDesc}>
            <h1 className="mt-8 text-[30px] text-[#915eff]">
              Hi, I'm <span className="">Huy Nguyen</span>
            </h1>
            <p className="mt-2 text-[#33b3ae] text-[20px]">
              Im software engineer with experience in building web and mobile applications. I specialize in front-end
              development and UI/UX design.
              <br />I also develop RESTful APIs and microservices for web and mobile applications. Game development is
              my hobby.
              <span
                className="text-[#33b3ae]"
                style={{}}>
                I wanna be a professinal developer on javascript on bolth client side and nodejs on server side
                <br /> - Short term: Imporving all skill at company because i can get more experiences and more
                busisness, logicals and digitals. - Longterm: Can work and build more special and popular applications
                on web and mobile, maybe on desktop applications.
              </span>
            </p>
          </div>
        </div>
        <ComputerCanvas />
      </section>
    </>
  );
};

export default Hero;
