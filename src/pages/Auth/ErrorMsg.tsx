import { memo } from "react";
import { Pallet, Window } from "../../constants";
import { Margin } from "../../style";
import { P } from "../../style/text/P";

interface IErrorMsg {
  authError?: string | null;
}

export default memo(function ErrorMsg({ authError }: IErrorMsg) {
  if (!authError) return null;

  return (
    <P
      style={{
        position: "absolute",
        bottom: -50,
        textAlign: "center",
        maxWidth: Window.width - Margin * 2,
        alignSelf: "center",
        color: Pallet.Red,
      }}
    >
      {authError}
    </P>
  );
});
