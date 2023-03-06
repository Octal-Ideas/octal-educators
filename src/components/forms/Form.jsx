import React, { useState, useRef, useEffect } from "react";
import FormCSS from "./Form.module.css";
import RichText from "./RichText";
import Input from "./Input";
import Back from "../common/back/Back";
import DropDown from "./Select";
import MultiSelect from "./MultiSelect";
const categoryOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

const data = ["English", "Banana", "Orange"];
const transformedData = data.map((item) => ({
  value: item,
  label: item,
}));

function Form({ onAddBlog }) {
  //set value from rich text
  const [value, setValue] = useState("");

  //tags
  const [tags, setTags] = useState([]);

  //category
  const [selectedOption, setSelectedOption] = useState(null);

  //language
  const [languageOptions, setLanguageOptions] = useState([]);
  useEffect(() => {
    setLanguageOptions(transformedData);
  }, []);

  const [language, setLanguage] = useState(languageOptions[0]);

  console.log("forms selected option:", selectedOption);
  //initial value for inputs
  const [input, setInput] = useState({
    author: "",
    title: "",
    date: "",
    cover: "",
    caption: "",
    photographer: "",
    language: "",
    category: "",
  });
  //get image
  const [file, setFile] = useState(null);

  //resetting the file input using useRef hook (controlled input)
  const imageInputRef = useRef();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  // const handleTagChange =(selectedTags) =>{
  //   setTags({...tags, selectedTags})
  // }
  function handleImageChange(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value != null && value.trim() !== "") {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("category", selectedOption.value); //edit
      formData.append("title", input.title);
      formData.append("content", value);
      formData.append("language", language.value);
      formData.append("photographer", input.photographer);
      formData.append("caption", input.caption);
      formData.append("author_id", 1);
      formData.append("user_id", 1);
      formData.append(
        "tag",
        tags.map((tag) => tag.value)
      );

      console.log("formdata", ...formData);
      // fetch("http://localhost:9292/blogs", {
      // method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      //   body: formData,
      // })
      // .then((res) => res.json())
      // .then((json) => onAddBlog(json));
      const clearInputs = {
        author: "",
        title: "",
        date: "",
        cover: "",
        caption: "",
        photographer: "",
        language: "",
      };
      // const clearFile = null;
      setValue(""); //resets the value of the rich text editor
      setTags([]); //resets the tags
      setInput(clearInputs); //resets author,title,tag,caption,photographer,and language

      //file resetting
      imageInputRef.current.value = ""; //resets the name of the file
      setFile(null); //resets the value of the file input
      console.log("value", value);
      console.log("image", file.value);
      console.log("file", file);
    } else {
      console.log("Error");
    }
  };
  // console.log(value);
  return (
    <>
      <Back title="" bgImage="" />
      <form onSubmit={handleOnSubmit} className={FormCSS.form}>
        <div className={FormCSS.buttons}>
          <DropDown
            options={languageOptions}
            selectedOption={language}
            setSelectedOption={setLanguage}
          />
          <div>
            <button>Preview</button>
            <button type="submit">Publish</button>
          </div>
        </div>
        <div className={FormCSS.formContainer}>
          <Input
            id="author"
            type="text"
            name="author"
            value={input.author}
            onChange={handleOnChange}
            label="author"
          />
          <DropDown
            options={categoryOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <Input
            id="title"
            type="text"
            name="title"
            value={input.title}
            onChange={handleOnChange}
            label="title"
          />
          <RichText setValue={setValue} value={value} />
          <MultiSelect tags={tags} setTags={setTags} />
          <div className={FormCSS.imageUpload}>
            <div>
              <label>Upload image</label>
              <Input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                value={input.file}
                onChange={handleImageChange}
                innerRef={imageInputRef} //apply the ref to the input,now its controlled
              />
            </div>
            <div>
              <label>Caption</label>
              <Input
                id="caption"
                type="text"
                name="caption"
                value={input.caption}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label>Photographer</label>
              <Input
                id="photographer"
                type="text"
                name="photographer"
                value={input.photographer}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Form;
