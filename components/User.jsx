import { useSession, signIn, signOut } from "next-auth/react";

export default function User({ className }) {
  const { data: session } = useSession();
  // console.log(session);
  if (session) {
    return (
      <>
        <p
          onClick={() => signOut()}
          className={`bg-gray-100 block font-bold hover:bg-gray-200 text-gray-600 cursor-pointer px-2 py-1 ${className}`}
        >
          {session.user.name}
        </p>
      </>
    );
  }
  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-2  font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
}
