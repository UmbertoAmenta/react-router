import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function SinglePostPage() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const prevPage = Number(id) - 1;
  const nextPage = Number(id) + 1;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  }, [id, navigate]);

  return (
    <main className="container singleCard">
      <div>
        <h1>{post.titolo}</h1>
        <div className="nav">
          {prevPage > 0 && (
            <Link to={`http://localhost:5173/recipe-book/${prevPage}`}>
              &larr;
            </Link>
          )}
          {nextPage < 6 && (
            <Link to={`http://localhost:5173/recipe-book/${nextPage}`}>
              &rarr;
            </Link>
          )}
        </div>
        <div>
          <span>{post.difficoltà}</span>
          {post.dellaTradizione ? (
            <h4>
              <em>Ricetta tradizionale</em>
            </h4>
          ) : (
            <h4>Ricetta rivisitata</h4>
          )}
          <span>{post.tempistiche}</span>
        </div>
      </div>
      <img src={post.immagine} alt={post.titolo} />
      <p>{post.contenuto}</p>
    </main>
  );
}
