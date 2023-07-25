import Footer from "../../layout/Footer";
import AnimatedText from "../Animate Text/AnimatedText";

const Product = () => {
  const text1 = "Simplicity in Action".split(" ");
  let delay = 0;
  return (
    <div
      className="bg-bg-img-action bg-no-repeat bg-top md:bg-bottom relative"
      id="action"
    >
      <div className="container  mx-auto py-[70px] min-h-screen">
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
          <div className="grid grid-cols-1  mt-[80px]">
            <div className="flex flex-col items-center text-center mb-[24px] z-10">
              <div className="z-10 text-white w-[900px] h-[140px] m-0">
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

              <p className="w-[45%] text-white text-opacity-60 text-base font-normal m-0">
                Due to our unique liquidity pairing, creating a position in the
                EmpEx ecosystem can be done completely through our very own
                exchange!
              </p>
              <p className="w-[50%] mt-2 text-white text-opacity-60 text-base font-normal m-0">
                You can convert $ETH directly into $ARB, wrap it, and swap for
                $EMP, all with the click of a single button. Each of our
                products, including the leverage and perpetuals tokens, adopt
                the same simplicity.
              </p>
              <p className="w-[45%] my-2 text-white text-opacity-60 text-base font-normal m-0">
                The goal is to keep things accessible for everyone!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-baseline justify-center gap-x-[24px] ">
              <div className="custom-button border w-3/6 h-auto border-white border-opacity-20 flex flex-col items-start ">
                <span className="top-left absolute"></span>
                <span className="top-right absolute"></span>
                <span className="bottom-left absolute"> </span>
                <span className="bottom-right absolute"></span>
                <div className="bg-gray-700 w-[99.9%] h-[300px]">
                  {/* <img
                  className="w-full h-[300px] object-cover"
                  src="/assets/img/Rectangle 11.png"
                  alt=""
                /> */}
                </div>

                <div className="mx-[14px]">
                  <h1 className="text-white text-xl font-normal flex gap-x-2">
                    Unique Liquidity Pairing
                  </h1>
                  <p className="w-[460px] mt-2 text-white text-opacity-70 text-sm font-normal leading-[17px]">
                    Our governance and rewards token, $EMP, is paired with
                    wrapped $ARB to increase our standing as an Arbitrum
                    Delegate.
                  </p>
                </div>
              </div>

              <div className="custom-button border w-[380px] h-auto border-white border-opacity-20 flex flex-col items-start ">
                <span className="top-left absolute"></span>
                <span className="top-right absolute"></span>
                <span className="bottom-left absolute"> </span>
                <span className="bottom-right absolute"></span>

                <img
                  className="w-full h-[300px] object-cover"
                  src="/assets/img/Rectangle 10.png"
                  alt=""
                />

                <div className="mx-[14px]">
                  <h1 className="text-white text-xl font-normal flex gap-x-2">
                    Unique Liquidity Pairing
                  </h1>
                  <p className="w-[360px] mt-2 text-white text-opacity-70 text-sm font-normal leading-[17px]">
                    Our governance and rewards token, $EMP, is paired with
                    wrapped $ARB to increase our standing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
