import { TaskProvider } from "../context/taskContext";
import { resetServerContext } from "react-beautiful-dnd";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </>
  );
}

export default MyApp;

export const getServerSideProps = async ({ query }) => {
  resetServerContext();
  return { props: { data: [] } };
};
