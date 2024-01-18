'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import vercelImage from '../../public/vercel.svg'

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <h1 className='heading'>Home Page</h1><br />
      <h2 className='heading'>Routing in Next Js</h2>
      <h3>Click Events can only be used in client components</h3>
      <h3>Below buttons are an example:</h3>
      <button type='button' onClick={() => router.push('/login')}>Go to Login Page</button> <br />
      <button type='button' onClick={() => router.push('/about')}>Go to About Page</button>
      <h3>We should prefer Link tags given by Next Js:</h3>
      <Link href="/login">Link Tag for Login Page</Link><br /><br />
      <h2 className='heading'>Nested Routing</h2>
      <Link href="/about">Go to About Page to see nested routing</Link><br /><br />

      <h2 className='heading'>Dynamic Routing</h2>
      <Link href="/studentlist">Go to Student List Page to see dynamic routing</Link><br /><br />

      <h2 className='heading'>Fetch API Next Js</h2>
      <Link href="/productlist">Go to Product List Page to see Fetch API</Link><br /><br />

      <h2 className='heading'>Fetch API with Server Components</h2>
      <Link href="/serverfetchdata">Go to Server Fetch Data Page to see Fetch API Server</Link><br /><br />

      <h2 className='heading'>Client Components with Server Components</h2>
      <Link href="/clientwithserver">Go to Relative Page to see the effect</Link><br /><br />

      <h2 className='heading'>Image Components in Next Js</h2>
      <h3>Next Js automatically optimize the size of large images</h3>
      <Image src={vercelImage} />
      <h3>In HTML image tag, it will be used differently and unoptimized</h3>
      <img src={vercelImage.src} alt="vercel-image" />

    </main>
  )
}
