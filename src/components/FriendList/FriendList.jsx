import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendItem from '../FriendListItem/FriendListItem';


function FriendList({friends}) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                <li className={css.friendItem} key={friend.id}>
                    <FriendItem 
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    ></FriendItem>
            </li>
        })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}
export default FriendList;

