import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableData,
  TypeColumn,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableData key={id}>
            <TypeColumn>{type}</TypeColumn>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableData>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit']),
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
