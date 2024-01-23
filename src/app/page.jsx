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
      <h1 className={styles.heading}>Home Page</h1><br />
      <h2 className={styles.heading}>Routing in Next Js</h2>
      <h3>Click Events can only be used in client components</h3>
      <h3>Below buttons are an example:</h3>
      <button type='button' onClick={() => router.push('/login')}>Go to Login Page</button> <br />
      <button type='button' onClick={() => router.push('/about')}>Go to About Page</button>
      <h3>We should prefer Link tags given by Next Js:</h3>
      <Link href="/login">Link Tag for Login Page</Link><br /><br />
      <h2 className={styles.heading}>Nested Routing</h2>
      <Link href="/about">Go to About Page to see nested routing</Link><br /><br />

      <h2 className={styles.heading}>Dynamic Routing</h2>
      <Link href="/studentlist">Go to Student List Page to see dynamic routing</Link><br /><br />

      <h2 className={styles.heading}>Fetch API Next Js</h2>
      <Link href="/productlist">Go to Product List Page to see Fetch API</Link><br /><br />

      <h2 className={styles.heading}>Fetch API with Server Components</h2>
      <Link href="/serverfetchdata">Go to Server Fetch Data Page to see Fetch API Server</Link><br /><br />

      <h2 className={styles.heading}>Client Components with Server Components</h2>
      <Link href="/clientwithserver">Go to Relative Page to see the effect</Link><br /><br />

      <h2 className={styles.heading}>Image Components in Next Js</h2>
      <h3>Next Js automatically optimize the size of large images</h3>
      <Image src={vercelImage} alt="vercel-image" />
      <h3>In HTML image tag, it will be used differently and unoptimized</h3>
      <img src={vercelImage.src} alt="vercel-image" />
      <br /><br />

      <h2 className={styles.heading}>Next Js with MongoDB</h2>
      <button type='button' onClick={() => router.push("/api/products")}>Go to MongoDB API Products Page</button>
      <br /> <br />
      <button type='button' onClick={() => router.push("/addProduct")}>Go to Add Products to MongoDB Page</button>

    </main>
  )
}
