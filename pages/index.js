import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
export default function Home() {
  const rounter = useRouter()
  return (
  <>
    <div>Welcome to Next.js!</div>
    <div onClick={() => rounter.push('/testing')}> Go test page</div>
    <div onClick={() => rounter.push('/test2')}> Go test page</div>
    <div onClick={() => rounter.push('/test3')}> Go test page</div>
  </>
  )
}
