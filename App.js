
import {useFonts} from "expo-font"
import BottonTabNavigator from "./src/navigation/BottonTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { init } from "./src/DB";

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Data base fail connect");
    console.log(err.message);
  });


export default function App() {
const [fontsLoaded]=useFonts({
  "PermanentMarker":require("./src/assets/fonts/PermanentMarker-Regular.ttf")
})

if(!fontsLoaded){
  return null
}
  return(
  <Provider store={store}>
    <BottonTabNavigator/>
  </Provider>
  )
}

