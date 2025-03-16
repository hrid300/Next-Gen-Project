
import CollectionCard from "./CollectionCard";
import collection_1 from "../../assets/image/NFTCollectionsimg1.png";
import collection_2 from "../../assets/image/NFTCollectionsimg2.png";
import collection_3 from "../../assets/image/NFTCollectionsimg3.png";
import collection_4 from "../../assets/image/NFTCollectionsimg5.png";
import Flex from "../Flex";

const CollectionContainer = () => {
  return (
    <Flex className="gap-5 lg:flex-row lg:flex-nowrap  flex-col">
      <CollectionCard img={collection_1} h2={"Broken collection"} />
      <CollectionCard img={collection_2} h2={"Broken collection"} />
      <CollectionCard img={collection_3} h2={"Broken collection"} />
      <CollectionCard img={collection_4} h2={"Broken collection"} />
    </Flex>
  );
};

export default CollectionContainer