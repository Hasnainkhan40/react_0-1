import { isRecoilValue, RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./component/store/atoms/todos";
import { useEffect } from "react";
import { RevenueCard } from "./component/RevenueCard";
// import { countAtom, evenSelector } from "./component/store/atoms/count";
// import { networkAtom, jobAtom, messageAtom, NotificationeAtom, totaleSum  } from './component/store/atoms/likding'

function App() {
  
  return (
    <>
    <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13}/>
    </>
    
  );
}

















// <RecoilRoot>
    //    <UpdateTODOComponent id={1}/>
    //   <TODO id={1} />
    //    <b/>
    //   <TODO id={2} />

    // </RecoilRoot>
// function TODO({ id }) {
//   const [currentTodo] = useRecoilStateLoadable(todosAtomFamily(id));

//   if(currentTodo.state === "loading"){
//     return <div>
//       Loading...
//     </div>
//   }else if(currentTodo.state === "hasValue"){
//       return (
//     <div>
//       <div>Title{id}: {currentTodo.contents.title}</div>
//       <div>Body{id}: {currentTodo.contents.body}</div>
//     </div>
//   );
//   }

// }


// function UpdateTODOComponent ({id}){
//   const UpdateTODO = useSetRecoilState(todosAtomFamily(id));
  
//   useEffect(() => {
//     setTimeout(()=> {
//       UpdateTODO({
//         id: 2,
//         title: "new todo",
//         description: "new des",
//       })
//     }, 5000)
//   })
//   return <div>
//   </div>
// }



// function MainApp (){
//   const [notifications, setnotifications ]= useRecoilState(notifications);
//   const sumState = useRecoilValue(totaleSum);
//   return <div>
//     <button>Home</button>

//     <button>My Network ({notifications.networkNote >= 100 ? "99+" : networkNote})</button>
//     <button>Jobs ({notifications.job})</button>
//     <button>Messaging ({notifications.message})</button>
//     <button>Notification ({notifications.not})</button>
    
//     <button>me ({sumState})</button>
//   </div>
// }

// function Count() {
//   return (
//     <div>
//       <CountRenders />
//       <Buttons />
//     </div>
//   );
// }

// function CountRenders() {
//   const count = useRecoilValue(countAtom);
//   return (
//     <div>
//       <b>{count}</b>
//       <IsEven />
//     </div>
//   );
// }

// function Buttons() {
//   const setCount = useSetRecoilState(countAtom);
//   return (
//     <div>
//       <button onClick={() => setCount((c) => c + 1)}>Increase</button>
//       <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
//     </div>
//   );
// }

// function IsEven() {
//   const isEven = useRecoilValue(evenSelector);

//   return <div>{isEven ? "Is Even" : null}</div>;
// }

export default App;
