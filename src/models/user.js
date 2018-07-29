import {dispatch} from '@rematch/core';
import {push} from "react-router-redux";
import { Auth } from 'aws-amplify';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

const userDefault = {
    username: 'truongnx0111',
    email: 'truongnx0111@gmail.com',
    telegramUsername: '',
    phoneNumber: '01655435471',
    firstName: 'Nguyen',
    lastName: 'Truong',
};

export default {

    state: {
        user: userDefault
    },
    reducers: {
        set(state, payload) {
            return {
                ...state,
                ...payload
            }
        }
    },
    effects: {

        async editUser(payload) {
            try {
                let cognitoUser = await Auth.currentAuthenticatedUser();
                const {email, telegramUsername, phoneNumber} = payload;
                var attributeList = [];
                var _email = new AmazonCognitoIdentity.CognitoUserAttribute({Name : 'email', Value : email});
                var _nickname = new AmazonCognitoIdentity.CognitoUserAttribute({Name : 'nickname', Value : telegramUsername});
                var _phoneNuber = new AmazonCognitoIdentity.CognitoUserAttribute({Name : 'phone_number', Value : phoneNumber});
                attributeList.push(_email);
                attributeList.push(_nickname);
                attributeList.push(_phoneNuber);
                cognitoUser.updateAttributes(attributeList, function(err, result) {
                    if (err) {
                        console.log(err.message || JSON.stringify(err));
                        return;
                    }
                    // console.log('call result: ' + result);
                });
                return dispatch(push("/users/profile"))
            } catch (err) {
                throw err;
            }

        },
        setUser(user) {
            this.set({user: user});
        },
        clear() {
            this.set({user: userDefault})
        }
    },
    selectors: {
        getUser: (state) => {
            return state.user;
        },
        clear: () => {
            return userDefault;
        }
    }
}
