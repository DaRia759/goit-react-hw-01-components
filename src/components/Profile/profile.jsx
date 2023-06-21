import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={css.userCard}>
            <div className={css.userDescription}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.userAvatar}
                />
                <p className={css.userName}>{username}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>

            <ul className={css.userStats}>
                <li>
                    <span classame={css.userLabel}>Followers</span>
                    <span className={css.userQuantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={css.userLabel}>Views</span>
                    <span className={css.userQuantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={css.userLabel}>Likes</span>
                    <span className={css.userQuantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

export default Profile;