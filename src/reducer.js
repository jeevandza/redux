import * as actions from './actionTypes'
let id = 1;



export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}

// if (action.type === "bugAdded")
//   return [
//     ...state,
//     {
//       description: action.payload.description,
//       resolved: false,
//     },
//   ];
// else if (action.type === "bugRemoved") {
//   return state.filter((bug) => bug.id !== action.payload.id);
// }
// return state;
