
import { getServerSession } from "next-auth";
// import { useSession } from "next-auth/react";


export default async function (){
  const session = await getServerSession();
  
  return <div>
    {JSON.stringify(session)}
    {session?.user ? "logout" : "signin"}
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