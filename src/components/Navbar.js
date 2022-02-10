import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-l from-violet-500 to-fuchsia-500 w-full text-white p-4 sticky top-0 border-b-2">
        <div className="flex items-center justify-between">
          <p className="font-medium text-2xl">YtoMP3 Converter</p>
          <div className="font-normal textxl flex items-center">
            <a href="https://mpr-resume-builder.vercel.app/" target="_blank" rel="noreferrer" className="hidden md:mr-5 md:block hover:underline">Resume Bilder</a>
            <a href="https://phanindra-reddy.github.io/react-portfolio/" target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
