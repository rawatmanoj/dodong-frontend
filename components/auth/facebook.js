"use client";
import { useEffect } from "react";
import { FacebookProvider, LoginButton, useLogin } from "react-facebook";
import { BsFacebook } from "react-icons/bs";

const facebookAppId = "708703114198422";

function initFacebookSdk() {
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: "v8.0",
      });

      // auto authenticate with the api if already logged in with facebook
      window.FB.getLoginStatus(({ authResponse }) => {
        if (authResponse) {
          accountService
            .apiAuthenticate(authResponse.accessToken)
            .then(resolve);
        } else {
          resolve();
        }
      });
    };

    // load facebook sdk script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
}

export default function FacebookButton() {
  const { login, status, isLoading, error } = useLogin();

  useEffect(() => {
    initFacebookSdk();
    console.log("status", error, status);
    if (status === "connected") {
      console.log("connected");
    } else {
      console.log("not connected");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogin() {
    try {
      FB.login(function (response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          FB.api("/me", function (response) {
            console.log("Good to see you, " + response.name + ".");
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleSuccess(response) {
    console.log(response.status);
  }

  function handleError(error) {
    console.log(error);
  }
  return (
    <button scope="email" onClick={handleLogin}>
      <BsFacebook className="text-blue-600 text-3xl" />
    </button>
  );
}
