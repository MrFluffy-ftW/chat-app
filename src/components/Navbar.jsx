import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Fluffy Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/13150616/pexels-photo-13150616.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};