import "./styles.css";
import Header from "./Components/Header/Header";
import EditPage from "./Components/Edit/EditPage";
import { useState } from "react";
export default function App() {
  const [isEdit, setEdit] = useState(false);
  return (
    <div className="App">
      {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
    </div>
  );
}
