import PropTypes from 'prop-types';
import css from './Satistics.module.css';

function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title ? <h2 className={css.statisticTitle}>Upload stats</h2> : ''}

            <ul className={css.statList}>
                {stats.map(stat => (
                    <li
                        className={css.statisticItem}
                        key={stat.id}
                        style={{ backgroundColor: generateRandomColor() }}
                    >
                        <span className={css.statisticLabel}>{stat.label}</span>
                        <span className={css.statisticPercentage}>{stat.percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

export default Statistics;
