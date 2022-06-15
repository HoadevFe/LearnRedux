import "../Edit/edit.css";
const Input = (props) => {
  const { classStyle, inputType, lable, data, setData } = props;
  return (
    <>
      <lable>{lable}</lable>
      {inputType === "textarea" ? (
        <textarea
          className={classStyle}
          onChange={(e) => setData(e.target.value)}
          placeholder={data}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};
export default Input;
