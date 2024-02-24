import { getUser } from "@/auth";

export default async function Dashboard() {
  const { user } = await getUser();

  const dataUser = () => {
    return user;
  };
  
  return (
    <div>Dashboard</div>
  );
};
