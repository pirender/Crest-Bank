import Choose from "@/components/Choose/Choose";
import Footer from "@/components/Footer/Footer";
import Help from "@/components/Help/Help";
import Hero from "@/components/Hero/Hero";
import Innovative from "@/components/Innovative/Innovative";
import Money from "@/components/Money/Money";
import Navbar from "@/components/Navbar/Navbar";
import Service from "@/components/Service/Service";
import Talk from "@/components/Talk/Talk";
import Testimonial from "@/components/Testimonial/Testimonial";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-primary">
        <Navbar />
        <Hero />
      </div>
      <Choose />
      <Talk />
      <Innovative />
      <Service />
      <Money />
      <Testimonial />
      <Help />
      <Footer />

      <Link href='#home'>
        <button className="bg-secondary fixed bottom-4 right-4 h-[30px] w-[30px] flex items-center justify-center rounded-[5px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path></svg>
        </button>
      </Link>
    </div>
  );
}
