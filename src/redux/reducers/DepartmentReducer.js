import { DELETE_DATA, GET_DATA, UPDATE_DATA } from "../types/DepartmentType"

let initialState = {
    dataArr: []
};

export const getData = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                dataArr: [...state.dataArr, action.payload]
            };
        case DELETE_DATA:
            return { 
                ...state,
                dataArr: state.dataArr.filter((item) => {
                    return item.id !== action.payload.id
                })
            };
        case UPDATE_DATA:
            return {
                ...state,
                dataArr: state.dataArr.map((item) => {
                    if(item.id === action.payload.id){
                        return action.payload
                    }
                    else{
                        return item
                    }
                })
            }
        default:
            return state
    }
}
