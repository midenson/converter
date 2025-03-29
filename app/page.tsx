import Converter from "@/components/Converter";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Homepage />
      <Converter />
    </main>
  );
}
