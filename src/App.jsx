
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navber from './Components/Navber/Navber'
import SideBer from './Components/Sidebr/SideBer'

function App() {


  return (
    <>
      <header className=''>
        <Navber />
      </header>
      <main className='grid grid-cols-12 gap-3 wrap'>
        <Blogs />
        <SideBer />
      </main>
    </>
  )
}

export default App
