import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendsList/FriendsList';
import TransactionHistory from './transactions/Transactions';
import user from '../data/user.json';
import data from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
