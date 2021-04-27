import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout/layout'


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Synth</title>
      </Head>
      <h1>Here is where the synth will go</h1>
      <div>
        <Image src="/images/metronome.jpg" height={144} width={144} alt="cool mech"></Image>
      </div>
    </Layout>
  )
}