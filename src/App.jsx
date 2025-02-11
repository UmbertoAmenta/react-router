import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import RecipeBook from "./pages/RecipeBook";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import SinglePostPage from "./pages/SinglePostPage";
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path="/recipe-book" Component={RecipeBook}></Route>
          <Route path="/recipe-book/:id" Component={SinglePostPage}></Route>
          <Route path="/about-us" Component={AboutUs}></Route>
        </Route>
        <Route path="/admin">
          <Route index Component={Admin}></Route>
          <Route path="/admin/login" Component={LoginPage}></Route>
        </Route>
        <Route path="*" Component={PageNotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}
