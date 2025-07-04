import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MuiButtonProps {
  /**
   * 是否使用主色调 (primary) 以外的自定义样式
   */
  variantType?: 'primary' | 'secondary';
}

export const UisButton: React.FC<ButtonProps> = ({
  variantType = 'primary',
  ...props
}) => {
  // 你也可以在这里注入主题、样式覆盖等
  const color = variantType === 'primary' ? 'primary' : 'secondary';
  return <MuiButton color={color} {...props} />;
};
