import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const PostsWrapper = styled.div`
  margin-top: 20px;
  height: 80vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
