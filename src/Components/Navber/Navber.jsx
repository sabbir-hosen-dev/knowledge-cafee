import profileImg from "/images/profile.png";
function Navber() {
  return (
    <nav className="wrap">
      <div className="flex justify-between items-center  border-b ">
        <h4 className="heading">Knowladge Cafe</h4>
        <img className="my-3" src={profileImg} alt="" />
      </div>
    </nav>
  );
}

export default Navber;

