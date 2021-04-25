import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Manage from './component/Manage/Manage';
import Notmatching from './component/Notmaching/Notmatching';
import ProductInfo from './component/ProductInfo/ProductInfo';

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/Shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
          <Review></Review>
         
          </Route>
          <Route path="/manage inventory">
            <Manage></Manage>
          </Route>
          <Route exact path="/"></Route>
          <Route path="/:productKey">
  <ProductInfo></ProductInfo>
</Route>
          <Route path="/*">
            <Notmatching></Notmatching>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
