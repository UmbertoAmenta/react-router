import { useState, useEffect } from "react";
import axios from "axios";

// components
import PostCard from "../components/PostCard/PostCard";
import FormPostList from "../components/FormPostList";

const initialData = {
  titolo: "",
  contenuto: "",
  immagine: "",
  dellaTradizione: false,
  difficoltà: "",
  tempistiche: "",
};

export default function RecipeBook() {
  const [formData, setFormData] = useState(initialData);
  const [list, setList] = useState([]);

  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then(function (response) {
      setList(response.data);
    });
  };

  const handlerSubmitFormData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/posts", formData)
      .then(function (response) {
        const currentList = [...list, response.data];
        setList((currentList) => [...currentList, response.data]);
        setFormData(initialData);
      });
  };

  const handlerDeletePost = (postId) => {
    axios.delete(`http://localhost:3000/posts/${postId}`).then(() => {
      setList((currentList) =>
        currentList.filter((post) => post.id !== postId)
      );
    });
  };

  // ha effetto solo sul client
  const deleteList = () => setList([]);

  useEffect(fetchPosts, []);

  const handlerFormData = (field, value) => {
    setFormData((currentFormData) => {
      return { ...currentFormData, [field]: value };
    });
  };

  return (
    <>
      <div className="container">
        <h2>Il Ricettario</h2>
        <div className="flex">
          <ul>
            {list.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  titolo={post.titolo}
                  contenuto={post.contenuto}
                  immagine={post.immagine}
                  dellaTradizione={post.dellaTradizione}
                  difficoltà={post.difficoltà}
                  tempistiche={post.tempistiche}
                  handlerDeletePost={() => handlerDeletePost(post.id)}
                />
              );
            })}
          </ul>
          <FormPostList
            formData={formData}
            handlerSubmitFormData={handlerSubmitFormData}
            handlerFormData={handlerFormData}
            deleteList={deleteList}
          />
        </div>
      </div>
    </>
  );
}
