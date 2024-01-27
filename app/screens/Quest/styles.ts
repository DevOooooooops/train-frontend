import { full_screen, full_width_and_margin, flex_center } from 'app/styles';
import { palette } from 'app/theme/palette';
import { TextStyle, ViewStyle } from 'app/types';

export const MAIN_CONTAINER: ViewStyle = {
  ...full_screen,
};

export const LEVEL_CONTAINER: ViewStyle = {
  position: 'relative',
  ...full_width_and_margin,
  height: 400,
  backgroundColor: palette.deepPink,
  borderRadius: 10,
  marginTop: 30,
};

export const LEVELS_CONTAINER: ViewStyle = {
  ...full_width_and_margin,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

export const LEVEL_BOX: ViewStyle = {
  ...flex_center,
  width: 100,
  height: 100,
  borderRadius: 10,
  marginTop: 10,
  backgroundColor: palette.deepPink,
};

export const LEVEL_BOX_DISABLED: ViewStyle = {
  ...flex_center,
  width: 100,
  height: 100,
  borderRadius: 10,
  marginTop: 10,
  backgroundColor: palette.greyDarker,
};

export const LEVEL_CIRCLE_CONTAINER: ViewStyle = {
  width: 200,
  height: 200,
  borderRadius: 100,
  backgroundColor: palette.white,
};

export const HEADER: ViewStyle = {
  ...full_width_and_margin,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 10,
};

export const HEADER_TITLE: TextStyle = {
  fontSize: 24,
  color: palette.white,
};
