// Importing the CSS module for styling
import CommentsCSS from "./Comments.module.css";
import React from "react";
// Importing the CommentsCard component but it's currently unused
// import CommentsCard from "./CommentsCard";

// Declaring the Comments component and destructuring the eachBlog prop passed from the parent component
function Comments({ eachBlog }) {
  // Logging the comments object from the eachBlog prop
  console.log("Comments", eachBlog.comments);

  // Mapping through each comment object in the comments array to generate the comment sections
  const allComment = eachBlog.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <section>
          {/* The comment title section with the commenter's name and the timestamp */}
          <div className={CommentsCSS.title}>
            <h3>Cleo Malala</h3>
            <span>2 minutes ago</span>
          </div>

          {/* The comment body section with the comment text */}
          <div className={CommentsCSS.article}>
            <p>{comment.comment}</p>
          </div>
        </section>
      </div>
    );
  });

  // Logging the generated comment sections
  console.log("Comment", allComment);

  // Returning the JSX for the Comments component with the generated comment sections
  return (
    <>
      {allComment}
 
    </>
  );
}

// Exporting the Comments component as the default export
export default Comments;
