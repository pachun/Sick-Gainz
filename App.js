import React from 'react'
import {
  AppRegistry,
  Platform,
  View,
} from 'react-native'
import { FormattedWrapper } from 'react-native-globalize'
import { DevMenu } from 'react-native-today-widget'

import LargeCurrencyLabel from 'SickGainz/components/LargeCurrencyLabel'

const style = {
  stackChildrenVertically: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:100,
    width:'100%',
  },
  margins: {
    width:'80%',
  },
}

class App extends React.Component<{}> {
  state = { cost: '' }

  cost = () => parseFloat( this.state.cost.length > 0 ? this.state.cost : 0 )
  onUpdateCost = cost => this.setState({ cost })

  render = () =>
    <FormattedWrapper locale="en" currency="USD">
      <View style={style.stackChildrenVertically}>
        <View style={style.margins}>
          <LargeCurrencyLabel label="Cost" amount={this.cost()} onUpdateAmount={this.onUpdateCost}/>
          {/* <LargeCurrencyLabel label="Assets" amount={0} /> */}
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
