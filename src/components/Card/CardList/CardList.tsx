import styled from "styled-components";
import IssueHeader from "../../Ui/Header/IssueHeader";
import CardItem from "../CardItem/CardItem";

export interface IssueType {
  id: number;
  title: string;
  desc: string;
  date: string;
  issueState: string;
  manager: string[];
}

const issueStateList = ["할 일", "진행 중", "완료"];

const CardList = () => {
  const data = JSON.parse(localStorage.getItem("issueDatas") || "[]");

  return (
    <CardListContainer>
      {issueStateList.map((el) => {
        return (
          <>
            <CardContainer>
              <IssueHeader title={el} />
              {data.map((issue: IssueType) => {
                if (issue.issueState === el) {
                  return <CardItem key={issue.id} issue={issue} />;
                }
              })}
            </CardContainer>
          </>
        );
      })}
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
