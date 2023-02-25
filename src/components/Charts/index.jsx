import { AreaChart,Area, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import { Container, Info, ChartWrapper } from "./style";
import { data } from './data';

const Charts = () => {
  return (
    <Container>
      <Info>
        Inputlar
      </Info>
      <ChartWrapper>
        {/* hbdehbd */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="daromad"  stroke="blue" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </ChartWrapper>
    </Container>
  );
}
export default Charts;