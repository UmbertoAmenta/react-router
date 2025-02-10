export default function PostCard(post) {
  return (
    <li className="card" key={post.id}>
      <span>
        <strong>{post.titolo}</strong>
      </span>
      {post.dellaTradizione ? (
        <div>
          <em>Ricetta tradizionale</em>
        </div>
      ) : (
        <div>Ricetta rivisitata</div>
      )}
      <button type="button" onClick={post.handlerDeletePost}>
        🗑️
      </button>
      <br />
      <div className="imgSlot">
        <img
          // src={
          //   `http://localhost:3000/${post.immagine}` || post.immagine
          // }
          src={"http://localhost:3000/" + post.immagine}
          alt={post.titolo}
        />
      </div>
      <div className="description">{post.contenuto}</div>
      <div>
        <span>{post.difficoltà}</span>
        <span>{post.tempistiche}</span>
      </div>
    </li>
  );
}
