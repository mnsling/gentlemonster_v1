import React, { useState } from 'react';

const categories = [
  {
    title: "COLLABORATIONS",
    items: [
      "VIEW ALL",
      "TEKKEN 8",
      "MUGLER",
      "JENTLE SALON",
      "MAISON MARGIELA",
      "OVERWATCH 2",
      "D'HEYGERE",
      "KUN",
    ],
  },
];

const Category = ({ title, items }) => (
  <div className="pt-2 md:pt-20 z-50">
    <h1 className="text-[6vw] md:text-[0.8vw] font-grotesk tracking-tighter py-2 border-b border-gray-300 px-10 md:border-none md:font-medium">
      {title}
    </h1>
    <div className="pt-10 px-10 font-grotesk flex flex-col gap-3 md:gap-1 md:py-5">
      {items.map((item, index) => (
        <button key={index} className="group w-fit">
          <span className="group-hover:translate-x-2 flex gap-1 button text-[2.4vw] md:text-[0.6vw]">
            <h1 className="group-hover:opacity-100 opacity-0 transition-opacity button">🡢</h1>
            <h1 className='text-left'>{item}</h1>
          </span>
        </button>
      ))}
    </div>
  </div>
);

const CSidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full md:w-[15%] md:h-full fixed pt-[5vh] border-b border-gray-300 md:border-none z-40">
      <button className="w-full flex justify-between py-3 px-10 text-[2.3vw] font-grotesk bg-white hover:bg-black hover:text-white button md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
        <h1>① PRODUCTS</h1>
        <h1>FILTER</h1>
      </button>
      {menuOpen && (
        <div className="fixed h-full w-full bg-white flex flex-col z-50 gap-10 md:hidden">
          {categories.map((category, index) => (
            <Category key={index} title={category.title} items={category.items} />
          ))}
        </div>
      )}
      <div className='hidden md:flex w-full h-full bg-white border-r'>
        <div className="hidden h-full w-full md:flex flex-col gap-5">
          {categories.map((category, index) => (
            <Category key={index} title={category.title} items={category.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSidebar;
