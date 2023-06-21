import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <ul>
                    <li className={css.friendItem} key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                    </li>
                </ul>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;
