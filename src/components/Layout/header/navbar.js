import { Col, Menu, Popover } from 'antd';
import { Link, } from 'react-router-dom';
import AnimatedPagePage from '../../Generic/AnimatedPage';
import { Wrapper, MenuIcon, RowStytle, PopoverStyle } from './style';

const animateData = {
    initial: { opacity: 0, x: 400, },
    animate: { opacity: 1, x: 0, },
    exit: { opacity: 0, x: 400, },
}

const Navbar = ({ data }) => {
    return (
        <RowStytle>
            <Col span={23} >
                <AnimatedPagePage data={animateData} >
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[""]}
                    >
                        {data?.map(({ path, key, label }) => {
                            return (
                                <Menu.Item key={key} >
                                    <Link to={path} >{label}</Link>
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </AnimatedPagePage>
            </Col>
            <Col span={1} >
                <Wrapper>
                    <Popover
                        placement="bottomLeft"
                        trigger="click"
                        content={<PopoverStyle>
                            <p>Content</p>
                            <p>Content</p>
                        </PopoverStyle>}
                    >
                        <MenuIcon />
                    </Popover>
                </Wrapper>
            </Col>
        </RowStytle>
    );
}

export default Navbar;