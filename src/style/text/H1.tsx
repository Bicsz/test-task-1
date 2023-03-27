import { ITextProps } from ".";
import { P } from "./P";

export function H1(props: ITextProps) {
  return (
    <P
      {...props}
      style={{
        fontSize: 18,
        fontWeight: "500",
        ...props.style,
      }}
    >
      {props.children}
    </P>
  );
}
