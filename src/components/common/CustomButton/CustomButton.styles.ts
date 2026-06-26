import {StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../../theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: SPACING.lg,
  },

  disabled: {
    opacity: 0.6,
  },

  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});