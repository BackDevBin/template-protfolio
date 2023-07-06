import { Outlet } from 'react-router-dom'
import './App.css'
import Banner from './component/Banner/Banner'
import Contact from './component/Contact/Contact'
import MySkill from './component/MySkill/MySkill'
import Navbar from './component/Navbar/Navbar'
import Protfolio from './component/Protfolio/Protfolio'
import Service from './component/Service/Service'

function App() { // #7D3C98  #0f172a

  return (
    <div className='md:px-16 bg-gradient-to-r from-[#0f172a] via-blue-950 to-[#0f172a]'>
      
      <Navbar></Navbar>

      <Outlet></Outlet>
      
      <Contact></Contact>
     
    </div>
  )
}

export default App
