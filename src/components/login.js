import React from 'react'
import "./style.scss";

function login() {
    return (
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="col-md-6 d-none d-md-flex bg-image"></div>


                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">

                        <div class="container login-container">
                            <div class="row">
                                <div class="col mx-auto text-center">
                                    <h3>Welcome back!</h3>
                                    <form>
                                        <div class="form-group mb-3">
                                            <input id="loginInput" type="input" placeholder="Username" required="" autofocus="" class="login-form-input form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="loginPassword" type="password" placeholder="Password" required="" class="login-form-input form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="text-right">
                                            <p><a href="#" >Forget Password? </a></p>
                                            <br></br><br></br>
                                        </div>
                                        <div>
                                            <center>
                                                <button type="submit" class="btn btn-block text-uppercase mb-2 rounded-pill btn-login">Sign in</button>
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

    )
}

export default login;


