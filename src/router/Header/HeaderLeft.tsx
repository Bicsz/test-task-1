import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Margin } from "../../style";
import { Small } from "../../style/text/Small";

export default function HeaderLeft() {
  const selfUser = useSelector((store) => (store as RootState).userData);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Small
        substr={true}
        style={{
          marginLeft: Margin,
        }}
      >
        {selfUser.name || ""}
      </Small>
    </View>
  );
}
