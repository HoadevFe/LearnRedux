import { useSelector } from "react-redux";
import "./header.css";
const Header = (props) => {
  const { setEdit } = props;
  //lấy giá trị
  const User = useSelector((state) => state.user);
  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: `${User.theme}`,
          backgroundImage: `linear-gradient(180deg,${User.theme} 2%,${User.theme},65%,#181818 100%)`
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img className="info-ava" src={User.src} alt="" />
          <div className="info-username">{User.name}</div>
          <div className="info-age">{User.age}</div>
          <div className="info-about">{User.about}</div>
        </div>
      </header>
    </>
  );
};
export default Header;
