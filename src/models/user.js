import { Auth } from 'aws-amplify';
import {select} from '@rematch/select'
import {dispatch} from '@rematch/core'
const userDefault = {
    username: '',
    email: '',
    nickname: '',
    phone_number: '',
    family_name: '',
    given_name: '',
    avatar: '',
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
        async editUser(payload, state) {
            try {
                let user = select.app.getUser(state);
                const attributes = user.attributes;
                let _attributes = {};
                Object.keys(payload).map(key => {
                    if(key !== 'username') {
                      if(attributes[key] !== payload[key]) {
                        return _attributes[key] = payload[key];
                      }
                    }
                });
                if(_attributes.given_name || _attributes.family_name) {
                    _attributes.name = `${payload.family_name} ${payload.given_name}`
                }
                const response = await Auth.updateUserAttributes(user, _attributes);
                Object.keys(_attributes).map(key => {
                    user.attributes[key] = _attributes[key]
                });
                dispatch.app.set({user: user});

                return response
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
