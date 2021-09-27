// import Header from './component/Header';
import NavbarRight from './component/NavbarRight';
import NavbarLeft from './component/NavbarLeft';
//import Banner from './component/Banner';
import MainContainer from './component/MainContainer';
import './App.css';
import BegineerCourse from './component/courseStructure/BegineerCourse';
import IntermediateCourse from './component/courseStructure/IntermediateCourse';
import ComingSoon from './component/courseStructure/ComingSoon';
import {
    BrowserRouter as Router,
    Switch,
  Route,
  } from "react-router-dom";


 
function App() {
  return (
    <div className="App">
    <div className ="app-wrapper">
      <section className="App-container">

        

        
        {/* <MainContainer /> */}
        <Router>
        <div className="navbarleft-container">
        <NavbarLeft />
        </div>
        <div className="main-container">
            <Switch>
           <Route  exact path = "/" component={MainContainer} />
           <Route  exact path = "/BegineerCourse" component={BegineerCourse} />
           <Route  exact path = "/IntermediateCourse" component={IntermediateCourse} />
           <Route  exact path = "/ComingSoon" component={ComingSoon} />
            </Switch>
            </div>

            <div className='navbarright-container'>
        <NavbarRight />
       
        </div>
        </Router>
        
        

       
       
      </section>
    </div>
    </div>
  );
}

export default App;
