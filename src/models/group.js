import groupService from 'services/GroupService.js';
import {groupDefault} from "../resources/Data";

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
      payload = {...payload, roleId: 1};
      await groupService.createGroup(payload);
    },
    async editGroup(payload) {
      await groupService.editGroup(payload);
    },
    setGroup(group) {
      this.set({group: group});
    },
    clear() {
      this.set({group: groupDefault})
    },
    setGroups(groups) {
      this.set({groups: groups})
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
