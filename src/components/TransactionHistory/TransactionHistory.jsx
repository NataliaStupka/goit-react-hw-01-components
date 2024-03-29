import { Table } from './TransactionHistory.styled';
import PropTypes from 'prop-types';


export const TransactionHistory = ({items}) => {
    return (
        <Table>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                   <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>  
               ))}
            </tbody>
        </Table>
        
    )
}



 // прописать тип пропсов
TransactionHistory.propTypes = {
    TransactionHistory: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })),
}