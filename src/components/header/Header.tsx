import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="max-w-[1400px] mx-auto my-0 py-5">
        <h1 className="text-slate-50 text-2xl font-bold"><Link href={"/"}>DEVCAMP</Link></h1>
      </div>
    </header>
  );
};

export default Header;
