import Image from 'next/image'
import equilibrium from '@/images/image-equilibrium.jpg'
import avatar from '@/images/image-avatar.png'
import clock from '@/images/icon-clock.svg'
import ethereum from '@/images/icon-ethereum.svg'
import {NormalText,BoldText} from '@/components/Text'


export default function Home() {
  return (
    <main className='flex h-screen items-center justify-center bg-[hsl(217,54%,11%)]'>
      <div className='flex flex-col w-72 justify-center items-center p-4 bg-[hsl(216,50%,16%)]'>
      
        <Image className='' src={equilibrium} alt="" />
        <BoldText BtextContainer='Equilibrium #3429'/>
        <NormalText textContainer='Our Equilibrium collection promotes balance and calm.' />
        <div className='flex justify-between'>
          <div className='flex '>
            <Image src={ethereum} alt="" />
          <BoldText BtextContainer='0.041ETH'/>
          </div>
          <div className='flex '>
            <Image src={clock} alt="" />
          <NormalText textContainer='3 daysleft'/>
          </div>
        </div>
        <hr />
        <div className='flex gap-2'>
        <Image  className='h-5 w-5 ring-white ring rounded-full' src={avatar} alt="" />
        <NormalText textContainer='Creation of'/>
        <NormalText textContainer='jules Wyvern'/>




        </div>
      </div>
    </main>
  )
}
