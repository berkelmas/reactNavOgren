import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';


class Home extends Component {

    render () {
  return (
      <View>
          <Text>Berk Elmas</Text>
          <Button title={'DenemeYe Git'}
                  onPress={() => this.props.navigation.navigate('Deneme')}/>
      </View>
)

    }
}

export default Home;