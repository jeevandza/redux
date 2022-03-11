import * as actions from "./actionTypes";

// export function bugAdded() {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "bug1",
//     },
//   };
// }

export const bugAdded = description =>({
    type: actions.BUG_ADDED,
    payload:{
        description: 'Bug1'
    }
})

export const bugRemoved = description =>({
    type: actions.BUG_REMOVED,
    payload:{
        id: 2
    }
})