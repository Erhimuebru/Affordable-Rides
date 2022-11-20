import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/pages/navbar';
import Section from './component/pages/section';
import Signup from './component/pages/signup';
import NotFound from './component/pages/notFound';





function App() {
  return (
    
    <>
    <div className="App">

     <Header />

       <Routes>
            <Route path='/' element={<Section />}/> 
            <Route path='signup' element={<Signup />}/> 

            <Route path='*' element={<NotFound />}/> 
        </Routes>  
        </div>
    </>  
      
    
  );
}

export default App;
