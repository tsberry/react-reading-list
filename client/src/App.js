import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
    <div>
        <Nav />
        <Router>
            <Switch>
                <Route exact path="/" component={Books} />
                <Route exact path="/books" component={Books} />
                <Route path="/books/:id" component={Detail} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    </div>
);

export default App;
