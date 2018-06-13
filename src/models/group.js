import {dispatch} from '@rematch/core';
import {push} from "react-router-redux";
import groupService from 'services/GroupService.js';
import {listGroup, groupDefault} from "../resources/Data";

export default {
  state: {
    groups: [],
    group: groupDefault
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
    async createGroup(payload) {
      await groupService.createGroup(payload);
      return dispatch(push("/groups/list"))
    },
    async editGroup(payload) {
      await groupService.editGroup(payload);
      return dispatch(push("/groups/list"))
    },
    setGroup(group) {
      this.set({group: group});
    },
    clear() {
      this.set({group: groupDefault})
    },
    setGroups(groups){
      this.set({groups: groups})
    },
    initGroups() {
      groupService.list().then(groups => {
        this.set({groups: groups})
      })
    }

  },
  selectors: {
    getGroup: (state) => {
      return state.group;
    },
    getGroups: (state) => {
      return state.groups;
    },
    clear: () => {
      return groupDefault;
    }
  }
}
