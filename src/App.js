import React from 'react';
import './App.css';

import Head from './components/Head';

//views
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import InspirationalQuote from './components/InspirationalQuote';
import Main from './components/Main';


function App() {
  return (

    <div>
      <Head />
      <Banner />
      <Navigation />
      <InspirationalQuote />
      <Main />
    </div>
  );
}

export default App;
