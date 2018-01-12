import React from 'react'
import {
  AppRegistry,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native'
import { FormattedCurrency, FormattedWrapper } from 'react-native-globalize'
import { DevMenu } from 'react-native-today-widget'

const style = {
  stackChildrenVertically: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:100,
    width:'100%',
  },
  heightConstraint: {
    width:'100%',
    height:100,
  },
  showFormattedCurrencyUnderInputTextField: {
    width:'100%',
    position: 'absolute',
    height:'100%',
  },
  cost: {
    height: '100%',
    lineHeight: 100,
    fontSize:32,
    fontWeight:'bold',
    textAlign: 'center',
  },
  costField: {
    width:'100%',
    height:'100%',
    backgroundColor:'transparent',
    color:'transparent',
    fontSize:56,
    textAlign:'center',
  },
  margins: {
    flexDirection:'column',
    width:'80%',
  },
  costLabel: {
    fontSize:16,
  }
}

class App extends React.Component<{}> {
  state = { cost: '' }

  cost = () => parseFloat( this.state.cost.length > 0 ? this.state.cost : 0 )

  render = () =>
    <FormattedWrapper locale="en" currency="USD">
      <View style={style.stackChildrenVertically}>
        <View style={style.margins}>

          <Text style={style.costLabel}>Cost</Text>
          <View style={style.heightConstraint}>
            <View style={style.showFormattedCurrencyUnderInputTextField}>
              <FormattedCurrency value={this.cost()} currency="USD" style={style.cost}/>
            </View>
            <TextInput style={style.costField}
              testID="Cost Value"
              selectionColor="transparent"
              clearTextOnFocus={true}
              keyboardType="decimal-pad"
              returnKeyType="done"
              onChangeText={(cost) => this.setState({ cost }) }
            />
          </View>

        </View>
      </View>
    </FormattedWrapper>
}

export default App

const TodayWidget = () =>
  <View>
    <Text>
      Gainz Go Here
      { __DEV__ && <DevMenu/> }
    </Text>
  </View>

AppRegistry.registerComponent('TodayWidgetExtension', () => TodayWidget)
