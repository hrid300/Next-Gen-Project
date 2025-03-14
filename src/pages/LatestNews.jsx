import Flex from "../components/Flex";
import Container from "./../components/Container";
import Newsimg from "../assets/image/subscribeimage 1.png";
import Title from "./../components/Title";
import Button from "../components/Button";
import patternbotm from "../assets/image/Pattern1top.png";
const LatestNews = () => {
  return (
    <section className="mt-40 mb-96 relative ">
        <img
                src={patternbotm}
                alt=""
                className="absolute -bottom-[300px] left-0 " 
              />
      <Container>
        <Flex className="justify-between items-center">
          <div className="z-50">
            <img src={Newsimg} />
          </div>
          <div className="max-w-[680px] max-h-[344px]  ">
            <Title title={"Subscribe And get Latest news update about NFTs."} />
            <p className=" text-lg font-[400]   ">
              In commodo auctor eget congue sit. Ultrices eget pretium sit
              euismod mi id. Risus, aliquam odio posuere ac in in nisl sed
              augue. Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
           <form className="relative">
           <input type="email" placeholder="Write your email here " className="  w-full py-8 pl-10  border-[#2E3150] bg-[#16192A] border-2 outline-none rounded-[10px] mt-15 " />
           <Button className="font-medium text-lg seconde-text absolute top-[47%] right-[2%] " text="Subscribe" />
           </form>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default LatestNews;
