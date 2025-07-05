import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MuiButtonProps {
  variantType?: 'primary' | 'secondary';
}

export const UisButton: React.FC<ButtonProps> = ({
  variantType = 'primary',
  ...props
}) => {
  const color = variantType === 'primary' ? 'primary' : 'secondary';
  return <MuiButton color={color} {...props} />;
};
