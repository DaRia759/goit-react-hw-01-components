import css from '../FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.friendListItem}>
            <ul>
                <li className={css.friendItem}>
                    <span className={css.friendStatus}>{isOnline ? '🟢' : '🔴'}</span>
                <img className={css.friendAvatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.friendName}>{name}</p>
                </li>
            </ul>
            
        </div>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
