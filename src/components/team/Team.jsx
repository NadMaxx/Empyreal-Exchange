import Footer from "../../layout/Footer";
import AnimatedText from "../Animate Text/AnimatedText";

const Team = () => {
  const text1 = "Charting Your Course".split(" ");

  let delay = 0;

  return (
    <div className="bg-bg-img relative bg-no-repeat bg-center" id="team">
      <div className=" bg-gray-img-team bg-no-repeat bg-center">
        <div className="container mx-auto py-[70px] min-h-screen">
          <div className="absolute top-0 left-0 w-auto h-auto md:w-[1420px] md:h-[447px]">
            <img src="/assets/gradients/Ellipse 2.svg" />
          </div>
          <div className="absolute bottom-0 right-0 w-auto h-auto md:w-[620px] md:h-[447px]">
            <img src="/assets/gradients/Ellipse 3.svg" />
          </div>
          <div className="font-chakraPetch bg-transparent ">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-24">
              <div className="z-10 md:col-span-5">
                <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2">
                  <span>
                    <img src="/assets/icons/Group 18.svg" />
                  </span>{" "}
                  RoadMap
                </p>
                <div className="z-10 text-white mb-1">
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
                  Roadmap to Success: Set goals, overcome obstacles, achieve
                  dreams.
                </p>

                <div className="flex w-full justify-center">
                  <div className="custom--link border border-white border-opacity-20 p-1 w-[440px] h-[300px] flex items-center justify-end hover:scale-[1.03] transition-transform mt-[89px]">
                    <span className="top-left absolute"></span>
                    <span className="top-right absolute"></span>
                    <span className="bottom-left absolute"> </span>
                    <span className="bottom-right absolute"></span>

                    <div className="flex items-center gap-x-[32px] p-[30px] w-full h-full bg-indigo-400 bg-opacity-40 rounded-sm backdrop-blur-[34px] bg-[rgba(83, 59, 255, 0.70)] backdrop-blur-[17px]">
                      <div>
                        <h1 className="text-white text-xl font-normal flex gap-x-2 items-center">
                          <span className="!w-[26px] h-[26px]text-white text-base font-normal rounded-sm border border-white border-opacity-50 flex justify-center items-center">
                            2
                          </span>{" "}
                          Governance Token Launch on BSC ($ASD)
                        </h1>
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          Launch Date: Jan 8th, 2022 Contract Audit
                        </p>{" "}
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          TechAudit Completed on Jan 21st, 20225k Telegram
                          members
                        </p>{" "}
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          Launch Date: Jan 8th, 2022 Contract Audit
                        </p>{" "}
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          Launch Date: Jan 8th, 2022 Contract Audit
                        </p>{" "}
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          Launch Date: Jan 8th, 2022 Contract Audit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 "></div>
              <div className="md:col-span-5">
                {/* Second */}
                <div className="flex w-full justify-start">
                  <div className="custom--link border border-white border-opacity-20 p-1 w-[440px] h-[300px] flex items-center justify-end hover:scale-[1.03] transition-transform">
                    <span className="top-left absolute"></span>
                    <span className="top-right absolute"></span>
                    <span className="bottom-left absolute"> </span>
                    <span className="bottom-right absolute"></span>

                    <div className="flex items-center gap-x-[32px] p-[30px] w-full h-full bg-indigo-400 bg-opacity-40 rounded-sm backdrop-blur-[34px] bg-[rgba(83, 59, 255, 0.70)] backdrop-blur-[17px]">
                      <div>
                        <h1 className="text-white text-xl font-normal flex gap-x-2 items-center">
                          <span className="!w-[26px] h-[26px]text-white text-base font-normal rounded-sm border border-white border-opacity-50 flex justify-center items-center">
                            1
                          </span>{" "}
                          Governance Token Launch on BSC ($ASD)
                        </h1>
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          Launch Date: Jan 8th, 2022 Contract Audit
                        </p>{" "}
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          TechAudit Completed on Jan 21st, 20225k Telegram
                          members
                        </p>{" "}
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          Launch Date: Jan 8th, 2022 Contract Audit
                        </p>{" "}
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          Launch Date: Jan 8th, 2022 Contract Audit
                        </p>{" "}
                        <p className="text-white text-opacity-50 text-base font-medium uppercase flex items-center gap-x-2 mt-1">
                          <span>
                            <img src="/assets/icons/Group 18.svg" />
                          </span>{" "}
                          Launch Date: Jan 8th, 2022 Contract Audit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Team;
