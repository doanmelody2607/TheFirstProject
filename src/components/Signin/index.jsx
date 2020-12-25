import React from "react";
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormWrap>
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmFor="for">Password</FormLabel>
                <FormInput type="password" required />
                <FormButton type="submit">Continue</FormButton>
                <Text>Forgot password</Text>
              </FormWrap>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
