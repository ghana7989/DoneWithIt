import { Platform } from 'react-native';
import { default as colors } from './colors';

const platformDependantStyles = Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir"
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto"
  },
})
export const TEXT = {
  color: colors.darkGrey,
  ...platformDependantStyles
}