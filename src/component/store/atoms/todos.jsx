
// atoms/todos.js
import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todosSelectorFamily",
    get: (id) => async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return res.data; // { userId, id, title, body }
    },
  }),
});
