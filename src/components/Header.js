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
            <li>
              <a href="/">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">Home</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/empList">
                <i class="fa fa-users fa-2x"></i>
                <span class="nav-text">View Employee List</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/addEmp">
                <i class="fa fa-user-plus fa-2x"></i>
                <span class="nav-text">Add New Employee</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <a href="/leaveList">
                <i class="fa fa-calendar fa-2x"></i>
                <span class="nav-text">View Leave List</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/addLeave">
                <i class="fa fa-calendar-plus-o fa-2x"></i>
                <span class="nav-text">Add Leave Details</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <a href="/attendaceMark">
                <i class="fa fa-edit fa-2x"></i>
                <span class="nav-text">Mark Attendance</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/attendanceList">
                <i class="fa fa-tasks fa-2x"></i>
                <span class="nav-text">View Attendance List</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer-basic">
        <footer>
          <p class="copyright">Company Name © 2018</p>
        </footer>
      </div>
    </div >
  );
}

export default Header;
