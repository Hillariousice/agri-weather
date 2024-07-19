import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IconTextProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  textBody: string;
  iconColor?: string;
  textBodyStyles?: object;
}

const IconText: React.FC<IconTextProps> = ({ iconName, textBody, iconColor = 'black', textBodyStyles }) => {
  return (
    <View style={styles.con}>
      <Feather name={iconName} size={30} color={iconColor} />
      <Text style={[styles.textTheme, textBodyStyles]}>{textBody}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    flex: 1,
    alignItems: 'center',
  },
  textTheme: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default IconText;
