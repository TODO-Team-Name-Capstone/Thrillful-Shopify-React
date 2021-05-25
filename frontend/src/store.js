import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer.js';
import { messageReducer } from './reducers/messageReducer.js';

// const initialState = {};
// const reducer = (state, action) => {
//     return { userSignin : userSigninReducer,
//             message: messageReducer };
// };

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("userInfo")?
        JSON.parse(localStorage.getItem("userInfo")) : null
    }
};

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    message: messageReducer

});


// const reducer = (state, action) => {
//     return { userSignin : userSigninReducer };
// };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );


export default store