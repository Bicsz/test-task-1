import { ITextProps } from ".";
import { Pallet } from "../../constants";
import { P } from "./P";

export function Small(props: ITextProps) {
  return (
    <P
      {...props}
      style={{
        fontSize: 12,
        color: Pallet.Gray,
        fontWeight: "300",
        ...props.style,
      }}
    >
      {props.children}
    </P>
  );
}
