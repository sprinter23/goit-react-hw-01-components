import PropTypes from 'prop-types';
import {
  Section,
  StatTitle,
  StatList,
  Item,
  Label,
  Percent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percent>{percentage}%</Percent>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
