import styled from 'styled-components';

export const FriendListItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
`;

export const Status = styled.span`
  margin: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${friends => (friends.status ? 'green' : 'red')};
`;

export const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 25px;
`;
