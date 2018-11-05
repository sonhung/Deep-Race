import { ActionTypes } from '../constants/actions';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_ALL_IMAGES:
            const { data: allImages } = action;
            return { ...state, allImages };

        case ActionTypes.GET_ALL_IMAGES_FAIL:
            const { error } = action;
            return { ...state, error };

        default:
            return state;
    }
}