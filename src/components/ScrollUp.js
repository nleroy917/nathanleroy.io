import React from 'react';
const ScrollUp = ({ pos }) => {
  return (
    <div className="px-5 lg:px-20 xl:px-20 fixed bottom-0 right-0">
      <div>
        {pos.x},{pos.y}
      </div>
    </div>
  );
};

export default ScrollUp;
