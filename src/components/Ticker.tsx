import React from 'react';

const Ticker: React.FC = () => {
  return (
    <div className="bg-gray-100 py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-sm">
        <span className="mx-4">IBOVESPA: 128.000,00 +0,5%</span>
        <span className="mx-4">DÓLAR: R$ 5,25 -0,2%</span>
        <span className="mx-4">NASDAQ: 13.200,00 +0,8%</span>
        <span className="mx-4">BITCOIN: $45.000,00 +2,0%</span>
      </div>
    </div>
  );
};

export default Ticker;
