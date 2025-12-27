import axios from "axios";
import { atom, selector } from "recoil";

// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 120,
// });

// export const jobAtom = atom({
//   key: "jobAtom",
//   default: 0, 
// });

// export const messageAtom = atom({
//   key: "messageAtom",
//   default: 0, 
// });



// export const NotificationeAtom = atom({
//   key: "NotificationeAtom",
//   default: 12, 
// }); 

export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "notificationsSelector",
        get: async () => {
            const res  = await  axios.get("https://jsonplaceholder.typicode.com/posts");
            return res.data.id
        }
    })
});


export const totaleSum  = selector({
    key: "notificationsSelector",
    get: ({get}) => {
        const allNotification = get(notifications);
        return allNotification.network +jobAtomCount+messageAtomCount+NotificationeAtomCount;
    }
})

