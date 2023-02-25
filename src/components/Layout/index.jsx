import SiderBase from './sidebar';
import HeaderBase from './header/routes';

import { Layout } from 'antd';
import ContentBase from './content/routes';
import Footer from './footer/routes';

const LayoutPage = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      className='globalWidth'
    >
      <SiderBase />
      <Layout className="site-layout">
        <HeaderBase  />
        <ContentBase />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutPage;