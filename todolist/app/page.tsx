import Image from 'next/image'
import { Indie_Flower } from 'next/font/google'
import ListItem from './components/listItem'

const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie'
})

export default function Home() {
  return (
    <div className={`${indie.variable} font-sans`}>
      <div className='flex items-center justify-center h-screen'>
        <Image
          src="https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          object-fit="contain"
          fill={true}
          alt=""
          className='absolute'
        />

        <main className='relative bg-[#f5f5f5] h-2/4 w-3/4 z-99 max-w-md p-8'>
          <h1 className='text-5xl mb-10'>To do list</h1>

          <div className='flex flex-col text-xl'>
            <ul>
              <li>
                <ListItem />
              </li>
            </ul>
          </div>

          <div className='mt-10'>
            <input className='border-b-4 focus:outline-none bg-[#f5f5f5] w-80' type='text' />
            <button>Add</button>
          </div>
        </main>
      </div>
    </div>
  )
}
