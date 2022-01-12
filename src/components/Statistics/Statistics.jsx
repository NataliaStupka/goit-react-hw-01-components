import {Section, Title, Container, StatList, List} from './Statistics.styled.js'
import PropTypes from 'prop-types';



export const Statistics = ({title, statistics}) => {
    return (
<Section >
    {title && <Title>{title}</Title>}
            <Container>
                {statistics.map((statistic) => (
                <StatList key={statistic.id} >
                    <List >
                        <span class="label">{ statistic.label}</span>
                        <span class="percentage"> {statistic.percentage}</span>
                    </List>
                </StatList>

        ))}
            </Container>
       </Section> 
    )
    
}


Statistics.propTypes = {
    title: PropTypes.string,
}






