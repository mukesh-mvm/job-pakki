import Login from "@/components/Auth/Login";
import Header from "@/components/header/Header";
import Navbar from "../../components/header/Navbar";
export default function page() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Login />
    </div>
  );
}
