import blogs from "../../Data/Data.json";
import Blog from "./Blog";

import PropTypes from "prop-types";

function Blogs({ handleBookMark, handleRead,bookMark}) {
  return (
    <div className="md:col-span-8 col-span-12">
      <div className="col-span-12 flex justify-between items-center text-gray-500">
        <h4 className="font-bold mt-6 mb-5">Blog: {blogs.length}</h4>
        <a href="#bookMark">
          <h4 className="font-bold cursor-pointer mt-4 flex gap-1 items-center md:hidden">
            <div className="text-xl" /> Bookmarked: {bookMark.length}
          </h4>
        </a>
      </div>
      {blogs.map((blog) => (
        <Blog  handleRead={ handleRead} handleBookMark={ handleBookMark}  key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;

Blogs.propTypes = {
  handleBookMark : PropTypes.func.isRequired,
  handleRead : PropTypes.func.isRequired,
  bookMark: PropTypes.array.isRequired
}