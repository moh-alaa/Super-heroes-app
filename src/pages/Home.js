import React from 'react'
import { HeroesSlider } from '../components/HeroesSlider/HeroesSlider'
import { HeroList } from '../components/HeroList/HeroList'
export default function Home() {
    return (
        <div>
            <HeroesSlider/>
            <div className="container">
                <HeroList/>
            </div>

        </div>
    )
}
