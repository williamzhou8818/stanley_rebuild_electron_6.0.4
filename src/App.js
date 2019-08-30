import React, {Fragment} from 'react';
import { Switch,  Route } from 'react-router-dom';

import MainLogo from './components/Header/MainLogo/MainLogo';
import SubNavs from './components/Header/Navs/SubNav';
import MainNav from './components/Header/Navs/mainNav';

import AboutOurHotel from './components/MainContents/AboutOurHotel/AboutOurHotel';
import Maps from './components/MainContents/Maps/Maps';
import OurHotel from './components/MainContents/OurHotel/OurHotel';

import Footer from './components/Footer/Footer';


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
          <Switch>

            <Route exact  path='/' component={AboutOurHotel} />
            <Route exact path='/ourhotel' component={OurHotel} />
            <Route  path='/ourhotel/:name' component={OurHotel} />
            <Route exact path='/maps' component={Maps} />
            <Route    path='/maps/:id' component={Maps} />


          </Switch>
      </main>
      
     <div >

        <Footer /> 
     </div>
    

    </Fragment>
   
  );
}

export default App;
