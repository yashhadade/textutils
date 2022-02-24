import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import About from './components/About';
function App() {
  const[darkMode,setDarkMode] = useState('light');//whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
     msg: message,
     type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },1500

    );
  }
   const toggleMode=()=>{
    if(darkMode ==='light'){

      setDarkMode('dark');
      document.body.style.backgroundColor='balck';
      showAlert("dark mode on ",'sucess');
      document.title='TextUtils - Dark Mode';
    }
    else{

      setDarkMode('light');
      document.body.style.backgroundColor='white';
      showAlert("dark mode on ",'sucess');
      document.title='TextUtils - light mode';
    }
  }
  return (
   <>
  <Router>
   <Navbar title="Textutils" moded={darkMode} toggleMode={toggleMode}aboutText="About Textutils"/>
   <Alert alert={alert}/>
    <div className="container my-3">
    
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          {<Textform showAlert={showAlert} heading="Enter the text to analyze below"mode={darkMode}/>}
          </Route>
        </Switch>
       {/*<About/>*/}
   
    </div>
 </Router>
   </>
  );
}
export default App;
