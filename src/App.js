import React from 'react';
import './components/Navbar/Navbar.css'
import './components/Banner/Banner.css'
import './components/RowPost/RowPost.css'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,comedy,horror,romance,documentary} from './Urls';
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Comedy' isSmall/>
      <RowPost url={documentary} title='Documentary' isSmall/>
    </div>
  );
}

export default App;
