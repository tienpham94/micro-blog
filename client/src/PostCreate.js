import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [title, setTitle] = useState("");

  const onSubmit = async e => {
    console.log("sbmit");
    e.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title
    });

    setTitle("");
  };

  return (
    <div>
      <form className="form-group" onSubmit={onSubmit}>
        <label>Title</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="form-control"
        />
      </form>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </div>
  );
};
