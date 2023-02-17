import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GreetingLottie from '../components/displaylottie'
import styles from '../styles/teams.module.css'

import CardList from '../components/team-cards/teams-cards'
// import Anwesha_text from "../images/Anwesha_text.png";

export default function campusAmbassador() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Anwesha 2023 - teams</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./AnwehsaIcon.png" />
            </Head>
            {/* <div style={{ height: '100px' }}></div> */}
            <div className={styles.title_container}>
                <motion.div
                    className={styles.hero_text}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h1 className= {styles.teams_heading}>OUR TEAM</h1>

                    
                </motion.div>
            </div>
                

            <div>

            <motion.div
                    className={styles.card_container}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <CardList img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeMZ8DUkg3Jts1IqSd4rfYlTLRL7uGSMx9HERhW2&s'/>

                    <CardList img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeMZ8DUkg3Jts1IqSd4rfYlTLRL7uGSMx9HERhW2&s'/>
                    <CardList img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeMZ8DUkg3Jts1IqSd4rfYlTLRL7uGSMx9HERhW2&s'/>
                    <CardList img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeMZ8DUkg3Jts1IqSd4rfYlTLRL7uGSMx9HERhW2&s'/>
                    <CardList img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeMZ8DUkg3Jts1IqSd4rfYlTLRL7uGSMx9HERhW2&s'/>

                    <CardList img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeMZ8DUkg3Jts1IqSd4rfYlTLRL7uGSMx9HERhW2&s'/>
            
                    <CardList img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeMZ8DUkg3Jts1IqSd4rfYlTLRL7uGSMx9HERhW2&s'/>
                    <CardList img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeMZ8DUkg3Jts1IqSd4rfYlTLRL7uGSMx9HERhW2&s'/>

                    <CardList img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdeMZ8DUkg3Jts1IqSd4rfYlTLRL7uGSMx9HERhW2&s'/>

            </motion.div>
            </div> 
          
            
            {/* <Footer/> */}
        </div>
    )
}
