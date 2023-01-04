import { useState } from 'react';
import styled from 'styled-components';
import IssueDetail from '../../../pages/IssueDetail/IssueDetail';
import { IssueType } from '../CardList/CardList';

export interface PropsType {
  issue: IssueType;
}

const CardItem = (props: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CardContent onClick={() => setIsOpen(!isOpen)}>
      <span>{props.issue.title}</span>
      {isOpen && <IssueDetail issue={props.issue} setIsOpen={setIsOpen} />}
    </CardContent>
  );
};

export default CardItem;

const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
  margin: 4px 15px;
  cursor: pointer;
`;
