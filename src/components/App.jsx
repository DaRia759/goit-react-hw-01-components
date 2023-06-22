import "../components/App.module.css";
import Profile from './Profile/Profile';
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from '../json/user.json';
import friends from '../json/friends.json';
import data from '../json/data.json';
import transactions from '../json/transactions.json';

function App() {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className='App'>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
