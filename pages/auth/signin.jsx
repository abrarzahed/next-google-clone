import AppHeader from "../../components/AppHeader";
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <>
      <AppHeader />
      <div className="container mx-auto grid h-[70vh] items-center p-6">
        {Object.values(providers).map((provider) => (
          <div className="grid justify-center gap-6" key={provider.name}>
            <img
              className="w-[320px] mx-auto text-center  object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt=""
            />
            <p className="text-sm text-center italic">
              This website is created for learning purposes
            </p>
            <button
              className="bg-red-500 rounded-lg max-w-max mx-auto text-white p-3"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
