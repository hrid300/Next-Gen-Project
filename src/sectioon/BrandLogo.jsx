import Flex from "../components/Flex";
import Container from "./../components/Container";
import Brand1 from "../assets/image/brand1.png";
import Brand2 from "../assets/image/brand2.png";
import Brand3 from "../assets/image/brand3.png";
import Brand4 from "../assets/image/brand4.png";
import Brand5 from "../assets/image/brand5.png";
import BgImage from "../assets/image/Shade 1.png";

const BrandImg = [
  {
    img: Brand1,
    alt: "brand1",
  },
  {
    img: Brand2,
    alt: "brand2",
  },
  {
    img: Brand3,
    alt: "brand3",
  },
  {
    img: Brand4,
    alt: "brand4",
  },
  {
    img: Brand5,
    alt: "brand5",
  },
];
const BrandLogo = () => {
  return (
    <section className="py-44 relative ">
        <img
            src={BgImage}
            alt= ""
            className="absolute -top-[980px] left-0 "
        />
      <Container>
        <Flex className={`${BrandImg.length > 5 && "flex-wrap"} gap-28 `}>
          {BrandImg.map(({ img, alt }) => (
            <div key={alt}>
              <img src={img} alt={alt} />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default BrandLogo;
