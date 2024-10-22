import { BiBookmark } from "react-icons/bi"; 
import PropTypes from "prop-types"


function Blog({blog, handleBookMark, handleRead}) {
  const {author_image,author_name,blog_image,hashtags,post_date,title,read_time} = blog
  return (
    <div className="mt-5">
      <div className="blog-image">
        <img className=" rounded-lg" src={blog_image} alt="" />
      </div>
      <div className="flex justify-between items-center">

        <div className="flex gap-3 my-4 items-center">
          <div className="author max-w-14">
            <img src={author_image} alt="" />
          </div>
          <div className="">
            <h5 className="font-bold text-xl">{author_name}</h5>
            <small className="text-gray-400">{post_date}</small>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-gray-400">{read_time} min read</p>
          <BiBookmark  onClick={() =>  handleBookMark(blog)} className="text-gray-400 text-xl cursor-pointer duration-300 transition-all hover:text-green-400" />
        </div>
      </div>

      <h2 className="heading mb-2">{title}</h2>

      <div className="flex gap-4">
        <small className="text-gray-400">{hashtags[0]}</small>
        <small className="text-gray-400">{hashtags[1]}</small>
      </div>

      <div href="" onClick={() =>  handleRead(blog)} className="inline-block my-2 cursor-pointer duration-300 hover:text-blue-300 transition-all mb-5  font-bold text-[#6047EC] underline  ">Mark as read</div>

      <hr />
    </div>
  )
}

export default Blog

Blog.propTypes = {
  blog : PropTypes.object.isRequired,
  handleBookMark: PropTypes.func.isRequired,
  handleRead: PropTypes.func.isRequired,
}