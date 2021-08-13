import React, { Component } from "react";
import { Table } from "reactstrap";
import NewUserProfileModal from "./NewUserProfileModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class UserProfileList extends Component {
  render() {
    const userprofiles = this.props.userprofiles;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Document</th>
            <th>Phone</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!userprofiles || userprofiles.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            userprofiles.map(userprofile => (
              <tr key={userprofile.pk}>
                <td>{userprofile.name}</td>
                <td>{userprofile.email}</td>
                <td>{userprofile.document}</td>
                <td>{userprofile.phone}</td>
                <td>{userprofile.registrationDate}</td>
                <td align="center">
                  <NewUserProfileModal
                    create={false}
                    userprofile={userprofile}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={userprofile.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default UserProfileList;