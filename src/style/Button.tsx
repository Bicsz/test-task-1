import { memo } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Pallet } from "../constants";
import { P } from "./text/P";

interface IButton {
  children?: string | JSX.Element;
  style?: ViewStyle;
  loading?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
}

export default memo(function Button({
  children,
  style,
  loading,
  onLongPress,
  onPress,
}: IButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      onLongPress={onLongPress}
      style={style}
      disabled={loading === true}
    >
      <View
        style={{
          opacity: loading ? 0.8 : 1,
          backgroundColor: Pallet.Accent,
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {typeof children == "string" ? (
          <P
            style={{
              flex: 1,
              alignSelf: "center",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            {children}
          </P>
        ) : (
          children
        )}
        {loading && (
          <ActivityIndicator
            style={{
              position: "absolute",
              right: 10,
            }}
            size="small"
            color={Pallet.White}
          />
        )}
      </View>
    </TouchableOpacity>
  );
});
