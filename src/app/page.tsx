import Image from "next/image";
import {auth, signIn} from "@/auth";

export default async function Home() {
    const session = await auth();
    if (session?.user) {
        return <div>Hello {session.user.name}</div>
    }
  return (
      <form
          action={async () => {
            "use server"
            await signIn()
          }}
      >
        <button type="submit">Sign in</button>
      </form>
  )}