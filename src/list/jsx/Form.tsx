import { useState } from "react";

const Form = () => {
  const [val, setval] = useState("");
    return (
      <div className="form">
        <span>{val}</span>
        <input type="text"  value={val} onChange={(e) => { setval(e.target.value) }} />
      </div>
    );
  };
  
  export default Form;