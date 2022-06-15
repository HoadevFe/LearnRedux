import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../Redux/useSlice";
import Input from "../inputFiles/Input";
import "./edit.css";

const EditPage = (props) => {
  const { setEdit } = props;
  // lấy các state từ slice.js
  const User = useSelector((state) => state.user);
  // truyền hành động qua trang khác
  const dispatch = useDispatch();

  const avtSrc = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3OhYSG6C5Xy3K4quzaevP1hwQXucyM2JbQ&usqp=CAU",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/280757017_2038704299645190_7931972686930481782_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PT2m-Ae2TYUAX_S_-eD&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-8TT8ayoaAgqIB8pMGka58kcpaVp8V4CKOKnI4AtYUtA&oe=62AEDF2E",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdx03GRIcXMZGHQK6Gm1liQ6NmURAbwXpohw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYLiv3sS6glzYUmYR7-2HmRbc632ZC74cSg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrRbwU5cE-wYTjO5lpWSys_KQe_EYsOYoVA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWRl_uPDFY66DPkMTwMPL9okf1ja6eQ-2vg&usqp=CAU"
  ];
  const [name, setName] = useState(User.name);
  const [age, setAge] = useState(User.age);
  const [about, setAbout] = useState(User.about);
  const [src, setSrc] = useState(User.src);
  const [theme, setTheme] = useState(User.theme);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updataUser = {
      name: name,
      age: age,
      about: about,
      src: src,
      theme: theme
    };
    dispatch(update(updataUser));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">SAVE</button>

          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input lable={"Display name"} data={User.name} setData={setName} />

            <Input lable={"Age"} data={User.age} setData={setAge} />

            <Input
              lable={"About"}
              data={User.about}
              setData={setAbout}
              inputType="textarea"
              classStyle="input-about"
            />

            <label>Choose Avatar</label>
            <div className="input-image-container">
              {avtSrc.map((avt, index) => {
                return (
                  <>
                    <img
                      key={index}
                      onClick={(e) => setSrc(e.target.src)}
                      src={avt}
                      className="input-image"
                      alt=""
                    />
                  </>
                );
              })}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
export default EditPage;
