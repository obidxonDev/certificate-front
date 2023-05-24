
const crmData = (state = false, action) => {
   switch(action.type) {
      case "ADD__ADMIN" : 
         if(state === false){
            return state = state = true
         }
      case "REMOVE__ADMIN":
         return localStorage.removeItem("persist:root"), false
      default: 
         return state
   }
}

export default crmData