import styled from 'styled-components';

export const UserCard = styled.div`
  width: 250px;
  background-color: white;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  box-shadow: 3px 8px 14px 1px rgba(0, 0, 0, 0.56);
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
`;

export const Avatar = styled.img`
  border: 1px solid #afb1b8;
  width: 120px;
  border-radius: 50%;
`;

export const Username = styled.p`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 0;
`;

export const Tag = styled.p`
  color: grey;
  margin: 8px 0 0 0;
`;

export const Location = styled.p`
  color: grey;
  font-size: 16px;
  margin: 10px 0 25px 0;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  background-color: #ebebeb;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  height: 80px;
  padding: 8px;
  justify-content: center;
  border: 0.5px solid #afb1b8;
  &:first-child {
    border-left: 0;
  }
  &:last-child {
    border-right: 0;
  }
`;

export const Label = styled.span`
  color: grey;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;
