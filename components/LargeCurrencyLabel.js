import React from 'react'
import {
  Text,
  TextInput,
  View,
} from 'react-native'
import { FormattedCurrency } from 'react-native-globalize'

const style = {
  heightConstraint: {
    width:'100%',
    height:100,
  },
  showFormattedCurrencyUnderTransparentField: {
    width:'100%',
    position: 'absolute',
    height:'100%',
  },
  amount: {
    height: '100%',
    lineHeight: 100,
    fontSize:32,
    fontWeight:'bold',
    textAlign: 'center',
  },
  field: {
    width:'100%',
    height:'100%',
    backgroundColor:'transparent',
    color:'transparent',
    fontSize:56,
    textAlign:'center',
  },
  label: {
    fontSize:16,
  },
}

const LargeCurrencyLabel = ({ label, amount, onUpdateAmount }) =>
  <View>
    <Text style={style.label}>{label}</Text>
    <View style={style.heightConstraint}>
      <View style={style.showFormattedCurrencyUnderTransparentField}>
        <FormattedCurrency value={amount} currency="USD" style={style.amount}/>
      </View>
      { onUpdateAmount &&
        <TextInput style={style.field}
          testID={`${label} Value`}
          selectionColor="transparent"
          clearTextOnFocus={true}
          keyboardType="decimal-pad"
          returnKeyType="done"
          onChangeText={onUpdateAmount}
        />
      }
    </View>
  </View>

export default LargeCurrencyLabel
