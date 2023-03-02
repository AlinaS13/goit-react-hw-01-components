import styled from 'styled-components';

export const Transaction = styled.table`
  width: 750px;
  margin: 50px auto;
  box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.5);
`;

export const TransactionTitleHead = styled.thead`
  border-radius: 10px;
`;

export const TransactionTitleList = styled.tr`
  height: 60px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  background-color: #706d97;
`;

export const TransactionTitleItem = styled.th`
  padding: 10px;
`;

export const TransactionBody = styled.tbody`
  color: white;
  font-weight: 400;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 18px;
`;

export const TransactionList = styled.tr`
  &:nth-child(even) {
    background: #e8e6d1;
  }
`;

export const TransactionItem = styled.td`
  padding: 15px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 18px;
  color: #696969;
  text-transform: capitalize;
  text-align: center;
`;
