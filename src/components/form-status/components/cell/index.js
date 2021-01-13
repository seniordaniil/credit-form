import styled from 'styled-components';

export const Cell = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;
