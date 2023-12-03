// import './App.css';
// import Layout from './components/Layout/Layout';


// function App() {
//   return (
//     <>
//     <Layout>
//       <h1>sneha</h1>
//     </Layout>
    
//     </>
//   );
// }

// export default App;
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App(){
  return(
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Policy' element={<Policy/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}
export default App