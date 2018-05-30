// @flow

type UserPropertiesMap = {
    sub: string;
    given_name: string;
    family_name: string;
    nickname: string;
    name: string;
    picture: string;
    gender: string;
    locale: string;
    updated_at: string;
}

type State = {
    propMap: UserPropertiesMap;
}


export default State