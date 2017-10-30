import Vue from 'vue'

const state ={//用于存储数据
    orderList:[],
    params:{}
}

const getters={//用于页面调用state中的值，注意：页面无法直接获取state中的数据值
    getOrderList:function (state){
        return state.orderList
    }
}

const actions={//用于异步操作的
    fetchOrderList ({commit,state}){
        Vue.http.post('/api/getOrderList',state.params)
        .then((res)=>{
            commit('changeOrderList',res.data.list)
        },(err)=>{

        })
    }
}

const mutations={//同步操作
    changeOrderList (state,payload){
        state.orderList=payload
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}