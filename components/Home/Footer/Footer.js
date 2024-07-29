import Image from "next/image";

const Footer = () => {
  return (
    <div id="Footer">
    <div className="bg-gradient-to-b from-white to-blue-500 p-6 flex flex-col items-center">
      <h1 className="text-gray-700 text-4xl italic font-bold mb-4">$KEVIN</h1>
      <p>
      0xee088CD3Ea75f509Fe38A218a3F707C033627eDa
      </p>
      <div className="mb-4 mt-8">
        <a className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700" href="https://app.uniswap.org/swap?chain=base&inputCurrency=0x4200000000000000000000000000000000000006&outputCurrency=0xee088cd3ea75f509fe38a218a3f707c033627eda" target="_blank" rel="noopener noreferrer">
          BUY NOW
        </a>
      </div>
      <div className="flex space-x-4 mb-4">
        <a className=" p-2 " href="https://t.me/iamkevincoin" target="_blank" rel="noopener noreferrer">
          <Image className="rounded-full" src="/Telegram.png" width={50} height={50} alt="telegram-icon" />
        </a>
        <a className=" p-2 " href="https://x.com/iamkevincoin" target="_blank" rel="noopener noreferrer">
          <Image className="rounded-full" src="/X.png" width={50} height={50} alt="x-icon" />
        </a>
        <a className=" p-2 " href="https://dexscreener.com/base/0x353e101ade44918239f31b0a310ca25a10042c6c" target="_blank" rel="noopener noreferrer">
          <Image className="rounded-full" src="/dex.png" width={50} height={50} alt="Dex-icon" />
        </a>
      </div>
      <p className="text-gray-300 text-center mt-2 text-sm">
        Disclaimer: We Are A Memecoin Fan Community That Is Not Affiliated With Coinbase Or Base
      </p>
    </div>
    </div>
  );
};

export default Footer;
