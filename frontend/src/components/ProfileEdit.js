import React from "react";
import { Link } from "react-router-dom";

export class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.newUsername = React.createRef();
    this.newEmail = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const updatedUsername = this.newUsername.current.value;
    const updatedEmail = this.newEmail.current.value;

    this.props.onSaveProfile({
      username: updatedUsername,
      email: updatedEmail,
    });
  }

  render() {
    const { username, email } = this.props;

    return (
      <div className="profile-edit">
        <h2>Edit Your Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Username:
              <input
                type="text"
                ref={this.newUsername}
                defaultValue={username}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" ref={this.newEmail} defaultValue={email} />
            </label>
          </div>
          <button type="submit">Save Changes</button>
        </form>
        <Link to="/home">
          <button>Go Home</button>
        </Link>
      </div>
    );
  }
}
