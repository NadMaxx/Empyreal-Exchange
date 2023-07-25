const Footer = () => {
  return (
    <div className=" container hidden mx-auto md:flex justify-center w-full font-chakraPetch">
      <div className="absolute bottom-0 bg-black footer--clip w-[900px] h-[40px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap h-[40px] items-center md:justify-around justify-center">
            <p className="m-0 text-xs text-opacity-50  text-zinc-100 font-medium py-1">
              <a className="text-zinc-100">Privacy Policy</a>
              <span> </span>And<span> </span>
              <a className="text-zinc-100">Terms</a>
            </p>
            <div className="flex gap-x-7">
              <a href="#">
                <img
                  className="w-[20px] h-[20px]"
                  src="/assets/icons/Twitter - Negative.svg"
                  alt=""
                />
              </a>

              <a href="#">
                <img
                  className="w-[20px] h-[20px]"
                  src="/assets/icons/Discord - Negative.svg"
                  alt=""
                />
              </a>

              <a href="#">
                <img
                  className="w-[20px] h-[20px]"
                  src="/assets/icons/Telegram - Negative.svg"
                  alt=""
                />
              </a>
            </div>
            <p className="m-0 text-xs text-opacity-50  text-zinc-100 font-medium py-1">
              All rights reserved © Empyreal Exchange
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
