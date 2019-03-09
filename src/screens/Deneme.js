import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Deneme extends Component {

    render () {

        const {navigation} = this.props;
        const sentName = navigation.getParam('sentName', 'Gonderilen bir sey yok...')

        return (
            <View>

                 <Text>Deneme Deneme</Text>
                <Text>{sentName}</Text>
                <Button title={'Geri Git'} onPress={() => this.props.navigation.goBack()}/>
            </View>
        )
    }
}

export default Deneme;