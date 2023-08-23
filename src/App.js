import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import "./App.css";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { MakePost } from "./components/MakePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Provider store={store}>
                <Home />
              </Provider>
            }
          />
          <Route
            path="/posts"
            element={
              <Provider store={store}>
                <MakePost />
              </Provider>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
