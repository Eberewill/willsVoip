import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../store/actions/auth";
import { Dropdown, Menu } from "semantic-ui-react";

import chat from "./images/chat.png";
import dialpad from "./images/dialpad.png";
import logo from "./images/logo.png";
import menu from "./images/menu.png";
import recent from "./images/recent.png";
import contact from "./images/contact.png";

const Navbar = ({ auth: { isAuthenticated, loading }, logout, profile }) => {
  
	const account = <Link to='/userprofile'>Account</Link>
	const signout = <Link to='#' onClick={logout}>Sign Out</Link>
	
	
	const options = [
    { key: "user", text: account, icon: "user"  },
    { key: "settings", text: "Settings", icon: "settings" },
    { key: "sign-out", text: signout, icon: "sign out" },
  ];
  const image = <img src={menu} width="116" height="107" alt="img"></img>;
  const authLinks = (
    <div className="container">
      <div className="row">
        <div className="col-sm-12" style={{ background: "#fafafa" }}>
          <div className="main-menu">
            <div className="row">
              <div className="col-sm-12">
                <nav className="navbar" id="main-nav">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#edulight-navbar-collapse"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/dashboard">
                      <img src={logo} alt="Wills Web App"></img>
                    </a>
                  </div>

                  <div className="search-wrap">
                    <div className="search-inner">
                      <div className="search-cell">
                        <form method="get">
                          <div className="search-field-holder">
                            <input
                              type="search"
                              className="form-control main-search-input"
                              placeholder="Search ..."
                            ></input>
                            <button type="submit">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="nav-container">
                    <div
                      className="collapse navbar-collapse"
                      id="edulight-navbar-collapse"
                    >
                      <ul className="nav navbar-nav">
                        <li className="mega-menu dropdown">
                          <a href="chat.html">
                            <img src={chat} width="116" height="107" />
                          </a>
                        </li>
                        <li className="mega-menu dropdown">
                          <a href="dialpad.html">
                            <img
                              src={dialpad}
                              width="116"
                              height="107"
                              alt="img"
                            ></img>
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="dialpad.html">
                            <img src={recent} width="116" height="107" />
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="chat.html">
                            <img
                              src={contact}
                              width="116"
                              height="107"
                              alt="img"
                            />{" "}
                          </a>
                        </li>
                          {profile !== null ?  (
                            <><li className="dropdown">
                          <Dropdown
                            trigger={image}
                            options={options}
                            pointing="top right"
                            icon={null}
                          />
                        </li></>
                          ) : (<></>)
                         }
                      </ul>
                     
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const guestLinks = <></>;
  return (
    <div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,

};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout })(Navbar);
