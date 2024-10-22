import Bookmark from "./Bookmark"


function SideBer() {
  return (
    <div className="col-span-4 mt-5 ">
      <div className="bg-[#6047ec1a] border-2 border-[#6047EC] rounded-md text-center">
        <p className="font-bold text-[#6047EC] py-3 ">Span time on read : 188 min</p>
      </div>
      <div className="bg-[#1111110d] rounded-md p-5 mt-4">
        <h4 className="font-bold ">Bookmarked Blogs : 8</h4>

        <Bookmark />
      </div>
    </div>
  )
}

export default SideBer
