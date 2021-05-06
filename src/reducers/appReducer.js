const SHOW_LOADER = 'SHOW_UPLOADED';
const HIDE_LOADER = 'HIDE_LOADED';

const initialState = {
    loader: false,
};

export default function uploadReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export const showUploadFile = () => ({type: SHOW_LOADER});
export const hideUploadFile = () => ({type: HIDE_LOADER});