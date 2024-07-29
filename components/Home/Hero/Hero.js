import Image from "next/image";


const Hero = () => {

  return (
    <div id="hero" className="bg-gradient-to-b from-blue-500 to-white  ">

<div className="flex flex-col md:flex-row justify-center p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-1">
    <div className="  bg-white border-2 border-black rounded-lg p-2 mr-1">
      <Image className=" rounded-lg" 
      src="/kevin-gif1.gif"
      width={500}
      height={500}
      alt="Kevin">
      </Image>
    </div>
    <div className="flex items-center bg-white border-2 border-r-8 border-b-8 border-black rounded-lg p-4 shadow-lg md:w-1/3">
      <div className=" max-md:ml-5 w-96" >
      <h3 className="text-2xl md:text-4xl font-bold text-black ">$Kevin on BASE</h3>
      <p className="break-words  text-l font-medium font-serif tracking-widest mt-2">Hi iam Kevin, da meem dat reewards ETH. evry time i go to skool for show n tel, i bring ETH and shar it with all my frens.</p>
      <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=0x4200000000000000000000000000000000000006&outputCurrency=0xee088cd3ea75f509fe38a218a3f707c033627eda" target="_blank" className="mt-4 md:mt-8 inline-flex items-center justify-center px-4 md:px-8 py-2 md:py-3 font-bold font-mono text-white bg-slate-950 rounded hover:bg-slate-800">
        BUY NOW!
      </a>
    </div>
    </div>
  </div>
  <div className="flex justify-center mt-2 p-4 md:p-8">
        <div className="  p-4 border-2 border-black border-r-8 rounded-lg bg-white w-full md:w-auto">
          <span className=" max-md:ml-5 max-md:w-fit flex-1 text-xs md:text-lg italic font-medium text-foreground">
          0xee088CD3Ea75f509Fe38A218a3F707C033627eDa
          </span>
          <a
            href="https://dexscreener.com/base/0x353e101ade44918239f31b0a310ca25a10042c6c"
            target="_blank"
            className="ml-2 max-md:ml-5 inline-flex items-center justify-center px-2 md:px-4 py-1 md:py-2 text-white bg-black rounded-full hover:bg-black/80"
          >
            Dexscreener
          </a>
        </div>
      </div>
        </div>
  );
};

export default Hero;