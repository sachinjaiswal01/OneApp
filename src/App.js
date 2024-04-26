// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React,{ useState } from "react"; 

import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');  //wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  const toggleMode=(cls)=>{
    // removeBodyClasses();
    // console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#333333';
      showAlert("Dark mode has been enabled!","success")
      document.title='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing'
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now'
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode has been disabled!","success")
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
           </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils-Word counter,Character counter,Remove extra Spaces" mode={mode}/>
          </Route>
</Switch>
</div>
 </Router> 
    </>
  );
}
export default App;
