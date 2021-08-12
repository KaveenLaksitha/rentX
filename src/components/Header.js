import React from "react";
import "./style.scss";


function Header(props) {
  return (
    <div className="page-body">
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container-fluid">
            <a className="navbar-brand js-scroll-trigger" href="index.html">
              <img src="https://i.ibb.co/mDn4bQv/spm.png" width="300px" height="100px" alt="todo" border="0" />

            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="text-light" href="index.html">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="text-light" href="contact.html">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div>
        <div className="area"></div>
        <nav className="main-menu fixed-top">
          <ul>
            <hr></hr>
            <li>
              <a href="/">
                <i className="fa fa-th fa-2x"></i>
                <span className="nav-text">Dashboard</span>
                <i className="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new1" className="collapsed">
                <a href="javascript:void(0)">  <i className="fa fa-clock-o fa-2x"></i> <span className="nav-text">Rentals</span> <i className="fa fa-angle-down fa-2x"></i></a>
              </li>
              <ul className="sub-menu collapse" id="new1">
                <li className="has-subnav ">
                  <a href="/addRental">
                    <i className="fa"></i>
                    <span className="nav-text">Add Rentals</span>
                    <i className="fa fa-angle-right fa-3x"></i>
                  </a>
                </li>
                <li className="has-subnav">
                  <a href="/rentalList">
                    <i className="fa  fa-2x"></i>
                    <span className="nav-text">Rentals List</span>
                    <i className="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
              </ul>
              <li>
              </li>
            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new2" className="collapsed">
                <a href="javascript:void(0)">  <i className="fa fa-calendar fa-2x"></i> <span className="nav-text">Reservations</span> <i className="fa fa-angle-down fa-2x"></i></a>
              </li>
              <ul className="sub-menu collapse" id="new2">
                <li className="has-subnav ">
                  <a href="/addLeave">
                    <i className="fa"></i>
                    <span className="nav-text">Add Reservation</span>
                    <i className="fa fa-angle-right fa-3x"></i>
                  </a>
                </li>
              </ul>
              <li>
              </li>
            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new3" className="collapsed">
                <a href="javascript:void(0)">  <i className="fa fa-car fa-2x"></i> <span className="nav-text">Vehicle Inventory</span> <i className="fa fa-angle-down fa-2x"></i></a>
              </li>
              <ul className="sub-menu collapse" id="new3">
                <li className="has-subnav ">
                  <a href="/addLeave">
                    <i className="fa"></i>
                    <span className="nav-text">Add Vehicle</span>
                    <i className="fa fa-angle-right fa-3x"></i>
                  </a>
                </li>
                <li className="has-subnav">
                  <a href="/addLeave">
                    <i className="fa  fa-2x"></i>
                    <span className="nav-text">Vehicle List</span>
                    <i className="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
              </ul>
              <li>
              </li>
            </li>
            <hr></hr>
            <li className="has-subnav">
              <a href="/addEmployee">
                <i className="fa fa-users fa-2x"></i>
                <span className="nav-text">Employees</span>
                <i className="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <hr></hr>
            <li className="has-subnav">
              <li data-toggle="collapse" data-target="#new" className="collapsed">
                <a href="javascript:void(0)">  <i className="fa fa-file-pdf-o fa-2x"></i> <span className="nav-text">Reports</span> <i className="fa fa-angle-down fa-2x"></i></a>
              </li>
              <ul className="sub-menu collapse" id="new">
                <li className="has-subnav ">
                  <a href="/empList">
                    <i className="fa"></i>
                    <span className="nav-text">Employees</span>
                    <i className="fa fa-angle-right fa-3x"></i>
                  </a>
                </li>
                <li className="has-subnav">
                  <a href="/addLeave">
                    <i className="fa  fa-2x"></i>
                    <span className="nav-text">Rentals</span>
                    <i className="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
                <li className="has-subnav">
                  <a href="/addLeave">
                    <i className="fa fa-2x"></i>
                    <span className="nav-text">Vehicle Inventory</span>
                    <i className="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
                <li className="has-subnav">
                  <a href="/addLeave">
                    <i className="fa fa-2x"></i>
                    <span className="nav-text">Reservations</span>
                    <i className="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
              </ul>
              <li>
              </li>
            </li>
            <hr></hr>
            <li>
              <a href="/makeInquiry">
                <i className="fa fa-question-circle-o fa-2x"></i>
                <span className="nav-text">Make an Inquiry</span>
                <i className="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <hr></hr>
          </ul>
        </nav>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      {/*<div class="footer-basic">
<footer>
  <p class="copyright">Company Name © 2018</p>
</footer>
</div>
*/}
    </div >
  );
}

export default Header;
