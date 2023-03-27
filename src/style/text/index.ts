import { TextStyle, ViewStyle } from "react-native/types";

export interface ITextProps extends ViewStyle {
  /** Стиль объекта */
  style?: TextStyle | undefined;
  /** Контент */
  children?: string;
  /** Кол-во строк при обрезке (1 поумолчанию) */
  numberOfLines?: number | undefined;
  /** Обрезаем строку? */
  substr?: boolean | undefined;
}
