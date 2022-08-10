import {TextProps} from '../../input/BaseText/TextProps';

export type LabelType = TextProps & {
  required?: boolean;
  children: string;
};
