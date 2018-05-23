import {dispatch} from '@rematch/core';
import {push} from "react-router-redux";
import {SubmissionError} from "redux-form";

export default {
  state: {
    name: '',
    groupNotifyBot: '',
    groupAlertBot: '',
    creator: '',
    isCreated: false
  },
  reducers: {
    setIsCreated(state, payload) {
      return {
        ...state,
        isCreated: payload
      }
    }
  },
  effects: {
    async groupAsync(payload) {
      try {
        const {name, creator} = payload;

        this.setIsCreated({isCreated: true});
        //todo: call api create group
      } catch (err) {
        console.log(err);
        throw new SubmissionError({_error: err.message})
      }
    }
  },
  selectors: {
    getIsCreated: (state) => {
      return state.isCreated
    }
  }
}
