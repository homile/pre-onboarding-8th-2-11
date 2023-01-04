import styled from 'styled-components';
import { IssueType } from '../CardList/CardList';

interface PropsType {
  issue: IssueType;
}

const CardItem = (props: PropsType) => {
  return (
    <CardContent>
      <span>{props.issue.title}</span>
    </CardContent>
  );
};

export default CardItem;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
  margin: 4px 15px;
`;
