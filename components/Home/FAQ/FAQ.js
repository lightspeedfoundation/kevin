import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Is the Liquidity Pool Locked?',
      answer:  (
        <span>
          Yes, the Kevin LP is locked with UNCX{' '}
          <a href="https://basescan.org/tx/0xd98d65e0d94921826cbaa830d56d8099ca8f491ac398e9862e10c929f43da5c0" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          https://basescan.org/tx/0xd98d65e0d94921826cbaa830d56d8099ca8f491ac398e9862e10c929f43da5c0
          </a>.
        </span>
      ),
    },
    {
      question: 'Contract is Renounced?',
      answer:  (
        <span>
          $KEVIN Contract is renounced.{' '}
          <a href="https://basescan.org/tx/0xb8feb3870d8f733763d21fb484f222fc6e22cdd5a4bdd7c187279316e8cacb29" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          https://basescan.org/tx/0xb8feb3870d8f733763d21fb484f222fc6e22cdd5a4bdd7c187279316e8cacb29
          </a>.
        </span>
      ),
    },
    {
      question: 'Who is the Top Holder Address?',
      answer: 'Our top holder is UNCX vesting wallet, these tokens are slowly vesting for marketing and liquidity initiatives.',
    },
    {
        question: 'How Much Kevin Do I Need to Unlock Rewards?',
        answer: 'To gain access to rewards, you need at least 10 $KEVIN.',
      },
  ];

  return (
    <div id="FAQ">
      <div className="flex items-center justify-center mt-20 ">
    <p className="text-black text-4xl font-extrabold text-black italic w-auto p-4 bg-opacity-70 ">
    FAQs
    </p>
  </div>
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg mt-2 ">
      
     
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-2 text-left text-gray-700 focus:outline-none"
            >
              <span className="text-xl ">{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600 break-words ">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQSection;