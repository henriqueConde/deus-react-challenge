import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  isSecondary?: boolean;
  as?: React.ElementType;
  icon?: JSX.Element;
} & ButtonTypes;

const Button = ({
  children,
  size = 'large',
  fullWidth = false,
  disabled = false,
  isSecondary = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      disabled={disabled}
      isSecondary={isSecondary}
      fullWidth={fullWidth}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default Button;
