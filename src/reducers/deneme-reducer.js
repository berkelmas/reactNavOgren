const INITIAL_STATE = {
    deneme : '',
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'deneme':
            return {...state, deneme: 'berkelmas'};
        default:
            return state;
    }
};