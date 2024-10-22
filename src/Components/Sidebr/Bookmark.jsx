import PropTypes from "prop-types";

function Bookmark({data}) {
  return (
    <div className="bg-white rounded-md p-3 mt-3">
      <small className="font-bold">
        {data.title}
      </small>
    </div>
  );
}

export default Bookmark;


Bookmark.propTypes = {
  data : PropTypes.object.isRequired,
}

