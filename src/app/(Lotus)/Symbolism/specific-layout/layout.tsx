import React from 'react';
import Header from '../../../../components/Header/Header-min'

const SpecificLayout = ({ children }: { children: React.ReactNode }) => {
  return (
   
    <div>
      <Header/>
      <main>{children}</main>
    </div>

  );
};

export default SpecificLayout;
