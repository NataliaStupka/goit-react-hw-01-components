import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList/FriendList';
import friends from '../data/friends.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import transactions from '../data/transactions.json';
import { Container } from './App.styled';






export const App = () => {
    return (<Container>
       
                <Profile user={user} />
                <Statistics title="Upload stats" statistics={data} />
                <FriendList friends={friends} />
                <TransactionHistory items={transactions} />
            </Container> 
    );
};
