import { List } from 'antd';
import { styled } from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h2,
  > h3 {
    padding: 0;
    margin: 0;
  }
`;

export const SubcategoryContainer = styled(List.Item)<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ $isSelected }) =>
    $isSelected ? '#e0e0e0' : 'transparent'};
  cursor: pointer;
`;

export const SubcategoryDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;

  > h4,
  > p {
    margin: 0;
  }
`;
