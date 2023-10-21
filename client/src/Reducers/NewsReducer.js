export function NewsReducer(state,action){
    switch (action.type) {
        case "SETNEWS":
            return {
                ...state,
                news:action.payload
            }
            
      case "SETPOST":
        return {
            ...state,
            postDetail:action.payload
        }
    
        case "SETRANDOM":
            return{
                ...state,
                randompost:action.payload

            }

            case "SETLOADING":
                return{
                    ...state,
                    loading:true
                }
            case "REMOVELOADING":
                return {
                    ...state,
                    loading:false
                }

                case "SETERROR":
                return{
                    ...state,
                    Error:true
                }
            case "REMOVERROR":
                return {
                    ...state,
                    loading:false
                }

                case "SETESEARCH":
                    return{
                        ...state,
                        search:true
                    }
                case "REMOVESEARCH":
                    return {
                        ...state,
                        search:false
                    }

        default:
        return {
            ...state
        }
    }
}