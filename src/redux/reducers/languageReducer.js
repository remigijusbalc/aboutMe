import { SET_LANGUAGE, GET_LANGUAGE, GET_LANGUAGE_FAIL } from "../Types";

const initialState = {
    translations: {},
    key: "lt",
    error: null
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_LANGUAGE:
        case SET_LANGUAGE:
        return {
            ...state,
            translations: action.translations,
            key: action.key
        };
        case GET_LANGUAGE_FAIL:
        return {
            ...state,
            error: action.error
        }
        default: return state;
    }
}