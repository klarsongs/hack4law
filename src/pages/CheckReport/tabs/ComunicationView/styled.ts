import styled from 'styled-components';

export const ChatInput = styled.div`
  display: flex;
`;

export const ChatMe = styled.div`
  background-color: ${({ theme }) => theme.colors.paleGrayBg};
  padding: 16px;
  max-width: 448px;
  border-radius: 8px;
`;

export const ChatMeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

export const ChatThem = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  padding: 16px;
  max-width: 448px;
  border-radius: 8px;
`;

export const ChatWindow = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.colors.paleGrayBg};
`;
