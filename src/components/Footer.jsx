import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-gray-400 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ashish Raj. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
