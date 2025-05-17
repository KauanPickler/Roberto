import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav  from "./Paginas/nav";
import Servicos from './Paginas/servicos';
import Mostruario from './Paginas/mostruario';
import Footer from './Paginas/footer'
function App() {
  const [count, setCount] = useState(0)
  const [sections, setSections] = useState(null)
  useEffect(() => {
    setSections(document.getElementById('Div-Info'))
    const sections = document.querySelectorAll('.Div-Info');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);
  return (
    <div className='Container-All'>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>


      <Nav/>
      <Mostruario />
      <Servicos />
      <Footer />
      
    </div>
  )
}

export default App
