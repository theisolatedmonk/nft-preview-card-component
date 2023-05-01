import Image from "next/image";
import equilibrium from "@/images/image-equilibrium.jpg";
import avatar from "@/images/image-avatar.png";
import clock from "@/images/icon-clock.svg";
import ethereum from "@/images/icon-ethereum.svg";
import { NormalText } from "@/components/Text";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-[hsl(217,54%,11%)] font-Outfit">
      <div className="flex flex-col w-64 items-center p-3 bg-[hsl(216,50%,16%)] rounded-md gap-4">
        <Image className="rounded-md " src={equilibrium} alt=""/>
        <BoldText BtextContainer="Equilibrium #3429" className={"w-full font-bold"} />
        <NormalText textContainer="Our Equilibrium collection promotes balance and calm." className={"text-[hsl(215,51%,70%)]"} />
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-1">
            <Image className="h-4 w-auto" src={ethereum} alt="" />
            <BoldText BtextContainer="0.041ETH" className={"font-bold text-[hsl(178,100%,50%)]"} />
          </div>
          <div className="flex items-center">
            <Image className="h-5 w-5" src={clock} alt="" />
            <NormalText textContainer="3 daysleft" className={""} />
          </div>
        </div>
        <hr className=" border border-[hsl(215,32%,27%)] w-full" />
        <div className="flex gap-2 items-center w-full ">
          <Image
            className="h-5 w-auto border  rounded-full"
            src={avatar}
            alt=""
          />
          <NormalText textContainer="Creation of" className={"text-[hsl(215,51%,70%)]"} />
          <NormalText textContainer="jules Wyvern" className={""} />
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
