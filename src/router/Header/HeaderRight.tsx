import { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import ExitIcon from "../../../assets/svg/ExitIcon";
import { exitAuth } from "../../redux/redusers/userReducer";
import { Margin } from "../../style";

export default function HeaderRight() {
  const dispatch = useDispatch();
  const exitClick = useCallback(() => dispatch(exitAuth()), []);
  return (
    <TouchableOpacity
      onPress={exitClick}
      style={{
        marginRight: Margin,
      }}
    >
      <ExitIcon />
    </TouchableOpacity>
  );
}
