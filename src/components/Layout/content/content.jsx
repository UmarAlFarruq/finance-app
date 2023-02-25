import { Outlet } from 'react-router-dom';
import { Layout } from "antd";
import { Container } from "./style";
import AnimatedPage from '../../Generic/AnimatedPage';

const { Content } = Layout
const animateData = {
    initial: { opacity: 0,y:200  },
    animate: { opacity: 1, y: 0, scale: [0.2, 1], },
    exit: { opacity: 0, y:200, scale: [1, 0.2],  },
}

const CotnetntComponent = () => {
    return (
        <Content
            style={{
                minHeight: '85vh'
            }}
        >
            <AnimatedPage data={animateData} >
                <Container>
                    <Outlet />
                </Container>
            </AnimatedPage>
        </Content >
    );
}

export default CotnetntComponent;