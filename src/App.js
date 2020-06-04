import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Main/Categories/Categories";
import Animal from "./Components/Main/Categories/Animal/Animal";
import Career from "./Components/Main/Categories/Career/Career";
import Celebrity from "./Components/Main/Categories/Celebrity/Celebrity";
import Dev from "./Components/Main/Categories/Dev/Dev";
import Explicit from "./Components/Main/Categories/Explicit/Explicit";
import Fashion from "./Components/Main/Categories/Fashion/Fashion";
import Food from "./Components/Main/Categories/Food/Food";
import History from "./Components/Main/Categories/History/History";
import Money from "./Components/Main/Categories/Money/Money";
import Movie from "./Components/Main/Categories/Movie/Movie";
import Music from "./Components/Main/Categories/Music/Music";
import Political from "./Components/Main/Categories/Political/Political";
import Religion from "./Components/Main/Categories/Religion/Religion";
import Science from "./Components/Main/Categories/Science/Science";
import Sport from "./Components/Main/Categories/Sport/Sport";
import Travel from "./Components/Main/Categories/Travel/Travel";
import Random from "./Components/Main/Random/Random";

function App() {
  return (
      <Router>
        <div className="App">
            <Header />
            <Switch>
              <Route exact path={"/"} />
              <Route exact path={"/main"} component={ Main } />
              <Route exact path={"/main/categories"} component={ Categories } />
                <Route exact path={"/main/categories/animal"} component={ Animal } />
                <Route exact path={"/main/categories/career"} component={ Career } />
                <Route exact path={"/main/categories/celebrity"} component={ Celebrity } />
                <Route exact path={"/main/categories/dev"} component={ Dev } />
                <Route exact path={"/main/categories/explicit"} component={ Explicit } />
                <Route exact path={"/main/categories/fashion"} component={ Fashion } />
                <Route exact path={"/main/categories/food"} component={ Food } />
                <Route exact path={"/main/categories/history"} component={ History } />
                <Route exact path={"/main/categories/money"} component={ Money } />
                <Route exact path={"/main/categories/movie"} component={ Movie } />
                <Route exact path={"/main/categories/music"} component={ Music } />
                <Route exact path={"/main/categories/political"} component={ Political } />
                <Route exact path={"/main/categories/religion"} component={ Religion } />
                <Route exact path={"/main/categories/science"} component={ Science } />
                <Route exact path={"/main/categories/sport"} component={ Sport } />
                <Route exact path={"/main/categories/travel"} component={ Travel } />
              <Route exact path={"/main/random"} component={ Random } />
              <Route component={ NotFound } />
            </Switch>
            <Footer />
        </div>
      </Router>
  );
}

export default App;
