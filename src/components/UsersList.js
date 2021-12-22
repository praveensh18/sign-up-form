import React from "react";

const UsersList = ({userList}) => {

  const renderUserList = () => {
    return userList.map(user => {
      return (
        <div className="data" key={user._id}>
          <div className="profile-details">
            <h4>First Name:</h4>
            <span>{user.firstName}</span>
          </div>
          <div className="profile-details">
            <h4>last Name:</h4>
            <span>{user.lastName}</span>
          </div>
          <div className="profile-details">
            <h4>Email:</h4>
            <span>{user.email}</span>
          </div>
        </div>
      );
    });
  };
  
  return (
    <div className="profile-wrapper">
      <div className="user-details">
        <div className="detail-heading">User Details:</div>
        {renderUserList()}
      </div>
    </div>
  );
};

export default UsersList;
