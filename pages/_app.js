import { TaskProvider } from "../context/taskContext";
import { resetServerContext } from "react-beautiful-dnd";

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  );
}

export default MyApp;

export const getServerSideProps = async ({ query }) => {
  resetServerContext();
  return { props: { data: [] } };
};
