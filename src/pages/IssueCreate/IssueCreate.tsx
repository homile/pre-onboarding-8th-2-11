import { useState } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface IssueType {
  id: number;
  title: string;
  desc: string;
  date: string;
  issueState: string;
  manager: string[];
}

const IssueCreate = () => {
  const navigate = useNavigate();
  const issueData = JSON.parse(localStorage.getItem('issueDatas') || '[]');

  const [content, setContent] = useState<IssueType>({
    id: issueData.length,
    title: '',
    desc: '',
    date: '',
    issueState: '할 일',
    manager: [],
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

    localStorage.setItem('issueDatas', JSON.stringify([...issueData, content]));
    navigate('/');
  };

  return (
    <CreateContainer>
      <CreateForm>
        <label>제목</label>
        <input type="text" onChange={e => setContent({ ...content, title: e.target.value })} />
        <label>내용</label>
        <textarea onChange={e => setContent({ ...content, desc: e.target.value })} />
        <label>마감일</label>
        <input
          type="datetime-local"
          onChange={e => setContent({ ...content, date: e.target.value })}
        />
        <label>상태</label>
        <select onChange={e => setContent({ ...content, issueState: e.target.value })}>
          <option>할 일</option>
          <option>진행 중</option>
          <option>완료</option>
        </select>
        <span>담당자</span>
        <div>
          <input type="checkbox" value="조민우" onChange={e => managerCheck(e)} />
          <label>조민우</label>
          <input type="checkbox" value="조민우2" onChange={e => managerCheck(e)} />
          <label>조민우2</label>
        </div>
        <button onClick={e => submitHandle(e)}>저장</button>
      </CreateForm>
    </CreateContainer>
  );
};

export default IssueCreate;

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
`;
