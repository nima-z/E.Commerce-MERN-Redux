import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.header`
  height: 80px;
  ${mobile({ height: "60px" })}
`;

export const Wrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ justifyContent: "space-around" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  margin-left: 0.5rem;
  ${mobile({ display: "none" })}
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ textAlign: "left" })}
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
  ${mobile({ fontSize: "1.5rem" })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 1rem;
`;
