
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./lib/nextAuth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("user:", session);
  return (
    <>
      <h1>
        {session?.user?.name}
      </h1>
      <h1>
        {session?.user?.email}
      </h1>
    </>
  );
}
