import { AiOutlineRight } from "react-icons/ai";
import "./about.css";
import Footer from "../../layout/Footer";
import AnimatedText from "./../Animate Text/AnimatedText";

const About = () => {
  const text1 = "Empreal Exchange Governance".split(" ");
  // const text2 = "Empyreal Exchange".split(" ");

  let delay = 0;
  return (
    <div className="bg-bg-img relative" id="about">
      <div className="container mx-auto py-[70px] min-h-screen">
        {/* <div className="absolute bottom-0 left-0 w-[620px] h-[447px]">
          <img src="/assets/gradients/Ellipse 4.svg" />
        </div> */}
        <div className="absolute top-0 left-0 w-[1420px] h-[447px]">
          <img src="/assets/gradients/Ellipse 2.svg" />
        </div>
        <div className="absolute bottom-0 right-0 w-[620px] h-[447px]">
          <img src="/assets/gradients/Ellipse 3.svg" />
        </div>
        <div className="font-chakraPetch bg-transparent ">
          <div className="grid grid-cols-2 mt-24">
            <div className="z-10 flex flex-col justify-center">
              <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2">
                <span>
                  <img src="/assets/icons/Group 18.svg" />
                </span>{" "}
                About Us
              </p>
              <div className="z-10 text-white w-[900px] h-[240px]">
                {text1.map((word, index) => {
                  const component = (
                    <>
                      <AnimatedText
                        key={index}
                        text={word}
                        startDelay={delay}
                      />
                      &nbsp;&nbsp;&nbsp; &nbsp;
                    </>
                  );
                  delay += 300;
                  return component;
                })}
              </div>

              <p className="w-[432px] text-white text-opacity-60 text-base font-normal m-0">
                With Arbitrum as the leading L2 network, our goal is to build a
                significant position as a Delegate to give a louder voice to
                individual investors. Box
              </p>
            </div>
            <div className="flex flex-col items-center justify-evenly">
              <div className="custom--link border border-white border-opacity-20 flex items-center justify-center hover:scale-[1.03] transition-transform">
                <span className="top-left absolute"></span>
                <span className="top-right absolute"></span>
                <span className="bottom-left absolute"> </span>
                <span className="bottom-right absolute"></span>

                <div className="flex items-center gap-x-[32px] p-[2px] w-[480px] h-[169px] bg-indigo-400 bg-opacity-40 rounded-sm backdrop-blur-[34px]">
                  <img
                    className="w-[170px] h-[170px] object-contain"
                    src="/assets/img/Rectangle 11.png"
                    alt=""
                  />
                  <div>
                    <h1 className="text-white text-xl font-normal flex gap-x-2">
                      <span className="!w-[26px] h-[26px]text-white text-base font-normal rounded-sm border border-white border-opacity-50 flex justify-center items-center">
                        1
                      </span>{" "}
                      Unique Liquidity Pairing
                    </h1>
                    <p className="w-[260px] mt-3 text-white text-opacity-70 text-sm font-normal leading-[17px]">
                      Our governance and rewards token, $EMP, is paired with
                      wrapped $ARB to increase our standing as an Arbitrum
                      Delegate.
                    </p>
                  </div>
                </div>
              </div>
              {/* Second */}
              <div className="flex w-full justify-end">
                <div className="custom--link mt-[34px] border border-white border-opacity-20 flex items-center justify-center hover:scale-[1.03] transition-transform">
                  <span className="top-left absolute"></span>
                  <span className="top-right absolute"></span>
                  <span className="bottom-left absolute"> </span>
                  <span className="bottom-right absolute"></span>

                  <div className="flex items-center justify-between gap-x-[32px] gap-l p-[2px] w-[480px] h-[169px] bg-indigo-400 bg-opacity-40 rounded-sm backdrop-blur-[34px]">
                    <div>
                      <h1 className="text-white text-xl font-normal flex gap-x-2">
                        <span className="!w-[26px] h-[26px]text-white text-base font-normal rounded-sm border border-white border-opacity-50 flex justify-center items-center">
                          2
                        </span>{" "}
                        EmpEx Influence
                      </h1>
                      <p className="w-[260px] mt-3 text-white text-opacity-70 text-sm font-normal leading-[17px]">
                      Investors can stake their $EMP tokens to create a position of influence within the EmpEx ecosystem and help determine the use of our power as a Delegate.
                      </p>
                    </div>
                    <img
                      className="w-[170px] h-[170px] object-contain"
                      src="/assets/img/Rectangle 11 (2).png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* Third */}
              <div className="custom--link mt-[34px] border border-white border-opacity-20 flex items-center justify-center hover:scale-[1.03] transition-transform">
                <span className="top-left absolute"></span>
                <span className="top-right absolute"></span>
                <span className="bottom-left absolute"> </span>
                <span className="bottom-right absolute"></span>

                <div className="flex items-center gap-x-[32px] p-[2px] w-[480px] h-[169px] bg-indigo-400 bg-opacity-40 rounded-sm backdrop-blur-[34px]">
                  <img
                    className="w-[170px] h-[170px] object-contain"
                    src="/assets/img/Rectangle 11 (1).png"
                    alt=""
                  />
                  <div>
                    <h1 className="text-white text-xl font-normal flex gap-x-2">
                      <span className="!w-[26px] h-[26px]text-white text-base font-normal rounded-sm border border-white border-opacity-50 flex justify-center items-center">
                        3
                      </span>{" "}
                      Real Yield
                    </h1>
                    <p className="w-[260px] mt-3 text-white text-opacity-70 text-sm font-normal leading-[17px]">
                    $EMP stakers can earn a portion of the revenue the protocol earns from our multitude of product offerings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="flex gap-x-5 items-end justify-start">
            <div className="custom-button border w-fit border-white border-opacity-20">
              <span className="top-left absolute"></span>
              <span className="top-right absolute"></span>
              <span className="bottom-left absolute"> </span>
              <span className="bottom-right absolute"></span>

              <button className="flex items-center py-[2px]  bg-[#98A1F1] bg-opacity-40 backdrop-blur-[44px]">
                <span className="px-8 font-chakraPetch text-white text-sm font-semibold uppercase">
                  Learn More
                </span>

                <span className="w-[36px] h-[36px] bg-white flex justify-center items-center mr-[2px] ">
                  <AiOutlineRight className=" text-black w-2 h-3" />{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
