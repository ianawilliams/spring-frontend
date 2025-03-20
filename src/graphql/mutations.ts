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