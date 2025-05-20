import React from 'react'
import './globals.css'

import CardGroup from './components/CardGroup'
import ArticleCardGroup from './components/ArticleCardGroup'
import EventData from './api/event-data.json'
import { DataVisualization } from './components/DataVisualization'

export default async function HomePage() {
  const population = 5650
  const veterans = Math.round(population * 0.046)
  const eventsData = EventData
  const daysTotal = eventsData.monthlyData.length
  const eventsTotal = eventsData.eventsTotal
  const cards = [
    {
      data: `~${population}`,
      title: 'Neighbors',
      desc: 'This data only reflects only the Old Town neighborhood and not the entire city of Livermore.* If data was acquired city wide, the number of affected residence would be much higher.',
      footnote: {
        text: `* Estimated population acquired using maps.ie`,
        link: 'https://www.maps.ie/population/',
      },
    },
    {
      data: `${veterans}`,
      title: 'Veterans',
      desc: 'Based on census data of 4.6% of residents. Higher percentage than anywhere in the Bay Area. Half of these veterans are from Vietnam, Gulf, Afghanistan, and Iraq wars.†',
      footnote: {
        text: `† Census Reporter data from 2022`,
        link: 'https://censusreporter.org/profiles/16000US0641992-livermore-ca/',
      },
    },
    {
      data: `${daysTotal}`,
      title: 'Days of Fireworks',
      desc: `There have been a total of ${daysTotal} days since June 25, 2024 with fireworks detonated. AI sound analyzation was set for Explosions, due to the mortars not triggering firework sound models.`,
    },
    {
      data: `${eventsTotal}`,
      title: 'Total Events',
      desc: 'Events are recordings of fireworks detected, not individual fireworks. Meaning, there are much more being detonated.',
    },
  ]

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center w-full">
          <h1>
            Livermore <span className="text-gradient">Fireworks</span>
          </h1>
        </div>
        <div className="intro-text">
          <p>
            The Old Town neighborhood has taken advantage of the lack of basic enforcement and
            proper punishments for misdemeanors and felonies.
          </p>
          <p>
            Unregulated parties and loud music sets the precedent of lawless behavior without any
            concern or compassion for their fellow neighbors.
          </p>
        </div>
        <CardGroup cards={cards} />
        <DataVisualization />
        <ArticleCardGroup />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
