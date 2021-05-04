export default class Synth
{
    constructor(frequency = 440)
    {
        this.audioContext = null;
        this.frequency = frequency;
        this.isRunning = false;
    }

    startTone()
    {
        this.isRunning = true;
        if (this.isRunning) {
        if (this.audioContext == null)
        {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = this.audioContext.createOscillator();
        const envelope = this.audioContext.createGain();
        osc.frequency.value = this.frequency;
        envelope.gain.value = 1;
        osc.connect(this.audioContext.destination)
        osc.start();
        }
    }

    stopTone()
    {
        this.isRunning = false;
    }
}