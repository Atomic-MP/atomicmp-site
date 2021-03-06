import * as React from "react";
import { Redirect } from 'react-router-dom';
import Container from "../components/Container";
import "../css/Form.css";
import backend from "../utils/network";

interface ILoginProps {
  fetchAuth: () => void;
}

interface ILoginState {
  redirect: boolean;
  error: string;
  submitting: boolean;
  remember: boolean;
  formData: {
    username: string;
    password: string;
  }
}

class Login extends React.Component<ILoginProps, Partial<ILoginState>> {
  public state = {
    error: "",
    formData: {
      password: "",
      username: "",
    },
    remember: true,
    redirect: false,
    submitting: false
  };

  constructor(props: any) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Container>
          <h1>Login</h1>
          {this.renderForm()}
        </Container>
      </div>
    );
  }

  public renderForm() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>
            Username
            <input
              type="text"
              name="username"
              pattern="[A-Za-z_ ]{3,24}"
              value={this.state.formData.username}
              onChange={this.handleUsernameChange}
              autoComplete="off"
              required={true}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              pattern=".{8,}"
              value={this.state.formData.password}
              onChange={this.handlePasswordChange}
              autoComplete="off"
              required={true}
            />
          </label>
          <label>
            Remember Me:
            <input
              type="checkbox"
              name="remember"
              checked={this.state.remember}
              onChange={this.handleRememberMeChange}
            />
          </label>
          <p className="error">{this.state.error}</p>
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }

  public handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      formData: { ...this.state.formData, username: value }
    });
  }
  public handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      formData: { ...this.state.formData, password: value }
    });
  }
  public handleRememberMeChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ remember: !this.state.remember });
  }

  public async submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({ submitting: true });
    try {
      const { data } = await backend.post("/login", this.state.formData)
      this.state.remember
        ? window.localStorage.setItem("authToken", data.token)
        : window.sessionStorage.setItem("authToken", data.token)
      await this.props.fetchAuth();
      this.setState({redirect: true})
    } catch (error) {
      if (error.response.data) {
        this.setState({ error: error.response.data.message, submitting: false });
      }
    }
  }
}

export default Login;
