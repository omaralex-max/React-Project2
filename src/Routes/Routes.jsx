import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Favorites = lazy(() => import("../pages/Favorites/Favorites"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MovieDescription = lazy(() => import("../pages/discriptionpage/MovieDescription"));
const HomePageLayout = lazy(() => import("../Components/Layout/Layout"));

export default function AppRoute() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePageLayout/>}>
            <Route path="/" element={<HomePage />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="movie/:id" element={<MovieDescription />} />
        </Route>
      </Routes>
      
    </Suspense>
  );
}
