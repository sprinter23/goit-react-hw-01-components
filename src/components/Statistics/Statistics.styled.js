import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  width: 400px;
  border-radius: 8px;
  box-shadow: 3px 8px 14px 1px rgba(0, 0, 0, 0.56);
  overflow: hidden;
`;

export const StatTitle = styled.h2`
  text-align: center;
  vertical-align: middle;
  margin: 0;
  padding: 30px 0;
  color: grey;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  height: 70px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${getRandomHexColor};
  width: calc(100% / 4);
  align-items: center;
  padding-top: 15px;
`;

export const Label = styled.span`
  color: #fff;
  font-size: 12px;
  filter: drop-shadow(0 0 2px black);
  padding-bottom: 7px;
`;

export const Percent = styled.span`
  color: #fff;
  font-size: 18px;
  filter: drop-shadow(0 0 2px black);
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
