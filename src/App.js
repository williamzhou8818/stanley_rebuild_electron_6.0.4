import React, {Fragment} from 'react';


import MainLogo from './components/Header/MainLogo/MainLogo';
import SubNavs from './components/Header/Navs/SubNav';
import MainNav from './components/Header/Navs/mainNav';


// Style Sheets

import './App.css';


function App() {
  return (
    <Fragment>
      <header>
        <MainLogo /> 
             <SubNavs/>
             <MainNav /> 
   
      </header>
      <main>
       
      </main>
      

    </Fragment>
   
  );
}

export default App;
