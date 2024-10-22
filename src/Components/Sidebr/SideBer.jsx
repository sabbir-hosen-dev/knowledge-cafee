import PropTypes from "prop-types"
import Bookmark from "./Bookmark"
// import Bookmark from "./Bookmark"



function SideBer({bookMark,read}) {
  const {time,readBlog} = read
  return (
    <div id="bookMark" className="md:col-span-4 col-span-12 mt-5 ">
      <div className="bg-[#6047ec1a] border-2 border-[#6047EC] rounded-md text-center">
        <p className="font-bold text-[#6047EC] py-3 ">Span time on read : {time} min</p>
      </div>
      <div className="bg-[#1111110d] rounded-md p-5 mt-4">
        <h4 className="font-bold ">Bookmarked Blogs : {bookMark.length}</h4>

        {
          
          readBlog &&  readBlog.map((item,index )=> <Bookmark key={index} data={item} />)
        }
        
      </div>
    </div>
  )
}

export default SideBer


SideBer.propTypes = {
  bookMark :  PropTypes.array.isRequired,
  read: PropTypes.object.isRequired
}