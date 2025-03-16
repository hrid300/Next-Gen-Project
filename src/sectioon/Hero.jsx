import Container from "../components/Container";
import Flex from "../components/Flex";
import Button from "../components/Button";
import bannertop from "../assets/bannertop.png";

const Hero = () => {
  return (
    <section className="xl:py-14 relative z-50 p-2 MYxl:p-0">
      <Container>
        <Flex className="items-center flex-col lg:flex-row gap-5 ">

          <div className="max-w-[800px] order-1 lg:order-0 gap-4">
            <h1 className=" xl:text-8xl text-white text-center text-4xl  font-black  tracking-wider lg:text-left md:text-7xl lg:text-5xl ">
              Best NFTs Marketplace
            </h1>
            <p className="text-xl mt-8 mb-10 xl:mb-16  seconde-text max-w-[765px] leading-8 tracking-tight text-center lg:text-left">
              Ultrices eget pretium sit euismod mi id. In commodo auctor eget
              congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <Flex className="gap-4 flex-col lg:flex-row   ">
              <Button
                className="text-center w-[80%] mx-auto lg:w-auto lg:mx-0 lg:text-sm"
                text="Get started"
                link="/getstarted"
              />
              <Button
                className="text-center w-[80%] mx-auto lg:w-auto lg:mx-0 lg:text-sm "
                text="Create NFTs"
                link="/createnfts"
                bgshow={false}
              />
            </Flex>
          </div>
          <Flex className="rounded-full max-w-[740px] max-h-[740px] overflow-hidden bg-[rgba(134,155,223,0.08)] justify-center border-4 border-[#16152C] relative or">
            <img src={bannertop} alt="bannertop" />
            <div className="absolute w-full h-full  bg-[rgba(18,12,40,0.26)]"></div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Hero;
