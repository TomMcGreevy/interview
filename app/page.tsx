import { FetchProducts } from "@/api/FetchProducts";
import Banner from "@/components/ui/Containers/Banner";
import { DataTable } from "@/components/ui/Containers/DataTable";
import { columns } from "./columns";
import ErrorBanner from "@/components/ui/Containers/ErrorBanner";

export default async function Home() {
  const productData = await FetchProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner location="/banner-img.jpg" headerText="SellerAmp SAS<br/>Sourcing Analysis Simplified" bodyText="Easily understand key indicators that help you profitably source products to sell on Amazon, whether doing Retail Arbitrage,  Online Arbitrage or wholesale. SAS analysis helps you quickly answer the key sourcing questions:" subtitleText="Can I sell it?   Does it sell?   Is it profitable?" />
      {Array.isArray(productData) ? <DataTable columns={columns} data={productData} /> : <ErrorBanner error={new Error("Failed to load table")} callback={() => { }} />}
    </main>
  );
}
