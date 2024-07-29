import Image from "next/image";


const Buy = () => {

  return (
    <div id="buy">
      <div className="flex items-center justify-center mt-10 ">
      <p className="text-black text-4xl font-extrabold text-black italic w-auto p-4 bg-opacity-70">
        How To Buy
      </p>
    </div>
        <div className="max-md:flex-col max-md:ml-10 flex justify-center md:space-x-4 md:space-y-0 max-md:space-y-4 mt-8">
          <div className="bg-[#ffb3ba] text-gray-600 rounded-lg shadow-lg p-4 max-w-xs">
            <Image src="/kevin-wizard.png" width={400} height={400} alt="kevin with a wizard hat" className="rounded-lg mb-4" />
            <h2 className="text-xl font-bold">1. Install Coinbase Wallet!</h2>
            <p className="mt-2">First Things First, You&apos;ll Need To Install Coinbase Wallet. Just Grab It From The App Store Or As A Browser Extension.</p>
          </div>
          <div className="bg-[#ffffba] text-gray-600 rounded-lg shadow-lg p-4 max-w-xs">
            <Image src="/kevin-angel.png" width={400} height={400} alt="kevin on clouds" className="rounded-lg mb-4" />
            <h2 className="text-xl font-bold">2. Get ETH on Base Network</h2>
            <p className="mt-2">Transfer ETH Directly To Your Base Network Wallet Or Send It To Your Ethereum Wallet And Bridge ETH To Base Via The Official Coinbase Bridge.</p>
          </div>
          <div className="bg-[#bae1ff] text-gray-600 rounded-lg shadow-lg p-4 max-w-xs">
            <Image src="/kevin-glasses.png" width={300} height={300} alt="kevin with sunglasses" className="rounded-lg mb-4" />
            <h2 className="text-xl font-bold">3. Grab Some $KEVIN <br/> Join the Party!</h2>
            <p className="mt-2">Swing By Uniswap And Swap Your ETH For $KEVIN Using The Official CA Found On Our Page!</p>
          </div>
        </div>
        <div className="border-8 border-amber-100 rounded-lg overflow-hidden shadow-lg w-1/2 mx-auto mt-8 ">
      <video 
        className="w-full h-auto" 
        controls 
        autoPlay 
        muted 
        loop
      >
        <source src="/Kevin.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default Buy;