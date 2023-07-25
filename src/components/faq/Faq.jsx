import { useState } from "react";
import Footer from "../../layout/Footer";
import AnimatedText from "../Animate Text/AnimatedText";

const Faq = () => {
  const text1 = "F.A.Q".split(" ");

  let delay = 0;
  const [faqs, setFaqs] = useState([
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. The Virtual DOM is a virtual representation of the actual DOM, which helps React efficiently update the real DOM.",
      isOpen: false,
    },
    {
      question: "How do I install Node.js?",
      answer:
        "You can download Node.js from the official website and follow the installation instructions.",
      isOpen: false,
    },
    {
      question: "What is the Virtual DOM?",
      answer:
        "The Virtual DOM is a virtual representation of the actual DOM, which helps React efficiently update the real DOM.",
      isOpen: false,
    },
    {
      question: "How can I create a new React app?",
      answer: "You can create a new React app using create-react-app CLI tool.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevState) => {
      const updatedFaqs = prevState.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return { ...faq, isOpen: false };
        }
      });
      return updatedFaqs;
    });
  };

  return (
    <div className="bg-bg-img relative">
      <div className="container mx-auto py-[70px] min-h-screen">
        <div className="absolute top-0 left-0 w-auto h-auto lg:w-[1420px] lg:h-[447px]">
          <img src="/assets/gradients/Ellipse 2.svg" />
        </div>
        <div className="absolute bottom-0 right-0 w-auto h-auto lg:w-[620px] lg;h-[447px]">
          <img src="/assets/gradients/Ellipse 3.svg" />
        </div>{" "}
        <div className="absolute bottom-0 left-0 w-full">
          <img src="/assets/image 11.png" className="w-full object-cover" />
        </div>
        <div className="font-chakraPetch bg-transparent">
          <div className="grid grid-cols-1 mt-24">
            <div className="z-0 md:z-10 flex flex-col justify-center items-center mb-[42px]">
              <div className="z-10 text-white w-[900px] h-[140px] m-0 flex justify-center">
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
            </div>
            <div className="max-w-[600px] mx-auto px-2 ">
              {faqs.map((faq, index) => (
                <div className="mb-[20px]" key={index}>
                  <div
                    className="custom-button  border border-white border-opacity-20 w-auto md:w-[622px] h-full p-1 "
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="top-left absolute"></span>
                    <span className="top-right absolute"></span>
                    <span className="bottom-left absolute"></span>
                    <span className="bottom-right absolute"></span>

                    <div className="flex justify-between items-center bg-white bg-opacity-40 backdrop-blur-[44px]">
                      <p className="px-5 text-white"> {faq.question} </p>
                      <button
                        className={`text-xl p-5 transform origin-center transition-transform duration-200 `}
                      >
                        {faq.isOpen ? (
                          <img src="/assets/icons/Button.svg" />
                        ) : (
                          <img src="/assets/icons/Button (1).svg" />
                        )}{" "}
                      </button>
                    </div>

                    {faq.isOpen && (
                      <>
                        <div className=" w-full h-[1px] bg-white bg-opacity-50 absolute z-10 "></div>
                        <div className="p-5 text-white font-normal  bg-white bg-opacity-40 backdrop-blur-[44px] ">
                          {faq.answer}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;

//   <div className="custom-button border border-white border-opacity-20">
//   <span className="top-left absolute"></span>
//   <span className="top-right absolute"></span>
//   <span className="bottom-left absolute"></span>
//   <span className="bottom-right absolute"></span>

//   <button className="flex items-center py-[2px] bg-white bg-opacity-40 backdrop-blur-[44px]">
//     <span className="px-8 font-chakraPetch text-white text-sm font-semibold uppercase">
//       Connect Wallet
//     </span>

//     <span className="w-[36px] h-[36px] bg-white flex justify-center items-center mr-[2px]">
//       <AiOutlineRight className="text-black w-2 h-3" />
//     </span>
//   </button>
// </div>
