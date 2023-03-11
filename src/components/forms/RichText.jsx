import React, { useRef } from "react";
import JoditEditor from "jodit-react";

import RichTextCSS from "./RichText.module.css";

function RichText({ setValue, value }) {
  const editor = useRef(null);
  return (
    // The RichText component creates a JoditEditor, which is a WYSIWYG editor for HTML content
    // The component receives two props: setValue and value, which are used to update and store the content respectively
    <div className={RichTextCSS.editor}>
      <JoditEditor
        ref={editor}
        onChange={(content) => setValue(content)} // Updates the content whenever the editor's content changes
        value={value} // Sets the initial value of the editor
      />
    </div>
  );
}

export default RichText;
