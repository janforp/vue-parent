const state = {
  shop_list:[],
}

const getters = {
  shopList: state => state.shop_list,
}

const actions = {

  //向shopList中塞入数据的时候，所有使用该数据的组件都会重新渲染
  addShopList({commit},list) {
    commit('addList', {list})
  }
}

const mutations = {

  ////向shopList中塞入数据的时候，所有使用该数据的组件都会重新渲染
  addList(state, {list}) {
    state.shop_list= list;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
