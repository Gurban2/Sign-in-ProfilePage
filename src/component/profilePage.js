import React, { useState, useEffect } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import UpoloadAvatar from "./Avatar";
import "./styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("Fetched User Data:", localUser); // Проверяем данные из localStorage

    if (localUser) {
      setUser(localUser);
    } else {
      console.log("No user data found");
    }

    setIsUserUpdated(false);
  }, [isUserUpdated]);

  return (
    <div className="profile">
      <div className="avatar">
        <div className="avatar-wrapper">
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt={`${user.userName || "User"} avatar`} />
          ) : (
            <IoPersonCircleOutline />
          )}
          <UpoloadAvatar
            userId={user.id}
            username={user.userName}
            avatarUrl={user.avatarUrl}
            setIsUserUpdated={setIsUserUpdated}
          />
        </div>
      </div>
      <div className="profile-details">
        <p>Name: {user.userName || "N/A"}</p>
        <p>Email: {user.email || "N/A"}</p>
      </div>
    </div>
  );
};

export default Profile;
