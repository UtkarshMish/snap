import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';


export default styles = StyleSheet.create({

  sideContent: {
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",
    padding: 20,
  },
  itemBorder: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.borderColor,
    borderRadius: 10,
    elevation: 100,
  },
  text: {
    fontSize: 20,
  },
  textInfo: {
    fontStyle: "italic",
    fontSize: 18,
    includeFontPadding: true,
  },
});