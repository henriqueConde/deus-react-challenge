import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  isSecondary?: boolean;
  danger?: boolean;
  as?: React.ElementType;
  icon?: JSX.Element;
} & ButtonTypes;

const Button = ({
  children,
  size = 'large',
  fullWidth = false,
  disabled = false,
  isSecondary = false,
  danger = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      disabled={disabled}
      isSecondary={isSecondary}
      fullWidth={fullWidth}
      danger={danger}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default Button;
