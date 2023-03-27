import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import AppContent from "../../components/AppContent";
import { Margin } from "../../style";

export default function Main() {
  return (
    <AppContent>
      <View
        style={{
          flex: 1,
          marginHorizontal: -Margin,
        }}
      >
        <WebView
          source={{ uri: "https://google.com" }}
          style={StyleSheet.absoluteFill}
        />
      </View>
    </AppContent>
  );
}
