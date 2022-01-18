import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList/FriendList';
import friends from '../data/friends.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import transactions from '../data/transactions.json';
import { Container } from './App.styled';
import PropTypes from "prop-types";






export const App = () => {
    return (<Container>
       
                <Profile user={user} />
                <Statistics title="Upload stats" statistics={data} />
                <FriendList friends={friends} />
                <TransactionHistory items={transactions} />
            </Container> 
    );
};


Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};