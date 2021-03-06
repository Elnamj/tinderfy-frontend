import React, {Component} from "react";
import Slideshow from "../Slideshow/Slideshow";
import Welcome from "../Welcome/Welcome";
import "./FirstPage.css";
import LogoHeader from "../LogoHeader/LogoHeader";
import model from "../data/Model";
import {Offline,Online} from "react-detect-offline";

class FirstPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let logo = <LogoHeader model={model}/>;

        return (
            <div className="FirstPage container-fluid py-xs-2">
              <Offline>
                <div className="bg-danger text-white text-center py-2 py-md-3">
                  Oops! No internet connection! 🤷‍️
                </div>
              </Offline>
                <div className="row mx-1 py-5">
                    <div className="col-xs-12 col-md-6 pt-md-5 px-3">
                        <div className="row mt-5 px-1">
                            <h1 className="display-1 d-none d-md-inline text-white">Tinderfy</h1>
                            <img className="tinderfy-logo-md d-none d-md-inline mx-3" src={require("../images/logo.png")} alt="tinderfy logo"/>
                            <h1 className="display-4 d-md-none text-white">Tinderfy</h1>
                            <img className="tinderfy-logo-xs d-md-none mx-2" src={require("../images/logo.png")} alt="tinderfy logo"/>
                        </div>
                        <div className="row py-3 py-md-4 px-1 text-white">
                            <p>Welcome to Tinderfy, the website of your dreams that lets you create custom Spotify
                                playlists with only music that you love! Sounds fun right? Check out the guide or get started right away by clicking one of the buttons below!
                            </p>
                        </div>
                        <div className="row mt-5 px-3 text-center">
                            <Welcome model={this.props.model}/>
                        </div>
                    </div>
                    <div className="col-6 col-xs-12 py-md-5 d-none d-lg-block" id="slideshow">
                        <Slideshow model={this.props.model}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstPage;
