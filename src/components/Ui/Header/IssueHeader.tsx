import styled from 'styled-components';
type propsType = {
  title: string;
};

const IssueHeader = (props: propsType) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{props.title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default IssueHeader;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
  margin: 0 15px;
`;
