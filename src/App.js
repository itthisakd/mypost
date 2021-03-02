import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPost from "./pages/AddPost";
import SinglePostPage from "./pages/SinglePostPage"
import CounterPage from "./pages/CounterPage";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/counter" component={CounterPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/post/:postID" component={SinglePostPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
