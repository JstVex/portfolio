import { GraphQLClient, gql } from 'graphql-request';
import { LoginResponse } from '../types/literal';

const client = new GraphQLClient('https://literal.club/graphql/');

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const login = async (email: string, password: string): Promise<string> => {
    try {
        const data: LoginResponse = await client.request(LOGIN_MUTATION, { email, password });
        return data.login.token;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
