/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../Config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.cont}>
          <Image source={image} style={styles.img} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  cont: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: '500',
    color: colors.black,
  },
  subtitle: {
    color: colors.medium,
    fontSize: 15,
  },
});
