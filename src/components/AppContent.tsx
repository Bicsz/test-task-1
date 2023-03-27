import { SafeAreaView, View } from "react-native";
import { Margin } from "../style";

interface IAppScrollView {
  children?: JSX.Element;
}

export default function AppContent({ children }: IAppScrollView) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          paddingHorizontal: Margin,
          flex: 1,
          flexDirection: "column",
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
