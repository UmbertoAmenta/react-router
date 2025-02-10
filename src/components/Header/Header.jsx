import HeadNavBar from "../HeadNavBar";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div>
          <h1>
            <em>Le ricette di Nonna</em>
          </h1>
        </div>
        <HeadNavBar />
      </div>
    </header>
  );
}
