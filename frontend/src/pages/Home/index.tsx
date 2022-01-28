import { useAuth } from "../../context/auth";

export const Home = () => {
  const auth = useAuth();
  return (
    <>
      You're logged, {`${auth.user?.name}`}!
      <br />
      <button onClick={auth.Logout}>Logout</button>
    </>
  );
};
