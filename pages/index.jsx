import Head from "next/head";
import AppHeader from "../components/AppHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <AppHeader />

      {/* body */}

      {/* footer */}
    </div>
  );
}
