
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode]=useState('light')

  let toogleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#002345";
      showAlert("dark mode enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("light mode enabled","success");
    }
  }

  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} About="About us"/>
      <Alert alert={alert}/>
      <div className="container my-3">
          {/* <Switch>
              <Route path="/about">
                <Aboutus />
              </Route> */}
              {/* <Route path="/"> */}
                <TextForm heading="Welcome to textarea" alert={showAlert} mode={mode}/>
              {/* </Route> */}
          {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
