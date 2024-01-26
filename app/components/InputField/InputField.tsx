import React from 'react';
import { KeyboardTypeOptions, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { palette } from "app/theme/palette"

interface InputFieldProps {
  text: string;
  error: boolean;
  value: string;
  onChange: ((text: string) => void) & Function;
  errorMessage: string;
  width?: number;
  backgroundColor: string;
  rightRender?: boolean;
  rightText?: string;
  keyboardType?: KeyboardTypeOptions;
}

export const InputField = ({ text, error, value, onChange, errorMessage, width, backgroundColor, rightRender, rightText, keyboardType, }: InputFieldProps) => {
  return (
    <View>
      <TextInput
        keyboardType={keyboardType ?? 'default'}
        autoCapitalize='none'
        label={text}
        textColor={palette.lightPink}
        selectionColor={palette.lightPink}
        value={value}
        onChangeText={onChange}
        right={
          rightRender && (
            <TextInput.Affix
              text={rightText}
              textStyle={{
                fontSize: 16,
                color: palette.lightPink,
                fontFamily: 'Geometria-Bold',
              }}
            />
          )
        }
        style={{
          backgroundColor: backgroundColor,
          borderRadius: 5,
          width: width,
          elevation: 5,
          borderBottomWidth: error ? 2 : 0,
          borderBottomColor: error ? palette.pastelRed : palette.greyDarker,
        }}
        theme={{
          colors: {
            primary: palette.lightPink,
          },
        }}
      />
    </View>
  );
};
