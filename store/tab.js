export  default {
    state:{
        isCollapse:false,
        //初始数据（首页）
        tabsList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ],
        currentMenu:null,
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            if(val.name !== 'home'){
                state.currentMenu = val
            const result = state.tabsList.findIndex(item => item.name === val.name)
                if(result !== -1){
                    state.tabsList.push(val)
                }
            }else {
                state.currentMenu = null
            }
        }
    }

}
