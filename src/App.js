import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
      <Header/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
