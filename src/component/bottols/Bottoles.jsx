import React, { use } from 'react';

const Bottoles = ({ bottlesPromis }) => {
  
  const bottles = use(bottlesPromis)
  console.log(bottles)
  return (
    <div>
      <h1>another bottole</h1>
    </div>
  );
};

export default Bottoles;