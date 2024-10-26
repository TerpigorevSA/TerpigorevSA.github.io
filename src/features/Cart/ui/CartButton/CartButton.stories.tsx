import type { Meta, StoryObj } from '@storybook/react';
import CartButton, { CartButtonProps } from './CartButton';
import React, { useState } from 'react';
import '../../../../app/App.css';


const Template = (args: CartButtonProps) => {
  const [count, setCount] = useState(args.count);
  console.log(count);
  const onInputChange = (value: number) => setCount(value);

  return (
    <div style={{ height: '30px', width: '100px' }}>
      <CartButton {...args} count={count} onCountChange={onInputChange} />
    </div>
  );
};


const meta: Meta<typeof Template> = {
  title: 'Features/CartButton',
  component: Template,
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutProductCartButton:Story={
  args:{
    count:0,
    max:undefined,
    disabled:false,
  }
}

export const WithProductCartButton:Story={
  args:{
    count:5,
    max:undefined,
    disabled:false,
  }
}


export const LimitedCartButton= Template.bind({});
LimitedCartButton.args = {
  count: 3,
  min: 0,
  max: 5,
  disabled: false,
};