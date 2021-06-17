import React from 'react';
import './App.css';
import Nav from './Nav.jsx';
import Maincon from './Mainconn.jsx'
import Footer from './Footer.jsx'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <div className="bg-silver">
        <Nav />
        <Maincon />
        <Footer />
      </div>
    </>
  );
}
export default App;
