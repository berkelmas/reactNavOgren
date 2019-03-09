import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

import {denemeAction} from "../actions";

class Home extends Component {

    render () {
  return (
      <View>
            <Text>{ this.props.deneme }</Text>

          <Button title={'DenemeYe Git'}
                  onPress={() => this.props.navigation.navigate('Deneme', {baslikGetir : 'GetirdimMm'} )}/>

          <Button title={'Action Getir'}
                  onPress={this.props.denemeAction}
          />
      </View>
)

    }
}

const mapToStateProps = ({denemeResponse}) => {
    const { deneme } = denemeResponse;
    return ({
        deneme
    })
};

export default connect(mapToStateProps, { denemeAction })(Home);