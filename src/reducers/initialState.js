export const initialState = {
    spotify: {
        token: '',
        loading: false,
        error: null,
        data: {},
    },
    profile: {
        loading: false,
        error: null,
        data: {}
    },
    search: {}
};
export default initialState;