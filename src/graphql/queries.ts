import { gql } from "@apollo/client/core";

export const getUsers = gql`
    query users($alph: Boolean) {
        users(alph: $alph) {
            id
            name
            points
        }
    }

`;