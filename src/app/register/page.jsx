import Register from "@/components/Auth/Register";
import Header from "@/components/header/Header";
import Navbar from "../../components/header/Navbar";
export default function page() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Register />
    </div>
  );
}
