import Button from "../Button";
import Topcreatorimg from "../../assets/image/NFT&topcre1.png";
import Topcreatorimg2 from "../../assets/image/NFT&Topcre2.png";
import Topcreatorimg3 from "../../assets/image/NFT&Topcre3.png";
import Topcreatorimg4 from "../../assets/image/NFT&Topcre4.png";

const TopCreatorCard = () => {
  return (
    <>
      <div className="flex z-50 flex-col justify-between min-w-96 bg-[#16192A] rounded-xl p-8 border border-[#2E3150] text-center pt-12 h-[250px]">
        <div>
          <img src={Topcreatorimg} className="w-24 h-24 object-cover mx-auto" />
          <h2 className="font-extrabold text-[22px] text-center mb-12">
            Loura chin
          </h2>
        </div>
        <Button
          text="View Details"
          className="rounded-xl  items-center justify-center p-4"
        />
      </div>
      <div className="flex z-50 flex-col justify-between min-w-96 bg-[#16192A] rounded-xl p-8 border border-[#2E3150] text-center pt-12 h-[250px]">
        <div>
          
          <img src={Topcreatorimg2} className="w-24 h-24 object-cover mx-auto" />
          <h2 className="font-extrabold text-[22px] text-center mb-12">
          Kelvin Glan
          </h2>
        </div>
        <Button
          text="View Details"
          className="rounded-xl  items-center justify-center p-4"
        />
      </div>

      <div className="flex z-50 flex-col justify-between min-w-96 bg-[#16192A] rounded-xl p-8 border border-[#2E3150] text-center pt-12 h-[250px]">
        <div>
          <img src={Topcreatorimg3} className="w-24 h-24 object-cover mx-auto" />
          <h2 className="font-extrabold text-[22px] text-center mb-12">
          Glam Lee
          </h2>
        </div>
        <Button
          text="View Details"
          className="rounded-xl  items-center justify-center p-4"
        />
      </div>
      <div className="flex z-50 flex-col justify-between min-w-96 bg-[#16192A] rounded-xl p-8 border border-[#2E3150] text-center pt-12 h-[250px]">
        <div>
          <img src={Topcreatorimg4} className="w-24 h-24 object-cover mx-auto" />
          <h2 className="font-extrabold text-[22px] text-center mb-12">
          Alameda
          </h2>
        </div>
        <Button
          text="View Details"
          className="rounded-xl  items-center justify-center   "
        />
      </div>
    </>
  );
};

export default TopCreatorCard;
