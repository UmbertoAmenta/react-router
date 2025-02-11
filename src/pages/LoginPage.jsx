import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="login">
      <Link to="/">
        <em>Le ricette di Nonna</em>
      </Link>
      <h1>Effettua il Login</h1>
      <form id="loginForm">
        <div>
          <label htmlFor="email">Inserisci email</label>
          <input type="email" id="email" placeholder="..." />
        </div>
        <div>
          <label htmlFor="password">Inserisci password</label>
          <input type="password" id="password" placeholder="###" />
        </div>

        <button type="submit">
          <Link to="/admin">Accedi</Link>
        </button>
      </form>
    </main>
  );
}
