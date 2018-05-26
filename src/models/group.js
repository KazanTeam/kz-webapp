import {dispatch} from '@rematch/core';
import {push} from "react-router-redux";
import {SubmissionError} from "redux-form";
import groupService from 'services/GroupService.js'

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
        this.setIsCreated({isCreated: true});

        groupService.createGroup(payload);

        return dispatch(push("/groups/list"))
      } catch (err) {
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
