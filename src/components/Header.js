import React from "react";
import "./style.scss";

function Header(props) {
  return (
    <div>
      <header>
        <nav
          class="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div class="container-fluid">
            <a class="navbar-brand js-scroll-trigger" href="index.html">
              <img src="https://i.ibb.co/mDn4bQv/spm.png" width="300px" height="100px" alt="todo" border="0" />

            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link text-light" href="index.html">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="contact.html">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div>
        <div class="area"></div>
        <nav class="main-menu fixed-top">
          <ul>
            <hr></hr>
            <li>
              <a href="/">
                <i class="fa fa-th fa-2x"></i>
                <span class="nav-text">Dashboard</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <li data-toggle="collapse" data-target="#new1" class="collapsed">
                <a href="javascript:void(0)">  <i class="fa fa-clock-o fa-2x"></i> <span class="nav-text">Rentals</span> <i class="fa fa-angle-down fa-2x"></i></a>
              </li>
              <ul class="sub-menu collapse" id="new1">
                <li class="has-subnav ">
                  <a href="/addRental">
                    <i class="fa"></i>
                    <span class="nav-text">Add Rentals</span>
                    <i class="fa fa-angle-right fa-3x"></i>
                  </a>
                </li>
              </ul>
              <li>
              </li>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <li data-toggle="collapse" data-target="#new2" class="collapsed">
                <a href="javascript:void(0)">  <i class="fa fa-calendar fa-2x"></i> <span class="nav-text">Reservations</span> <i class="fa fa-angle-down fa-2x"></i></a>
              </li>
              <ul class="sub-menu collapse" id="new2">
                <li class="has-subnav ">
                  <a href="/addLeave">
                    <i class="fa"></i>
                    <span class="nav-text">Add Reservation</span>
                    <i class="fa fa-angle-right fa-3x"></i>
                  </a>
                </li>
              </ul>
              <li>
              </li>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <li data-toggle="collapse" data-target="#new3" class="collapsed">
                <a href="javascript:void(0)">  <i class="fa fa-car fa-2x"></i> <span class="nav-text">Vehicle Inventory</span> <i class="fa fa-angle-down fa-2x"></i></a>
              </li>
              <ul class="sub-menu collapse" id="new3">
                <li class="has-subnav ">
                  <a href="/addLeave">
                    <i class="fa"></i>
                    <span class="nav-text">Add Vehicle</span>
                    <i class="fa fa-angle-right fa-3x"></i>
                  </a>
                </li>
                <li class="has-subnav">
                  <a href="/addLeave">
                    <i class="fa  fa-2x"></i>
                    <span class="nav-text">Vehicle List</span>
                    <i class="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
              </ul>
              <li>
              </li>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <a href="/addLeave">
                <i class="fa fa-users fa-2x"></i>
                <span class="nav-text">Employees</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <li data-toggle="collapse" data-target="#new" class="collapsed">
                <a href="javascript:void(0)">  <i class="fa fa-file-pdf-o fa-2x"></i> <span class="nav-text">Reports</span> <i class="fa fa-angle-down fa-2x"></i></a>
              </li>
              <ul class="sub-menu collapse" id="new">
                <li class="has-subnav ">
                  <a href="/addLeave">
                    <i class="fa"></i>
                    <span class="nav-text">Employees</span>
                    <i class="fa fa-angle-right fa-3x"></i>
                  </a>
                </li>
                <li class="has-subnav">
                  <a href="/addLeave">
                    <i class="fa  fa-2x"></i>
                    <span class="nav-text">Rentals</span>
                    <i class="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
                <li class="has-subnav">
                  <a href="/addLeave">
                    <i class="fa fa-2x"></i>
                    <span class="nav-text">Vehicle Inventory</span>
                    <i class="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
                <li class="has-subnav">
                  <a href="/addLeave">
                    <i class="fa fa-2x"></i>
                    <span class="nav-text">Reservations</span>
                    <i class="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
              </ul>
              <li>
              </li>
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
