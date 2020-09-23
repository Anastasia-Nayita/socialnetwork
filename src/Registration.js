import React from "react";
import { Link } from "react-router-dom";
//import { HashRouter, Link } from "react-router-dom";
import axios from "./axios.js";
import NextPage from "./NextPage";

export default class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
        };
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState(
            {
                [name]: value,
            },
            () => console.log("this.state: ", this.state)
        );
    }

    handleClick(e) {
        e.preventDefault();
        var that = this;
        axios
            .post("/register", that.state)
            .then(function (response) {
                console.log("response: ", response);
                if (response) {
                    location.replace("/nextpage");
                } else {
                    this.setState(
                        {
                            error: true,
                        },
                        () => console.log("this.state: ", this.state)
                    );
                }
            })
            .catch(function (error) {
                console.log("error: ", error);
            });
    }

    // this code will redirect the user to the / route...
    // location.replace('/') ///// WHAT HOW WHEN

    render() {
        return (
            <div>
                <h3>Register here:</h3>
                {this.state.error && (
                    <p className="error">something went wrong!</p>
                )}
                <label htmlFor="first">enter your first name:</label>
                <input
                    onChange={(e) => this.handleChange(e)}
                    name="first"
                    placeholder="first name"
                />
                <label htmlFor="last">enter your last name:</label>
                <input
                    onChange={(e) => this.handleChange(e)}
                    name="last"
                    placeholder="last name"
                />
                <label htmlFor="email">enter your email:</label>
                <input
                    onChange={(e) => this.handleChange(e)}
                    name="email"
                    placeholder="email"
                />
                <label htmlFor="password">enter your password:</label>
                <input
                    onChange={(e) => this.handleChange(e)}
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <button onClick={(e) => this.handleClick(e)}>REGISTER</button>

                <h3>
                    <Link to="/login">Click here to Log in!</Link>
                </h3>
            </div>
        );
    }

    ///   redirect('./NextPage') ////// what a f
}