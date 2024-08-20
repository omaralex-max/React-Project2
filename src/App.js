import Routes from "./Routes/Routes"
import React from "react"
import Store from "./Store/Store";
import { Provider } from "react-redux";
export default function App() {
  return(
    <>
    <Provider store={Store}>
    <Routes/>
    </Provider>
    </>
  )
}
