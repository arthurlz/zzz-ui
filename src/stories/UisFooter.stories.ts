// src/components/UisFooter.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import UisFooter, { FooterProps } from '../components/UisFooter';

const meta: Meta<FooterProps> = {
  title: 'Components/UisFooter',
  component: UisFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    links: {
      control: 'object',
      description: 'フッターに表示するリンクのリスト',
    },
    copyrightText: {
      control: 'text',
      description: '著作権テキスト',
    },
  },
};

export default meta;
type Story = StoryObj<FooterProps>;

export const WithLinks: Story = {
  name: 'リンク付き',
  args: {
    links: [
      { label: 'ホーム', href: '/' },
      { label: '会社概要', href: '/about' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
    copyrightText: '© 2025 My Company',
  },
};

export const WithoutLinks: Story = {
  name: 'リンクなし',
  args: {
    links: [],
    copyrightText: '© 2025 My Company',
  },
};
