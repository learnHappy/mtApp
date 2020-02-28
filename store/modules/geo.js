let state = function () {
  return {
    position: {}
  }
}
let mutations = {
  setPosition: function (state, val) {
    state.position = val
  }
}

let actions = {
  setPosition: function ({commit}, position) {
    commit('setPosition', position)
  }
}

export default {namespaced: true,state, mutations, actions}
