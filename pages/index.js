import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import Build from '@material-ui/icons/Build';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm <span className={utilStyles.jazzyName}>Gregory</span>, nice to meet you ^_^</p>{" "}
        <div>I'll be experimenting with Next.js and the web audio API, lets see what we can do!</div>
      </section>
      <section>
        <h1>Links</h1>
        <Link href="/tools/metronome-page">
          <a>Metronome</a>
        </Link> {" "}
        <br/>
        <Link href="/tools/synth-page">
          <a>Synth</a>
        </Link>
      </section>
    </Layout>
  )
}