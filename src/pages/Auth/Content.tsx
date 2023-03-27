import { memo, useCallback, useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import DataBase from "../../backend";

import { Pallet } from "../../constants";
import { saveAuth } from "../../redux/redusers/userReducer";
import { Margin } from "../../style";
import Button from "../../style/Button";
import Input from "../../style/Input";
import { H1 } from "../../style/text/H1";
import ErrorMsg from "./ErrorMsg";

export default memo(function Content() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const LogIn = useCallback(() => {
    setAuthError(null);

    //Авторизация руками
    setLoading(true);
    DataBase.checkLoginPassword(login, password)
      .then((result) => {
        dispatch(
          saveAuth({
            login,
            password,
            id: result.id,
            name: result.name,
          })
        );
      })
      .catch((e) => {
        console.error("checkLoginPassword", e);
        setAuthError("Неверный логин или пароль");
      })
      .finally(() => setLoading(false));
  }, [login, password]);

  return (
    <>
      <View
        style={{
          borderRadius: 16,
          padding: 20,
          backgroundColor: Pallet.White,
        }}
      >
        <H1>Вход в приложение</H1>
        <Input
          label="Логин"
          onChange={setLogin}
          style={{
            marginTop: Margin,
          }}
        />
        <Input
          label="Пароль"
          type="password"
          onChange={setPassword}
          style={{
            marginTop: Margin,
          }}
        />

        <Button
          loading={loading}
          style={{
            marginTop: Margin,
          }}
          onPress={LogIn}
        >
          Вход
        </Button>
      </View>
      <ErrorMsg authError={authError} />
    </>
  );
});
