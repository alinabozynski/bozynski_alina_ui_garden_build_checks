import { ChangeEventHandler } from "react";

export interface TextProps {
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  borderColor?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
