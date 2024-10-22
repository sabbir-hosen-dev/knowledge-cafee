import blogs from '../../Data/Data.json'
import Blog from './Blog'

function Blogs() {
  return (
    <div className='col-span-8'>
      {
        blogs.map(blog => <Blog key={blog.id} blog={blog} />)
      }

      
    </div>
  )
}

export default Blogs
