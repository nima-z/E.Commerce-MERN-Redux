import styled from "styled-components";

export const Container = styled.header`
  height: 100px;
`;

export const Wrapper = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  margin-left: 0.5rem;
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;

export const SearchBox = styled.div`
  width: 10rem;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  border-radius: 3px;
  padding: 0 0.2rem;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
