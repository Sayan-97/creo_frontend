import React from 'react'
import { ExploreProjects, FindWork, ForEveryone, GettingStarted, Hero, HireTalents, KeyFeatures, TheFuture, TheJourney, TheNetwork } from './components'

const Home = () => {
    return (
        <div className='space-y-28'>
            <Hero />
            <ExploreProjects />
            <TheFuture />
            <FindWork />
            <KeyFeatures />
            <TheJourney />
            <TheNetwork />
            <ForEveryone />
            <GettingStarted />
            <HireTalents />
        </div>
    )
}

export default Home