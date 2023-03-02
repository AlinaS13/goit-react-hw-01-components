import PropTypes from 'prop-types';
import {
  Transaction,
  TransactionTitleHead,
  TransactionTitleList,
  TransactionTitleItem,
  TransactionBody,
  TransactionList,
  TransactionItem,
} from './Transactions.styled';

const TransactionHistory = props => {
  return (
    <Transaction>
      <TransactionTitleHead>
        <TransactionTitleList>
          <TransactionTitleItem>Type</TransactionTitleItem>
          <TransactionTitleItem>Type</TransactionTitleItem>
          <TransactionTitleItem>Amount</TransactionTitleItem>
        </TransactionTitleList>
      </TransactionTitleHead>
      <TransactionBody>
        {props.items.map(item => (
          <TransactionList key={item.id}>
            <TransactionItem>{item.type}</TransactionItem>
            <TransactionItem>{item.amount}</TransactionItem>
            <TransactionItem>{item.currency}</TransactionItem>
          </TransactionList>
        ))}
      </TransactionBody>
    </Transaction>
  );
};

Transaction.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default TransactionHistory;
