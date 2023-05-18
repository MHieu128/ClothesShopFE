import {  Layout, Menu, theme, Anchor } from 'antd';
import HeaderMenu from './components/HeaderMenu'

const { Header, Footer, Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header>
        <div className="demo-logo" />
        <HeaderMenu/>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 800,
            background: colorBgContainer,
          }}
        >
          <h1>Welcome to dev nha lam!</h1>
        </div>
      </Content>

      <Footer style={{textAlign: 'center'}}>
        Copyright ©2023 Created by NF
      </Footer>
    </Layout>
  );
};

export default App