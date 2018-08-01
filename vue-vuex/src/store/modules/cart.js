const state = {
  shop_list:[],
  added:[]
}

const getters = {
  shopList: state => state.shop_list,

  //购物车的列表
  cartProducts:state=>{
    return state.added.map(({id,num} )=> {
      let product = state.shop_list.find(n => n.id === id)
      return {
        ...product,
        num
      }
    })
  },
}

const actions = {

  //向shopList中塞入数据的时候，所有使用该数据的组件都会重新渲染
  addShopList({commit},list) {
    commit('addList', {list})
  },

  addToCart({commit}, product) {
    commit('add', {id:product.id});
  }
}

const mutations = {

  //向shopList中塞入数据的时候，所有使用该数据的组件都会重新渲染
  addList(state, {list}) {
    state.shop_list = list;
  },

  add(state, {id}) {
    let record = state.added.find((ele) => (ele.id === id));

    //如果该商品没有加入过
    if (!record) {
      state.added.push({id, num:1});
    }else {
      record.num++;
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
