import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.header`
  height: 90px;
  display: flex;
  align-items: center;
  ${mobile({ height: "60px" })}
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ justifyContent: "space-around" })}
`;

export const Left = styled.div`
  flex: 1;

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
  gap: 1.5rem;
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
  /* margin-left: 1rem; */
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 0.2rem 0.2rem;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding-left: 0.3rem;
  font-size: 12px;
  color: gray;
  &:focus-visible {
    outline: none;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 100%;
  cursor: pointer;
`;

export const MobileLogo = styled.div`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  display: none;
  ${mobile({ display: "flex" })}
`;
