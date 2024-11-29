import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
