import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";

export default function Home() {
  return (
   <div>
{/*Hero Section*/}
<Hero/>

{/*Search bar + Categories */}
<CategorySearch/>
   </div>
  );
}
