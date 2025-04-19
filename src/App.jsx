
import Feature from './Component/FeatureComponent/Feature'


import { Routes,Route } from "react-router-dom";
import Home from './Component/HomeComponen/Home'
import Term_condition from './Component/Term_conditionComponent/Term_condition';
import Privacy from './Component/PrivacyComponent/Privacy'



function App() {
  

  return (
    <>
      

 
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/feature" element={<Feature/>}> </Route>
        <Route path='/Term_condition' element={<Term_condition/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
      </Routes>


    </>
  );
}

export default App;
