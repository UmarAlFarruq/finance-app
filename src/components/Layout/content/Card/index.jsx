
import { Container, Icon, Title, WrapperCard } from "./style";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';


const Card = ({ data }) => {
  const navigate = useNavigate();
  
  return (
    <Container className="nocopy"  >
      {
        data?.map(({ label, key, path, icon, color }) => {
          return (
            <WrapperCard key={key}
              onClick={() => navigate(`${path}`)}
            >
              <Icon fill={color}  >{icon || <HomeOutlined />} </Icon>
              <Title>{label}</Title>
            </WrapperCard>
          )
        })
      }
    </Container>
  );
}
export default Card;