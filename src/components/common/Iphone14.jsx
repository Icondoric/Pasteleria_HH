
import React from 'react';
import './Iphone14.css';

const Iphone14 = ({ children }) => {
  return (
    <div className="iphone14-container">
      <div className="iphone14">
        <div className="iphone-notch"></div>
        <div className="iphone-frame">
          <div className="iphone-screen">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone14;
