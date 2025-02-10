import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import RecipeBook from "./pages/RecipeBook";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path="/about-us" Component={AboutUs}></Route>
          <Route path="/recipe-book" Component={RecipeBook}></Route>
        </Route>
        <Route path="*" Component={PageNotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}
