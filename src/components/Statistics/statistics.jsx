import PropTypes from 'prop-types';
import css from './Satistics.module.css';

function Statistics({title, data}) {
    return (
        <section className={css.statistics}>
            {title ? <h2 className={css.stisticTitle}>Upload stats</h2> : ''}

            <ul className={css.statList}>
                {data.map(item => (
                <li className={css.statiscticItem} key={item.id}>
                    <span className={css.statsticLabel}>{item.label}</span>
                    <span className={css.statisticPercentage}>{item.percentage}</span>
                </li>))}
            </ul>
        </section>
    );
}
Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
};

export default Statistics;