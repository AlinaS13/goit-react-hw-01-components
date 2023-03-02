import styled from 'styled-components';

export const StatisticsSection = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 360px;
  box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
`;
export const Label = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-weight: 500;
`;

export const StatisticsList = styled.ul`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const StatisticsItem = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.color};
`;
