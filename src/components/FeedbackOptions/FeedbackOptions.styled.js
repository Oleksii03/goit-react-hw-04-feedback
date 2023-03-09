import styled from 'styled-components';

export const StyledUl = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center; 
  gap: 12px;
`;

export const StyledLi = styled.li`
  list-style: none;

  & button {
    width: 80px;
    height: 30px;
    padding: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s linear;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    
    &:hover {
      background-color: #327c14;
      color: #fff;
    }
  }
`;