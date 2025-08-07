
import { getServerSession } from "next-auth";
import Button from "./components/Button";
// import { useSession } from "next-auth/react";


export default async function (){
  const session = await getServerSession();
  
  return <div>
    {session?.user ? "logout" : "signin"}

    {/* <Button type="signin" fun={}/> */}


  </div>;
} 

//  function Realhome(){
//   const session = useSession();

//   return<div>
//     {session.status === "authenticated" && <button onClick={() => signOut()}>logout</button> }

//     {session.status === "unauthenticated" && <button onClick={() => signIn()}>sign in</button>}
//     {/* {JSON.stringify(session)} */}
//   </div>
// }