import React, { useState } from 'react';
import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom'
import { sidebar } from '../../../utils/sidebar';
import { WrapperLogo } from './style';

const { Sider } = Layout;


const SiderBase = () => {
  // const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      breakpoint='xxl'
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      collapsedWidth="60px"
    >
      <WrapperLogo >
        {collapsed ? null : <span className='subTitle'
          style={{ color: 'white', padding: '6px', fontSize: 20, }}
        >
          Software-Systems
        </span>}
      </WrapperLogo>
      <Menu
        theme="dark"
        defaultSelectedKeys={['']}
        mode="inline"
      >
        {
          sidebar.map(({ key, path, icon, label }) => {
            return (
              <Menu.Item key={key} icon={icon} >
                <Link to={path} >{label}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Sider>
  );
}
export default SiderBase;