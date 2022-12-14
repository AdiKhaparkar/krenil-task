import { ActionTypes } from "../constant/constant";

const initialState={
    userList:[],
};


export const userListReducer = (state = initialState , action) =>{
    switch(action.type){

        case ActionTypes.ADD_USER:
            return{...state, userList: [...state.userList, action.payload]};

        case ActionTypes.UPDATE_USER:
            let userData=[...state.userList];
            userData.splice(action.index,1, action.payload);
        return{...state, userList: userData};
        
       


        default:
            return state;
    }
};
export default userListReducer;