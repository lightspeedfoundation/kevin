 import Image from "next/image";

 const Side = () => {

return (

    <div>
        <div className="  bg-yellow-300 fixed top-7 mt-10 border-y-2 border-r-2 border-black rounded-r-lg p-4 border-b-8" >
        <p className="text-5xl font-bold italic font-serif max-md:text-3xl">
            $KEVIN
        </p>
        </div>
        <div>
        <a className=" ml-2 border-black bg-white fixed top-32 mt-10 border-2 border-b-4 rounded-full px-4 py-1" 
        href="https://app.uniswap.org/swap?chain=base&inputCurrency=0x4200000000000000000000000000000000000006&outputCurrency=0xee088cd3ea75f509fe38a218a3f707c033627eda" target="_blank" >
            BUY NOW!
       </a>
        </div>
        <div className="ml-4 bottom-60 fixed space-y-4">
        <a className="rounded-full p-2 " href="https://t.me/iamkevincoin" target="_blank" rel="noopener noreferrer">
          <Image src="/Telegram.png" width={40} height={40} alt="telegram-icon" />
        </a>
        <a className=" p-2 " href="https://x.com/iamkevincoin" target="_blank" rel="noopener noreferrer">
          <Image className="rounded-full" src="/X.png" width={40} height={40} alt="x-icon" />
        </a>
        <a className=" p-2 " href="https://dexscreener.com/base/0x353e101ade44918239f31b0a310ca25a10042c6c" target="_blank" rel="noopener noreferrer">
          <Image className="rounded-full" src="/dex.png" width={40} height={40} alt="x-icon" />
        </a>
      </div>
    </div>
);
    
 };

 export default Side;