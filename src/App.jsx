
import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navber from './Components/Navber/Navber'
import SideBer from './Components/Sidebr/SideBer'

function App() {
  const [bookMark,setBook] = useState([]);
  const [read,setRead] = useState({
    time:0,
    readBlog:[]
  });
 
  const handleBookMark = (blog) => {
    setBook([...bookMark,blog]);
  }

  const handleRead = (book) => {
    const sumTime = read.time + parseInt(book.read_time)
    
    setRead({
      ...read,
      time: sumTime,
      readBlog: [...read.readBlog,book]
    })
  }


  return (
    <>
      <header className=''>
        <Navber />
      </header>
      <main className='grid grid-cols-12 gap-3 wrap'>
        <Blogs bookMark={bookMark}  handleRead={handleRead} handleBookMark={handleBookMark} />
        <SideBer read={read} bookMark={bookMark} />
      </main>
    </>
  )
}

export default App
