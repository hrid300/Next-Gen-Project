import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";
import SliderComponent from "../components/Slider";
import Nft1img from "../assets/image/nft1.png";
import Nft2img from "../assets/image/nft2.png";
import Nft3img from "../assets/image/nft3.png";
import Button from "../components/Button";
import avatar from "../assets/image/NFT&topcre1.png";
const CollectNFTs = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <Flex className="gap-x-4 justify-center"> {dots} </Flex>
      </div>
    ),
    customPaging: () => (
      <div className="w-8 h-8 bg-[#595572] rounded-full ">
       
      </div>
    ),
    responsive:[
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="z-50 relative px-2 MYxl:p-0">
      <Container>
        <Flex className="flex-col  items-center text-center sm:text-center">
          <Title title={"Collect some NFTs"} />
        </Flex>
        <SliderComponent className="mt-16" settings={settings}>
          <div>
            <img src={Nft1img} className="object-cover" />
            <div className="max-w-[90%] bg-[#F2F2F2] mx-auto p-6 rounded-4xl -translate-y-22 ">
              <Flex className="flex-col text-primarybg">
                <Flex className="justify-between font-extrabold text-2xl  items-center font-primary.font">
                  <h2>Lighting Axe</h2>
                  <h2>0.36 eth</h2>
                </Flex>
                <Flex className="mt-3 mb-6 items-center">
                  <img src={avatar} className="w-9 " />
                  <h5 className="text-xl font-medium">Loura chin</h5>
                </Flex>
              </Flex>
              <Button
                text="Buy it now"
                className="w-full block mt-4 text-center rounded-xl"
              />
            </div>
          </div>
          <div>
            <img src={Nft2img} className="object-cover" />
            <div className="max-w-[90%] bg-[#F2F2F2] mx-auto p-6 rounded-4xl -translate-y-22 ">
              <Flex className="flex-col text-primarybg">
                <Flex className="justify-between font-extrabold text-2xl  items-center">
                  <h2>Lighting Axe</h2>
                  <h2>0.36 eth</h2>
                </Flex>
                <Flex className="mt-3 mb-6 items-center">
                  <img src={avatar} className="w-9 " />
                  <h5 className="text-xl font-medium">Loura chin</h5>
                </Flex>
              </Flex>
              <Button
                text="Buy it now"
                className="w-full block mt-4 text-center rounded-xl"
              />
            </div>
          </div>
          <div>
            <img src={Nft3img} className="object-cover" />
            <div className="max-w-[90%] bg-[#F2F2F2] mx-auto p-6 rounded-4xl -translate-y-22 ">
              <Flex className="flex-col text-primarybg">
                <Flex className="justify-between font-extrabold text-2xl  items-center">
                  <h2>Lighting Axe</h2>
                  <h2>0.36 eth</h2>
                </Flex>
                <Flex className="mt-3 mb-6 items-center">
                  <img src={avatar} className="w-9 " />
                  <h5 className="text-xl font-medium">Loura chin</h5>
                </Flex>
              </Flex>
              <Button
                text="Buy it now"
                className="w-full block mt-4 text-center rounded-xl"
              />
            </div>
          </div>
        </SliderComponent>
      </Container>
    </section>
  );
};

export default CollectNFTs;
