import Converter from "@/components/Converter";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Homepage />
      <Converter />
    </main>
  );
}
