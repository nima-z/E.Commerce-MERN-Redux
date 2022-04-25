import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ backgroundColor: "#eee" })}
`;

export const Filter = styled.div`
  margin: 1.5rem;
`;

export const FilterText = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 1rem;
  ${mobile({ fontSize: "0.8rem" })}
`;

export const Select = styled.select`
  padding: 0.5rem;
  margin-right: 1rem;
  ${mobile({ padding: "0.2rem", marginTop: "0.5rem" })}
`;
export const Option = styled.option``;

export const FilterButton = styled.button``;
