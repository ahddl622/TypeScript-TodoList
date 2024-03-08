import styled from "styled-components";

// body
export const TodoBody = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

// header
export const TodoHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 1rem;
`;

// inputbox

interface TodoInputProps {
  $inputWidth?: string;
}

export const TodoInput = styled.input<TodoInputProps>`
  font-size: 16px;
  height: 2.1rem;
  width: ${(props) => props.$inputWidth};
  margin-right: 1rem;
  border-radius: 10px;
  border: 1px solid #999;
`;

export const TodoInputBox = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const AddTodoBtn = styled.button`
  margin-right: 1rem;
  width: 7rem;
  color: white;
  background-color: skyblue;
  border: none;
  border-radius: 1rem;
`;

// TodoList
export const TodoItemList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

// TodoItem
export const TodoCardItemContainer = styled.article`
  border: 1px solid black;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  cursor: pointer;

  width: 20rem;
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export interface TodoCardItemProps {
  $isDone: boolean
}

export const TodoCardItem = styled.div<TodoCardItemProps>`
  padding: 1rem;
  text-decoration: ${({ $isDone }) => ($isDone ? "line-through" : "none")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

// action button
export const TodoActionContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface TodoBackgroundColorProps {
  $backgroundColor?: string
}

export const TodoActionBtn = styled.button<TodoBackgroundColorProps>`
  width: 5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.$backgroundColor};
`;