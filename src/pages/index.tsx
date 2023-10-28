import Image from "next/image";
import equilibrium from "@/images/image-equilibrium.jpg";
import avatar from "@/images/image-avatar.png";
import clock from "@/images/icon-clock.svg";
import ethereum from "@/images/icon-ethereum.svg";
import view from "@/images/icon-view.svg";
import { NormalText } from "@/components/Text";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[hsl(217,54%,11%)] font-Outfit ">
      <div className="flex flex-col w-72 items-center p-4 bg-[hsl(216,50%,16%)] rounded-md gap-4 s">
        <div className=" flex">
          <Image
            className="rounded-lg relative z-10"
            src={equilibrium}
            alt=""
          />
          {/* <div className="hover:bg-[hsl(178,100%,50%)]  hover:opacity-30 w-64 items-center h-64 p-4 rounded-lg  bg-transparent z-20 absolute hover:visible "></div> */}
          <div className="group">
            <div className="flex-1  h-64 rounded-lg  w-64  ml-[-255px] p-4 z-50 absolute   hover:bg-[hsl(178,100%,50%)]  hover:bg-opacity-30 ">

            </div>

            <div className="flex-1 bg-transparent z-40  h-64 w-64 absolute text-black p-1  group-hover:flex ml-[-255px]  hidden ">  <Image
              className="h-8 w-auto ml-[110px] mt-[106px]  absolute opacity- z-50"
              src={view}
              alt=""
            /></div>
          </div>
        </div>
        <BoldText
          BtextContainer="Equilibrium #3429"
          className={"w-full font-bold hover:text-[hsl(178,100%,50%)]"}
        />
        <NormalText
          textContainer="Our Equilibrium collection promotes balance and calm."
          className={"text-[hsl(215,51%,70%)]"}
        />
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-1">
            <Image className="h-3 w-auto" src={ethereum} alt="" />
            <BoldText
              BtextContainer="0.041ETH"
              className={"font-bold text-[hsl(178,100%,50%)] text-sm"}
            />
          </div>
          <div className="flex items-center gap-1">
            <Image className="h-4 w-auto" src={clock} alt="" />
            <NormalText
              textContainer="3 daysleft"
              className={"text-[hsl(215,51%,70%)] text-sm"}
            />
          </div>
        </div>
        <hr className=" border border-[hsl(215,32%,27%)] w-full" />
        <div className="flex gap-4 items-center w-full text-sm ">
          <Image
            className="h-7 w-auto border  rounded-full"
            src={avatar}
            alt=""
          />
          <div className="flex gap-1">
            <NormalText
              textContainer="Creation of"
              className={"text-[hsl(215,51%,70%)]"}
            />
            <NormalText
              textContainer="jules Wyvern"
              className={"hover:text-[hsl(178,100%,50%)] "}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

type BoldTexts = {
  BtextContainer: string;
  className: string;
};

function BoldText(Props: BoldTexts) {
  return <div className={Props.className}>{Props.BtextContainer}</div>;
}
