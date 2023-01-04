import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardList from '../../components/Card/CardList/CardList';

const IssueMain = () => {
  return (
    <MainContainer>
      <Link to="/create">+</Link>
      <ListContainer>
        <CardList></CardList>
      </ListContainer>
    </MainContainer>
  );
};

export default IssueMain;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const ListContainer = styled.div`
  display: flex;
`;
