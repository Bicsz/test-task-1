import ScalableText from "react-native-text";
import { ITextProps } from ".";
import { Pallet } from "../../constants";

type ISubstr = {
  numberOfLines?: number;
  flex?: number;
  ellipsizeMode?: "tail";
};

export function P(props: ITextProps) {
  let substr: ISubstr = {};

  if (!!props.substr === true)
    substr = {
      numberOfLines: 1,
      flex: 1,
      ellipsizeMode: "tail",
    };

  return (
    <ScalableText
      numberOfLines={substr?.numberOfLines || props.numberOfLines}
      style={{
        fontSize: 14,
        fontWeight: "300",
        color: Pallet.Black,
        ...substr,
        ...props.style,
      }}
    >
      {props.children}
    </ScalableText>
  );
}
