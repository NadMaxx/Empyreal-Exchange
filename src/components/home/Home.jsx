import React, { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./home.css";
import { animated, useSpring } from "react-spring";
import AnimatedText from "../Animate Text/AnimatedText";

const Home = () => {
  const text1 = "Welcome to".split(" ");
  const text2 = "Empyreal Exchange".split(" ");

  let delay = 0;

  return (
    <div className="bg-nav-img relative " id="home">
      <div className="container mx-auto pt-[97px] min-h-screen ">
        <div className="absolute top-0 right-0 w-auto h-auto lg:w-[620px] lg:h-[447px]">
          <img src="/assets/gradients/Ellipse 1.svg" />
        </div>
        <div className="absolute top-0 left-0 w-auto h-auto lg:w-[1420px] lg:h-[447px]">
          <img src="/assets/gradients/Ellipse 2.svg" />
        </div>
        <div className="absolute bottom-0 right-0 w-auto h-auto lg:w-[620px] lg:h-[447px]">
          <img src="/assets/gradients/Ellipse 3.svg" />
        </div>
        <div className="font-chakraPetch bg-transparent  ">
          <div className="grid grid-cols-2 mt-[80px]">
            <div className="z-10 text-white w-[1299px] h-[240px]">
              {text1.map((word, index) => {
                const component = (
                  <>
                    <AnimatedText key={index} text={word} startDelay={delay} />
                    &nbsp;&nbsp;&nbsp; &nbsp;
                  </>
                );
                delay += 300;
                return component;
              })}
              <br />
              {text2.map((word, index) => {
                const component = (
                  <>
                    <AnimatedText key={index} text={word} startDelay={delay} />
                    &nbsp;&nbsp;&nbsp; &nbsp;
                  </>
                );
                delay += 300;
                return component;
              })}
            </div>
            <div className="flex flex-col items-end justify-evenly">
              <div className="custom--link border border-white border-opacity-20 h-[48px] w-[48px] flex items-center justify-center">
                <span className="top-left absolute"></span>
                <span className="top-right absolute"></span>
                <span className="bottom-left absolute"> </span>
                <span className="bottom-right absolute"></span>

                <a href="#">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/assets/icons/Twitter - Negative.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="custom--link border border-white border-opacity-20 h-[48px] w-[48px] flex items-center justify-center">
                <span className="top-left absolute"></span>
                <span className="top-right absolute"></span>
                <span className="bottom-left absolute"> </span>
                <span className="bottom-right absolute"></span>

                <a href="#">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/assets/icons/Discord - Negative.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="custom--link border border-white border-opacity-20 h-[48px] w-[48px] flex items-center justify-center">
                <span className="top-left absolute"></span>
                <span className="top-right absolute"></span>
                <span className="bottom-left absolute"> </span>
                <span className="bottom-right absolute"></span>

                <a href="#">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/assets/icons/Telegram - Negative.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            {/* Second */}

            <div className="mt-[200px]">
              <p className="flex items-center gap-x-[44px]">
                <span className="text-white text-base font-normal">
                  Welcome
                </span>
                <span>
                  {" "}
                  <img
                    className="w-[5px] h-[5px]"
                    src="/assets/icons/Ellipse 22.svg"
                    alt=""
                  />
                </span>
                <span className="text-white text-opacity-70 text-base font-normal w-[400px]">
                  Empyreal Exchange (EmpEx) - Complex strategies made easy for
                  everyone
                </span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 mt-2 lg:mt-24">
            <div className="flex gap-x-5 items-end justify-center">
              <div className="custom-button border border-white border-opacity-20">
                <span className="top-left absolute"></span>
                <span className="top-right absolute"></span>
                <span className="bottom-left absolute"></span>
                <span className="bottom-right absolute"></span>

                <button className="flex items-center py-[2px] bg-white bg-opacity-40 backdrop-blur-[44px]">
                  <span className="px-8 font-chakraPetch text-white text-sm font-semibold uppercase">
                    Connect Wallet
                  </span>

                  <span className="w-[36px] h-[36px] bg-white flex justify-center items-center mr-[2px]">
                    <AiOutlineRight className="text-black w-2 h-3" />
                  </span>
                </button>
              </div>
              <div className="custom-button border w-fit border-white border-opacity-20">
                <span className="top-left absolute"></span>
                <span className="top-right absolute"></span>
                <span className="bottom-left absolute"> </span>
                <span className="bottom-right absolute"></span>

                <button className="flex items-center py-[2px]  bg-transparent ">
                  <span className="px-8 font-chakraPetch h-[36px] w-[200px] flex items-center text-white text-sm font-semibold uppercase">
                    Explore this site
                  </span>
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <p className="m-0 text-white text-opacity-40 text-base font-normal w-[340px]">
                Accessible tokenized positions for everyone, earn yield, and
                give power to those who wouldnt normally have it. Democratize
                DeFi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
