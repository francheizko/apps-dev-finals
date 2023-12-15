import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
        <span className="text-xl font-bold">Localancer</span>
        <nav className="md:ml-auto md:mr-4 md:flex items-center">
          {/* Add your navigation links here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
