import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const RowText = (props: any) =>{
    const {messageOne, messageTwo, messageThree, conStyle, messageOneStyle, messageTwoStyle, messageThreeStylr} = props
  
return(
    <View style={conStyle}>
            <Text style={messageOneStyle}>{messageOne}</Text>
            <Text style={messageTwoStyle}>{messageTwo}</Text>
            <Text style={messageThreeStylr}>{messageThree}</Text>
            </View>
)
}

export default RowText