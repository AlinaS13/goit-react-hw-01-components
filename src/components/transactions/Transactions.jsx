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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
