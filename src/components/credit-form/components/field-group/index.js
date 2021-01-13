import styled from 'styled-components';

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-column-gap: 8px;
`;
