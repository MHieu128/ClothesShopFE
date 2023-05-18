import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: (
      <a href="/cart" target="_blank" rel="noopener noreferrer" >
        <ShoppingCartOutlined />
        &nbsp; Cart
      </a>
    ),
    key: 'alipay',
  },
  {
    label: (
      <a href="/login" target="_blank" rel="noopener noreferrer">
        <UserOutlined />
        &nbsp; Login
      </a>
    ),
    key: 'alipay',
  },
];
const HeaderMenu = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default HeaderMenu;