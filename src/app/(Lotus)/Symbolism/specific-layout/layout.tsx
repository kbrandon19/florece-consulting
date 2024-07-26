import React from 'react';
import Header from '../../../../components/Header/Header-min'
import Footer from '../../../../components/Footer/Footer'

const SpecificLayout = ({ children }: { children: React.ReactNode }) => {
  return (
   
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>

  );
};

export default SpecificLayout;
