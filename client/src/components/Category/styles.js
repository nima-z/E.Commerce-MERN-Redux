import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  ${mobile({ gridTemplateColumns: "repeat(1, 1fr)", padding: "0" })}
`;
