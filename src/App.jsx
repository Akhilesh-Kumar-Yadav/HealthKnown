
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About'
import Dashboard from './components/Dashboard';
import TargetForm from './TargetFrom';
import WeeklyPlan from './WeeklyPlan';
// import ProfilePage from './ProfilePage';


function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/weekly-plan' element={<WeeklyPlan/>}/>
      <Route path='/target-setup' element={<TargetForm/>}/>
      {/* <Route path='/profile' element={<ProfilePage/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App