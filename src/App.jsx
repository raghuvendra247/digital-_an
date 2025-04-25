
import Feature from './Component/FeatureComponent/Feature'


import { Routes,Route } from "react-router-dom";
import Home from './Component/HomeComponen/Home'
import Term_condition from './Component/Term_conditionComponent/Term_condition';
import Privacy from './Component/PrivacyComponent/Privacy'
import Education from './Component/EducationComponent/Education';
import Pricing from './Component/Pricing'



function App() {
  

  return (
    <>
      

 
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/feature" element={<Feature/>}> </Route>
        <Route path='/Term_condition' element={<Term_condition/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
      </Routes>


    </>
  );
}

export default App;
