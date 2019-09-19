
import axios from 'axios'
export const getChangeAction = (value) => {
    return {
        type: 'change',
        value,
    }
}
export const getAddAction = () => {
    return {
        type: 'add'
    }
}
export const getDelAction = (index) => ({
    type: 'del_',
    index,
})
export const getInitDataAction = (value) => ({
    type: 'init_data',
    value,
})
export const getInitItemAction = () => {
    return (dispatch) => {
        axios.get('api/data.json').then(res => {
            console.log(res)
            const value = res.data.data;
            const action = getInitDataAction(value);
            dispatch(action);
        })
    }
}