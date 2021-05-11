import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ errorMessage: "", isLoading: false });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const proxy_url = process.env.REACT_APP_PROXY_URL;

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1],
      };
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoggedIn(true);
          localStorage.setItem("loggedUser", JSON.stringify(data));
        })
        .catch(() => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed",
          });
        });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="login-content flex flex-col border-4 border-gray-500 mt-10">
        <h1>Welcome</h1>
        <span>{data.errorMessage}</span>
        {data.isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <a
              className="login-link"
              href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
              onClick={() => {
                setData({ ...data, errorMessage: "" });
              }}
            >
              Click to login with GitHub
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
