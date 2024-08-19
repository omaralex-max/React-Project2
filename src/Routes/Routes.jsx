import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Favorites from "../pages/Favorites/Favorites";
import HomePage from "../pages/HomePage/HomePage";
export default function AppRoute(){
    return (

        <>
        <Suspense fallback={<h1>Favorites Page is still loading</h1>}>
        <BrowserRouter>
            <Routes>
                    <Route>
                        <Route path="/" element={<HomePage/>}></Route>
                        <Route path="favorites" element={<Favorites/>}></Route>
                        
                    </Route>
            </Routes>
    </BrowserRouter>
    

    </Suspense>
        </>
    )
}