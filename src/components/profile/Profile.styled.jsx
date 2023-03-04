import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 360px;
  box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  overflow: hidden;
`;

export const UserData = styled.div`
  width: 100%;
  background-color: #ffefde;
  padding-top: 60px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Location = styled.p`
  font-weight: bold;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 3px solid black;
  display: flex;
  justify-content: center;
  background-color: #f97e00;
`;

export const StatElement = styled.li`
  width: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const Span = styled.span`
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
