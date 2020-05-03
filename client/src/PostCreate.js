import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <form className="form-group">
        <label>Title</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="form-control"
        />
      </form>
      <button className="btn btn-primary">Submit</button>
    </div>
  );
};
