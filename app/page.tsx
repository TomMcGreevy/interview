import Image from "next/image";
import Banner from "@/components/ui/Containers/Banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner location="/banner-img.jpg" headerText="SellerAmp SAS<br/>Sourcing Analysis Simplified" bodyText="Easily understand key indicators that help you profitably source products to sell on Amazon, whether doing Retail Arbitrage,  Online Arbitrage or wholesale. SAS analysis helps you quickly answer the key sourcing questions:" subtitleText="Can I sell it?   Does it sell?   Is it profitable?" />
    </main>
  );
}
