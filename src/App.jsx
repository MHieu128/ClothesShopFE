import HeaderMenu from './components/HeaderMenu'
import { Outlet } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header>
        <Row>
          <Col span={8}>
            <div className="demo-logo" style={{color:'#fff'}}> NF logo</div>
          </Col>
          <Col span={8} offset={8}>
            <HeaderMenu />
          </Col>
        </Row>
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
          <Outlet />
        </div>
      </Content>

      <Footer style={{textAlign: 'center'}}>
        Copyright ©2023 Created by NF
      </Footer>
    </Layout>
  );
};

export default App