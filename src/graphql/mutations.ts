import { gql } from "@apollo/client/core";

export const increasePoints = gql`
    mutation increasePoints($id: Int!) {
        increasePoints(id: $id) {
            id
            name
            points
        }
    }
`;

export const decreasePoints = gql`
    mutation decreasePoints($id: Int!) {
        decreasePoints(id: $id) {
            id
            name
            points
        }
    }
`;

export const deleteUser = gql`
    mutation deleteUser($id: Int!) {
        deleteUser(id: $id) {
            id
            name
            points
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