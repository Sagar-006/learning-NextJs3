import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

console.log(process.env.NEXTAUTH_SECRET)
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        
        // const username = credentials?.username;
        // const password = credentials?.password

        return {
            name:"sagar",
            id:"1",
            email:"sagar12@gmail.com"
        }

    
      },
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;

