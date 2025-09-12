import React from 'react';

const Ticker: React.FC = () => {
  return (
    <div className="bg-white border-y py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-sm text-gray-700">
        <span className="mx-4">BVM12: 1.352,7 +12,3%</span>
        <span className="mx-4">IBOVESPA: 128.000 -0,5%</span>
        <span className="mx-4">DÓLAR: R$ 5,25 -0,2%</span>
        <span className="mx-4">NASDAQ: 13.200 +0,8%</span>
      </div>
    </div>
  );
};

export default Ticker;
