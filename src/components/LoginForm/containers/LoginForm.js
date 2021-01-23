import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
import Login from "../components/Login";
class LoginForm extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, LogIn } = this.props;
    return (
      <div className="container">
        <Login realUsers={users} LogIn = {LogIn} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
