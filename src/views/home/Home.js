import React, { Component } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Header theme={this.props.theme} setTheme={this.props.setTheme} />
                {/* <Greeting theme={this.props.theme} />
          <Skills theme={this.props.theme} />
          <Footer theme={this.props.theme} />
          <TopButton theme={this.props.theme} /> */}
            </div>
        );
    }
}

export default Home;
