import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>GeauxWeisbeck4.dev | Portfolio Website</title>
      </Head>
      <Navbar />
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-3xl text-">Hello World</h1>
      </div>
    </>
  );
}
