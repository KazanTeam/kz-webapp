export default {
  state: {
    userId: '',
    groupId: '',
    roleId: '',
    groupAlias: '',
    symbolMaster: '',
    expiryDate: '',
    active: true,
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
      async edit(payload) {

      }

  }
}
