import React, { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout/layout'
import Metronome from "../../components/metronome"
import metronomeStyles from "../../styles/metronome.module.css";
import { Button } from "@material-ui/core";
const metronome = new Metronome();

export default function Books() {

    const [tempo, setTempo] = useState(metronome.tempo);


    const handleStart = () => {
        if (metronome.isRunning) {
            return;
        } else {
            metronome.start();
        }
    }
    const handleStop = () => metronome.stop();
    const handleTempoIncrease = () => {
        setTempo(metronome.tempo + 10);
        metronome.tempo = tempo + 10;
    };
    const handleTempoDecrease = () => {
        setTempo(metronome.tempo - 10);
        metronome.tempo = tempo - 10;
    }
    const handleResetTempo = () => {
        metronome.tempo = 120;
        setTempo(120);
    };

    // TODO: adjust metronome.scheduleNote to accept different time sigs, currently only on 4th beat
    // const handleTimeSignatureSelect = () => {

    // }

    return (
        <Layout>
            <Head>
                <title>Metronome</title>
            </Head>
            
            <section className={metronomeStyles.metronomeControls}>
                <Button variant="contained" onClick={() => handleStart()}>Start</Button>
                <Button variant="contained" onClick={() => handleStop()}>Stop</Button>
                <Button variant="contained" onClick={() => handleTempoIncrease()}>increase tempo</Button>
                <Button variant="contained" onClick={() => handleTempoDecrease()}>decrease tempo</Button>
                <Button variant="contained" color="secondary" onClick={() => handleResetTempo()}>Reset Tempo (120 bpm)</Button>
                <div className={metronomeStyles.tempoBox}>Current Tempo: {tempo}</div>
            </section>
        </Layout>
    )
}