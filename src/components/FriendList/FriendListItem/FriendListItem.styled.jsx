import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 8px;
  padding: 8px;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 3px 8px 14px 1px rgba(0, 0, 0, 0.56);
  overflow: hidden;
`;

export const Name = styled.p`
  font-weight: bold;
  margin-left: 8px;
`;

export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
