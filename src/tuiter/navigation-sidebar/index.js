import React from "react";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <a className="list-group-item">Home</a>
        <a className="list-group-item">Explore</a>
        <a className="list-group-item">Notifications</a>
        <a className="list-group-item">Messages</a>
        <a className="list-group-item">Bookmarks</a>
        <a className="list-group-item">Lists</a>
        <a className="list-group-item">Profile</a>
        <a className="list-group-item">More</a>
      </div>
  );


};
export default NavigationSidebar;

