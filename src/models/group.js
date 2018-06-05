import {dispatch} from '@rematch/core';
import {push} from "react-router-redux";
import groupService from 'services/GroupService.js'

/**
 * Hard code table values
 * @type {*[]}
 */
const initState = [
  {id: 1, name: "Group 1", groupNotifyBot: 1, groupAlertBot: 1, creator: 1},
  {id: 2, name: "Group 2", groupNotifyBot: 2, groupAlertBot: 2, creator: 1},
  {id: 3, name: "Group 3", groupNotifyBot: 3, groupAlertBot: 3, creator: 1},
  {id: 4, name: "Group 4", groupNotifyBot: 4, groupAlertBot: 4, creator: 1},
  {id: 5, name: "Group 5", groupNotifyBot: 5, groupAlertBot: 5, creator: 1},
  {id: 6, name: "Group 6", groupNotifyBot: 6, groupAlertBot: 6, creator: 1},
  {id: 7, name: "Group 7", groupNotifyBot: 7, groupAlertBot: 7, creator: 1},
];

export default {
  state: {
    groups: initState,
    group: {
      name: '',
      groupNotifyBot: '',
      groupAlertBot: '',
      creator: ''
    }
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
    async groupAsync(payload) {
      try {
        await groupService.createGroup(payload);
        return dispatch(push("/groups/list"))
      } catch (error) {
        throw error;
      }
    },
    async setGroup(payload) {
      this.set({group: payload});
    }
  },
  selectors: {
    getGroup: (state) => {
      return state.group;
    },
    getGroups: (state) => {
      return state.groups;
    }
  }
}
