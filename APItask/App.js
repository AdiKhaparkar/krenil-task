import React from "react";
import store from "../APItask/src/Redux/store/store"
import { Provider } from "react-redux";
import HomeScreen from "./src/Screens/HomeScreen";


export default App =()=>{
    return(
        <Provider store = {store}>
            <HomeScreen/>
        </Provider>
    )
}