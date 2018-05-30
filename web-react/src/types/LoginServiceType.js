// @flow

import Auth from "../auth/Auth";

type LoginServiceType = {
    auth?: Auth;
    goTo?: Function;
    login?: Function;
    logout?: Function;
    history?: any;
};

export default LoginServiceType;