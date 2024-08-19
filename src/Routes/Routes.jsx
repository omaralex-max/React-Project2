import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Favorites = lazy(() => import("../pages/Favorites/Favorites"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

export default function AppRoute() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="favorites" element={<Favorites />} />
            </Routes>
        </Suspense>
    );
}
