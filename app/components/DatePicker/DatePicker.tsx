import React, { useState } from 'react';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import DatePickerInput from 'react-native-date-picker';

import { CQText } from "app/components/Text/CQText"
import { palette } from "app/theme/palette"

type DatePickerProps = {
  value: Date;
  label?: string;
  labelText?: string;
  labelStyle?: TextStyle;
  labelContainerStyle?: ViewStyle;
  onDateChange?: (date: Date) => void;
  validationError?: string;
  isButtonPreset?: boolean;
  textStyle?: TextStyle;
  dateSeparator?: string;
  containerStyle?: ViewStyle;
  datePickerStyle?: ViewStyle;
  type: 'date' | 'datetime' | 'time';
};

const LABEL_TEXT_STYLE: TextStyle = { textTransform: 'uppercase', fontSize: 13 };
const LABEL_CONTAINER_STYLE: ViewStyle = { marginBottom: 10 };

const DATE_PICKER_CONTAINER_STYLE = { flex: 1 };
const BUTTON_TEXT_STYLE: TextStyle = { fontSize: 14 };
const BUTTON_STYLE: ViewStyle = { marginTop: 15 };

export function DatePickerField(props: DatePickerProps) {
  const {
    value,
    label,
    labelText,
    labelStyle: labelStyleOverride,
    labelContainerStyle: labelContainerStyleOverride,
    onDateChange,
    validationError,
    textStyle,
    isButtonPreset = true,
    dateSeparator,
    containerStyle,
    datePickerStyle,
    type,
    ...rest
  } = props;
  const [open, setOpen] = useState(false);
  const isoDate = value && value.toISOString();

  const dateParts = isoDate.split('T')[0].split('-');
  const timeParts = isoDate.split('T')[1].split(':');

  let date =
    type === 'date' ? `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}` : `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}, ${timeParts[0]}:${timeParts[1]}`;

  date = date.split('-').join(dateSeparator);
  return (
    <View style={[DATE_PICKER_CONTAINER_STYLE, containerStyle]}>
      <View style={[LABEL_CONTAINER_STYLE, labelContainerStyleOverride]}>
        <CQText text={labelText} style={[LABEL_TEXT_STYLE, labelStyleOverride]} />
        {isButtonPreset ? (
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={BUTTON_STYLE}
          >
            <CQText text={date || "Pick a date"} style={BUTTON_TEXT_STYLE} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setOpen(true)}>
            <CQText text={date || "Pick a date"} style={textStyle} />
          </TouchableOpacity>
        )}
      </View>
      <DatePickerInput
        modal
        locale='fr-FR'
        open={open}
        date={value}
        title={"Pick a date"}
        confirmText={"Submit"}
        cancelText={"Cancel"}
        onConfirm={selectedDate => {
          setOpen(false);
          onDateChange && onDateChange(selectedDate) ;

        }}
        onCancel={() => setOpen(false)}
        textColor={palette.textClassicColor}
        mode={type}
        style={[datePickerStyle]}
        {...rest}
      />
      {validationError && (
        <View>
          <CQText text={validationError} />
        </View>
      )}
    </View>
  );
}
