import React from 'react'
import banner from '../../assets/images/hero.svg'
import { styles } from './style'

const Hero = () => {
    return (
        <div style={{ ...styles.box }}>
            <div style={{ ...styles.heroLeft }}>
                <h1>Hi, I am Srinu</h1>
                <h2>A Web Developer</h2>
            </div>
            <div style={{ ...styles.heroRight }}>
                <img src={banner} alt="hero" width={"400px"} />
            </div>
        </div>
    )
}


export default Hero