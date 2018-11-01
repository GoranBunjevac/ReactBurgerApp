import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Burgerbuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={Burgerbuilder} />
        </Layout>
      </div>
    );
  }
}

export default App;
