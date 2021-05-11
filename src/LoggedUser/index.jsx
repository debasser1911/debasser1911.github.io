import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const LoggedUser = () => {
  const [loggedUser, setLoggedUser] = useState(null);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.setItem("loggedUser", "");
  };

  useEffect(() => {
    if (localStorage.getItem("loggedUser")) {
      setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")));
    } else {
      setLoggedUser(null);
    }
  }, []);

  return (
    <div className="container">
      {loggedUser ? (
        <>
          <button onClick={() => handleLogout()}>Logout</button>
          <div className="content">
            <img src={loggedUser.avatar_url} alt="Avatar" />
            <span>{loggedUser.name}</span>
            <span>{loggedUser.public_repos} Repos</span>
            <span>{loggedUser.followers} Followers</span>
            <span>{loggedUser.following} Following</span>
          </div>
        </>
      ) : (
        <button onClick={() => history.push("/login")}>Login</button>
      )}
    </div>
  );
};

export default LoggedUser;
