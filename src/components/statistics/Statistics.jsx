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

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(item => (
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
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
