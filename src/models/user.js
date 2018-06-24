import {dispatch} from '@rematch/core';
import {push} from "react-router-redux";

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
            return dispatch(push("/users/profile"))
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
            console.log("init get user")
            return state.user;
        },
        clear: () => {
            return userDefault;
        }
    }
}
