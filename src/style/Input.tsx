import { memo, useCallback, useLayoutEffect, useState } from "react";
import { TextInput, View, ViewStyle } from "react-native";
import { Pallet } from "../constants";
import { Small } from "./text/Small";

interface IInput {
  label?: string;
  value?: string;
  style?: ViewStyle;
  onChange?: (arg0: string) => void;
  type?: "password" | "emailAddress" | "none";
}

export default memo(function Input({
  label,
  value,
  onChange,
  style,
  type,
}: IInput) {
  const [text, setText] = useState(value || "");

  const onChangeText = useCallback(
    (newText: string) => {
      try {
        if (!!onChange) onChange(newText);
      } catch (e) {
        console.error("Input onChange error", e);
      }
      setText(newText);
    },
    [onChange]
  );

  useLayoutEffect(() => {
    if (value != text) setText(value || "");
  }, [value]);

  return (
    <View style={style}>
      {!!label && (
        <Small
          style={{
            marginBottom: 5,
          }}
        >
          {label}
        </Small>
      )}
      <View
        style={{
          backgroundColor: Pallet.LightGray,
          borderRadius: 10,
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            padding: 15,
            paddingHorizontal: 10,
          }}
          secureTextEntry={type == "password"}
          textContentType={type}
          defaultValue={value}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
});
