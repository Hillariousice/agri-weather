import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = (props: any) =>{
    const { iconName, textBody, iconColor, textBodyStyles} = props
return(
    <View style={styles.con}>
      <Feather name={iconName} size={30} color={iconColor} />
      <Text style={[styles.textTheme,textBodyStyles]}>{textBody}</Text>
    </View>
)
}
const styles= StyleSheet.create({
 con:{
    flex : 1,
    alignItems: 'center',
 },
 textTheme: {
    fontWeight: 'bold',
    color: 'white',
 }
})
export default IconText