import Hero from "@/components/hero/Hero";
import Benefit from "@/components/benefit/Benefit";
import Articles from "@/components/articles/Articles";
import Footer from "@/components/footer/Footer";
const Page = () => {
  return (
    <>
      <Hero />
      <div className="bg-neutral-gray-100">
        <div className="mx-auto max-w-container px-5 lg:px-14">
          <Benefit />
        </div>
      </div>
      <div className="bg-neutral-gray-50" id="blogs">
        <div className="mx-auto max-w-container px-5 lg:px-14">
          <Articles />
        </div>
      </div>
      <div className="bg-Blue-950">
        <div className="mx-auto max-w-container px-5 lg:px-14">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
