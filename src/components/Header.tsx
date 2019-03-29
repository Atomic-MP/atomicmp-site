import * as React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css'
import logo from "../images/amp-header-logo-low.png"
import IUser from "../models/IUser";

interface INavProps {
  user: (IUser | undefined)
}

interface INavState {
  showResponsiveMenu: boolean;
  user: any;
  isLoggedIn: boolean;
}

class Header extends React.Component<INavProps, Partial<INavState>> {
  public state = {
    isLoggedIn: false,
    showResponsiveMenu: false,
    user: {},
  };

  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showResponsiveMenu: false,
      user: {},
    };
    this.flipResponsiveMenu = this.flipResponsiveMenu.bind(this);
    this.renderUnauthenticatedHeaderLinks = this.renderUnauthenticatedHeaderLinks.bind(this);
    this.renderAuthenticatedHeaderLinks = this.renderAuthenticatedHeaderLinks.bind(this);
  }
  public componentWillReceiveProps(nextProps: any) {
    console.log(nextProps)
    this.setState({
      isLoggedIn: (nextProps.user !== undefined),
        user: {...nextProps.user}
    });
  }

  public render() {
    console.log(this.state)
    return (
      <nav
        className={
          this.state.showResponsiveMenu ? "topnav responsive" : "topnav"
        }
        id="topnav"
      >
        <Link className="nav-logo" to="/">
          <img src={logo} style={{ width: "300px", height: "58px" }} />
        </Link>
        <a
          className="nav-item discord-icon"
          href="https://discord.gg/5kPpTKw"
          target="_blank"
        >
          <span>Discord </span>
          <i className="fab fa-discord" />
        </a>

        {this.state.isLoggedIn
          ? this.renderAuthenticatedHeaderLinks()
          : this.renderUnauthenticatedHeaderLinks()
        }

        <span
          className="nav-item icon"
          id="hamburger"
          onClick={this.flipResponsiveMenu}
        >
          &#9776;
        </span>
      </nav>
    );
  }

  private renderUnauthenticatedHeaderLinks() {
    return (
      <div>
        <Link className="nav-item" to="/register">
          Register
        </Link>
        <Link className="nav-item" to="/login">
          Login
        </Link>
      </div>
    )
  }
  private renderAuthenticatedHeaderLinks() {
    const user = Object.assign({username: "", user_id: 0}, this.state.user);
    const userURl = `/user/${user.user_id}`
    return (
      <div>
        <Link className="nav-item" to={userURl}>
          {user.username}
        </Link>
        <Link className="nav-item" to="/logout">
          Logout
        </Link>
      </div>
    )
  }

  private flipResponsiveMenu() {
    this.setState({ showResponsiveMenu: !this.state.showResponsiveMenu });
  }
}

export default Header;
