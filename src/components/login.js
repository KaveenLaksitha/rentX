import React from 'react'
import "./style.scss";

function login() {
    return (
        <div className="page-component-body">
            <div class="container-fluid page-body">
                <div class="row no-gutter">
                    <div class="col-md-6 d-none d-md-flex bg-image"></div>
                    <div class="col-md-6 bg-light">
                        <div class="login d-flex align-items-center py-5">

                            <div class="container login-container">
                                <div class="row">
                                    <div class="col text-center">
                                        <h1>Welcome back!</h1>
                                        <form>
                                            <div class="form-group mb-3">
                                                <input id="loginInput" type="input" placeholder="Username" required="" autofocus="" class="login-form-input px-4" />
                                            </div>
                                            <div class="form-group mb-5">
                                                <input id="loginPassword" type="password" placeholder="Password" required="" class="login-form-input px-4 text-primary" />
                                            </div>
                                            <div className="text-right">
                                                <p><a href="#" className="text-danger">Forget Password? </a></p>
                                                <br></br><br></br>
                                            </div>
                                            <div>
                                                <center>
                                                    <button type="submit" class="btn btn-block text-uppercase text-light btn-login">Sign in</button>
                                                </center>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div >
        </div>

    )
}

export default login;


