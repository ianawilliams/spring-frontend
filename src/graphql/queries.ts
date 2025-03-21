import { gql } from "@apollo/client/core";

export const getUsers = gql`
    query getUsers($alph: Boolean, $search: String) {
        getUsers(alph: $alph, searchTerm: $search) {
            id
            name
            points
        }
    }
`;

export const getUser = gql`
    query getUser($id: Int!) {
        getUser(id: $id) {
            id
            name
            points
            age
            address {
                first
            }
        }
    }
`;