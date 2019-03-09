import { NavigationActions } from 'react-navigation';

export const denemeAction = () => {
    return (dispatch) => {
        dispatch({
            type: 'deneme'
        });
        console.log('deneme çakıştı...');
        NavigationActions.navigate('Deneme')

    }
};