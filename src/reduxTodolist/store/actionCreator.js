
import * as type from './typeCreator';
import axios from 'axios'
export const getInputChange = (value) => {
    return {
        type: type.INPUT_CHANGE,
        value,
    }
}
export const getAddItem = () => {
    return {
        type: type.ADD_ITEM
    }
}
export const getDelItem = (index) => {
    return {
        type: type.DEL_ITEM,
        index,
    }
}
export const getInitData = (value) => {
    return {
        type: type.INIT_DATA,
        value,
    }
}
export const getInitDataAction = () => {
    return (dispatch) => {
        axios.get('api/data.json').then(res => {
            console.log(res)
            const {data} = res;
            const action = getInitData(data.data);
            dispatch(action);
        })
    }
}