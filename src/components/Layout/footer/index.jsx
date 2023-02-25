
// import { Container } from "./style";
import { Layout } from 'antd';
const { Footer } = Layout;
const FooterBase = () => {
  return (
    <Footer
      theme="dark"
      style={{
        textAlign: 'center',
        minHeight: '46px',
        maxHeight: '46px',
      }}
    >
      Finance ©2022 Created by Software Systems Programmer: Farrux
    </Footer>
  );
}
export default FooterBase;