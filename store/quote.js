 
export default{
    
      namespaced: true,
      state(){
        return {
          name:"kon hai ",
          quotelist: "sdgf adkjgha ldghasd lgha dslghadslf khadsl ghad lshgadls ghasdlkgha gaodishvalkdshg"
        }
      },
      getters: {
         getquote(state){
       	
       	return state.quotelist;
       },
       getname(state){
        
        
        return state.name;
       }
       
      },
  mutations: {
    setname(state,payload){
      state.name=payload;
      
      
    },
     setquote(state,payload){
      state.quotelist=payload;
   
  
    }
    },
actions:{
setname(context,payload){
  
context.commit('setname',payload)
},
setquote(context,payload){
 
context.commit('setquote',payload)
}
}






  }

    
  
