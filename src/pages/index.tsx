import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {GetServerSideProps} from "next";
import {FC} from "react";

type Props = {
  now: string
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, max-age=10, stale-while-revalidate=60')

  return {
    props: {
      now: JSON.stringify(new Date().toISOString())
    }
  }
}

const Page: FC<Props> = ({ now }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            {now}
          </p>
        </div>
      </main>
    </>
  )
}

export default Page