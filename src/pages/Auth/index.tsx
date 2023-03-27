import { memo } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import AppContent from "../../components/AppContent";
import { Pallet, Window } from "../../constants";
import Content from "./Content";

export default memo(function Auth() {
  return (
    <View
      style={{
        backgroundColor: Pallet.LightBlue,
        flex: 1,
      }}
    >
      <AppContent>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            flex: 1,
          }}
        >
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                flex: 1,
              }}
              contentContainerStyle={{
                paddingBottom: Window.height * 0.2,
              }}
            >
              <View
                style={{
                  marginTop: Window.height * 0.2,
                  width: Window.width * 0.8,
                  maxWidth: 290,
                  flexDirection: "column",
                }}
              >
                <Content />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </AppContent>
    </View>
  );
});
