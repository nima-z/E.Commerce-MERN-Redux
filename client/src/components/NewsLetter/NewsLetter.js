import styled from "styled-components";

import SendIcon from "@mui/icons-material/Send";
import { tablet } from "../../responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  padding: 2rem;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  color: rgba(0, 0, 0, 0.8);
  ${tablet({ fontSize: "2rem" })}
`;

const Description = styled.p`
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
`;

const FormContainer = styled.div`
  min-width: 20rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 1px;
`;
const Form = styled.form`
  display: flex;
  width: 100%;
  background-color: green;
`;
const Input = styled.input`
  flex: 10;
  padding-left: 0.5rem;
  border: none;
  height: 2rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get weekly news about our company, products and events.
      </Description>
      <FormContainer>
        <Form>
          <Input placeholder="Your Email" />
          <Button>
            <SendIcon />
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default NewsLetter;
