import { DELETE_DATA, GET_DATA, UPDATE_DATA } from "../types/DepartmentType";

export const getData = (value) => {
    return async (dispatch) => {
        dispatch({
            type: GET_DATA,
            payload: value,
            isLoading: false,
            msg: "",
        })
    }
}

export const delData = (value) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_DATA,
            payload: value,
            isLoading: false,
            msg: "",
        })
    }
}

export const updData = (value) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_DATA,
            payload: value,
            isLoading: false,
            msg: "",
        })
    }
}