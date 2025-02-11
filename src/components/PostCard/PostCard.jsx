import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PostCard(post) {
  const onlyAdmin = useLocation();

  return (
    <li className="card" key={post.id}>
      <span>
        <Link to={`/recipe-book/${post.id}`}>
          <strong>{post.titolo}</strong>
        </Link>
      </span>
      {post.dellaTradizione ? (
        <div>
          <em>Ricetta tradizionale</em>
        </div>
      ) : (
        <div>Ricetta rivisitata</div>
      )}
      {onlyAdmin.pathname === "/admin" && (
        <button type="button" onClick={post.handlerDeletePost}>
          🗑️
        </button>
      )}
      <br />
      <div className="imgSlot">
        <Link to={`/recipe-book/${post.id}`}>
          <img
            // src={`http://localhost:3000/${post.immagine}` || post.immagine}
            src={"http://localhost:3000/" + post.immagine}
            alt={post.titolo}
          />
        </Link>
      </div>
      <div className="description">{post.contenuto}</div>
      <div>
        <span>{post.difficoltà}</span>
        <span>{post.tempistiche}</span>
      </div>
    </li>
  );
}
