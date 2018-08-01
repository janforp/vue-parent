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
  },

  delProduct({commit}, product) {
    commit('del', {product});
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
  },

  del(state, {product}) {
   // const added = state.added;
   // let index = 0;
   // for (let i=0; i< added.length;i++) {
   //   if (product.id === added[i].id) {
   //     index = i;
   //   }
   // }
   // added.splice(index, 1)
    state.added.forEach((n,i)=>{
      if(n.id === product.id){
        //console.info(11,n)
        //找到index的下标值
        state.added.splice(i,1)
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
