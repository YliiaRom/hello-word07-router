import ButtonSection from "../ButtonSection/ButtonSection";
import SliderBox from "../SliderBox/SliderBox";
import DiscountCard from "./DiscountCard";

function Discount() {
  return (
    <section className="h-full flex  flex-col items-center gap-10 bg-gradient-to-b from-violet-900 to-black">
      <h2 className="">Discount Section</h2>
      <DiscountCard />
      <ButtonSection />
      <SliderBox />
    </section>
  );
}
export default Discount;
