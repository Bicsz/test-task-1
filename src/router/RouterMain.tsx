import { createStackNavigator } from "@react-navigation/stack";

import Main from "../pages/Main";
import HeaderLeft from "./Header/HeaderLeft";
import HeaderRight from "./Header/HeaderRight";
import IsAuth from "./IsAuth";

const Stack = createStackNavigator();

export default function RouterMain() {
  return (
    <IsAuth>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerLeft: (props) => <HeaderLeft />,
          headerRight: (props) => <HeaderRight />,
        }}
      >
        {Object.keys(Router).map((key) => (
          <Stack.Screen
            name={key}
            component={Router[key].view}
            options={Router[key].options}
          />
        ))}
      </Stack.Navigator>
    </IsAuth>
  );
}

const Router: any = {
  Main: {
    view: (props: any) => <Main {...props} />,
    options: {
      title: "Главная",
    },
  },
};
