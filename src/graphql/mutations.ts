import { gql } from "@apollo/client/core";

export const increasePoints = gql`
    mutation increasePoints($id: String!) {
        increasePoints(id: $id) {
            id
            name
            points
        }
    }
`;

export const decreasePoints = gql`
    mutation decreasePoints($id: String!) {
        decreasePoints(id: $id) {
            id
            name
            points
        }
    }
`;

export const removeUser = gql`
    mutation deleteUser($id: String!) {
        deleteUser(id: $id) {
            id
            name
            points
        }
    }
`;

export const createUser = gql`
    mutation createUser(
        $name: String!
        $age: Int!
        $address: String!
    ) {
        createUser(
            input: {
                name: $name
                age: $age
                address: $address
            }
        ) {
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

// export const deleteUser = gql`
//     mutation deleteUser($id: Int!) {
//         deleteUser(id: $id) {
//             id
//             name
//             points
//         }
//     }
// `;