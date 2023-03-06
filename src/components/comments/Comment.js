import CommentCSS from "./Comment.module.css";
import React, { useState } from "react";
import Input from "../forms/Input";
import Comments from "../comments/Comments";

function Comment(eachBlog) {
  console.log("blogs lastly", eachBlog);

  // State for input fields
  const [input, setInput] = useState({
    comment: "",
  });

  // Handler for input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // Handler for form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input.comment != null && input.comment.trim() !== "") {
      console.log("onSubmit: ", input.comment);
    } else {
      console.log("Error");
    }
  };

  return (
    // Form for adding comments
    <>
      <form onSubmit={handleOnSubmit} className={CommentCSS.form}>
        <Input
          id="comment"
          type="text"
          name="comment"
          value={input.comment}
          onChange={handleOnChange}
          label="Add a Comment ..."
        />
        <div className={CommentCSS.buttons}>
          <button>Cancel</button>
          <button type="submit">Comment</button>
        </div>
      </form>

      {/* Component for displaying comments */}
      <div className={CommentCSS.form}>
        <Comments eachBlog={eachBlog} />
      </div>
    </>
  );
}

export default Comment;
