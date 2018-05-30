// @flow
import history from "../history";
import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";
import AuthRespnseType from "../types/AuthResult";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.callbackUrl,
        audience: `https://${AUTH_CONFIG.domain}/userinfo`,
        responseType: "token id_token",
        scope: "openid profile"
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    login = () => {
        this.auth0.authorize();
    };

    getUser = () => {
        var accessToken: string = localStorage.getItem("access_token");
        if (accessToken) {
            this.auth0.client.userInfo(accessToken, (error, user) => {
                if (user) {
                    localStorage.setItem("profile", JSON.stringify(user));
                }
            });
        }
    };

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            console.log(authResult);
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace("/dashboard");
            } else if (err) {
                history.replace("/dashboard");
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    };

    setSession = (authResult: AuthRespnseType): any => {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
        this.getUser();
        // navigate to the home route
        history.replace("/dashboard");
    };

    logout = (): void => {
        // Clear access token and ID token from local storage
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("profile");
        // navigate to the home route
        history.replace("/home");
    };

    isAuthenticated = (): boolean => {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = localStorage.getItem("expires_at");
        if (expiresAt) {
            let notExpired = new Date().getTime < JSON.parse(expiresAt);
            if (notExpired) {
                this.getUser();
            } else {
                localStorage.removeItem("access_token");
                localStorage.removeItem("id_token");
                localStorage.removeItem("expires_at");
                localStorage.removeItem("profile");
            }
            return notExpired;
        } else {
            return false;
        }
    };
}
