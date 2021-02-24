const Model = {
  namespace: 'about',
  state: {
   flag:true,
  },
  effects: {
  },
  reducers: {
    updateState(state, {payload}) {
        return {
          ...state,
          ...payload,
        }
  }
}
}
export default Model
