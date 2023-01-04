import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { IssueType } from '../../components/Card/CardList/CardList';

interface PropsType {
  issue: IssueType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const IssueDetail = (props: PropsType) => {
  const issueData = JSON.parse(localStorage.getItem('issueDatas') || '[]');

  const [content, setContent] = useState({
    id: props.issue.id,
    title: `${props.issue.title}`,
    desc: `${props.issue.desc}`,
    date: `${props.issue.date}`,
    issueState: `${props.issue.issueState}`,
    manager: [...props.issue.manager],
  });

  const managerCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setContent({ ...content, manager: [...content.manager, e.target.value] });
    }
    if (!e.target.checked) {
      setContent({
        ...content,
        manager: [...content.manager.filter(el => el !== e.target.value)],
      });
    }
  };

  const submitHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // 현재 클릭된 id와 가져온 id의 값이 같은 것을 추출한다.
    const prevIssue = issueData.filter((el: IssueType) => el.id === content.id)[0];
    // 현재 변경된 값과 가져온 값을 합친다.
    const changeIssue = { ...prevIssue, ...content };
    // 로컬스토리지에서 가져온 값을 변경한다..
    const prevIdx = issueData.findIndex((el: IssueType) => el.id === content.id);
    issueData[prevIdx] = changeIssue;

    localStorage.setItem('issueDatas', JSON.stringify([...issueData]));
    props.setIsOpen(false);
  };

  const deleteHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    localStorage.setItem(
      'issueDatas',
      JSON.stringify([...issueData.filter((el: IssueType) => el.id !== content.id)])
    );

    props.setIsOpen(false);
  };

  return (
    <Container onClick={e => e.stopPropagation()}>
      <span>
        제목:{' '}
        <input
          type="text"
          defaultValue={content.title}
          onChange={e => setContent({ ...content, title: e.target.value })}
        />
      </span>
      <span>마감일: {content.date}</span>
      <span>
        이슈상태:{' '}
        <select
          defaultValue={content.issueState}
          onChange={e => setContent({ ...content, issueState: e.target.value })}
        >
          <option>할 일</option>
          <option>진행 중</option>
          <option>완료</option>
        </select>
      </span>
      <span>
        설명:{' '}
        <textarea
          defaultValue={content.desc}
          onChange={e => setContent({ ...content, desc: e.target.value })}
        />
      </span>
      <span>
        담당자:
        <input
          type="checkbox"
          checked={content.manager.includes('조민우')}
          value="조민우"
          onChange={e => managerCheck(e)}
        />
        <label>조민우</label>
        <input
          type="checkbox"
          checked={content.manager.includes('조민우2')}
          value="조민우2"
          onChange={e => managerCheck(e)}
        />
        <label>조민우2</label>
      </span>
      <button onClick={e => submitHandle(e)}>저장</button>
      <button onClick={e => deleteHandle(e)}>삭제</button>
    </Container>
  );
};

export default IssueDetail;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 100;
  top: 0;
  right: -100px;
  height: 200px;
  padding: 10px;
  background-color: #fefefe;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
  cursor: default;

  span {
    margin-bottom: 4px;
  }
`;
