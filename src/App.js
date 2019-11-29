import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div >
      {/* arrange them in column */}
     <Header/>
     <div> 
       {/* arrange them in row */}
     <SideBar/>
     <Main/>
     </div>
    </div>
  );
}

export default App;
