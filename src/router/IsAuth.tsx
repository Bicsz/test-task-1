import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Auth from "../pages/Auth";
import { RootState } from "../redux/store";

interface IIsAuthProps {
  children?: JSX.Element;
}

export default function IsAuth({ children }: IIsAuthProps): JSX.Element {
  const selfUser = useSelector((store) => (store as RootState).userData);

  if (selfUser.isAuth) return children || <View />;
  else return <Auth />;
}
