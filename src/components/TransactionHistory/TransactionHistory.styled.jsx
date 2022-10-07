import styled from 'styled-components';

export const Table = styled.table`
  background-color: white;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  width: 600px;
  border-radius: 4px;
  box-shadow: 3px 8px 14px 1px rgba(0, 0, 0, 0.56);
  overflow: hidden;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #00cdff;
  height: 40px;
`;

export const TableData = styled.tr`
  height: 30px;
  text-align: center;
  &:nth-child(odd) {
    background: white;
  }
  &:nth-child(even) {
    background: #e0e0e0;
  }
`;

export const TypeColumn = styled.td`
  text-align: center;
`;
