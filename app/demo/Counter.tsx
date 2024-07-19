import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Counter =()=>{
    const [count, setCount] = useState<number>(0)
    useEffect(()=>{
        console.log(`count:${count}`)
        return () =>{
            console.log('useeffect cleanup')
        }
    },[count]) 
    return (
        <View style={styles.con}>
            <Text style={styles.title}>{`count:${count}`}</Text>
            <Button color={'red'} title={'Increase'} onPress={()=>{setCount(count+1);}}/>
            <Button color={'blue'} title={'Decrease'} onPress={()=>{setCount(count - 1);}}/>
        </View>
    )
    
}
const styles = StyleSheet.create({
con:{
    flex: 1,
    backgroundColor: 'orange'
},
title:{
    alignSelf: 'center',
    fontSize: 20,
    marginTop:20
}
})
export default Counter