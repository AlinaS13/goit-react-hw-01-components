import PropTypes from 'prop-types';
import getRandomHexColor from './randomColor';
import {
  StatisticsSection,
  Title,
  Label,
  StatisticsList,
  StatisticsItem,
  Percentage,
} from './Statistics.styled';

const Statistics = data => {
  return (
    <StatisticsSection>
      {data.title && <Title>{data.title}</Title>}
      <StatisticsList>
        {data.stats.map(item => (
          <StatisticsItem color={getRandomHexColor()} key={item.id}>
            <Label>{item.label} </Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
