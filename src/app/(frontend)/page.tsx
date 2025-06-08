import React from 'react'
import './globals.css'

import CardGroup from './components/CardGroup'
import ArticleCardGroup from './components/ArticleCardGroup'
import { getPayload } from 'payload'
import config from '@payload-config'
import HourlyBarChart from './components/HourlyChartComponent'
import Calendar from './components/CalendarComponent'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const data = await payload.find({
    collection: 'events',
    limit: 1000,
    sort: 'epoch',
  })
  // console.log('data: ', data)
  // const calls = await payload.find({ collection: 'calls', limit: 1000 })
  // for (const call of calls.docs) {
  //   console.log('call: ', call)
  // }

  const calendarData: { date: string; value: number }[] = []

  const eventHourlyArray = Array.from({ length: 24 }).map((_, hour) => ({ hour, value: 0 }))

  for (const event of data.docs) {
    const date = new Date(event.epoch * 1000) // Convert seconds to ms
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    const hh = String(date.getHours()).padStart(2, '0')
    const dateFormatted = `${yyyy}-${mm}-${dd}`
    const dateIndex = calendarData.findIndex((item) => item.date === dateFormatted)
    eventHourlyArray[parseInt(hh)].value += 1

    if (dateIndex !== -1) {
      calendarData[dateIndex].value += 1
    } else {
      calendarData.push({ date: dateFormatted, value: 1 })
    }
  }

  const population = 5650
  const veterans = Math.round(population * 0.046)
  const daysTotal = calendarData.length
  const eventsTotal = data.docs.length
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
            Using a single camera with audio analysis, this data is only a single sample of the
            entire neighborhood. Estimated sample area is 0.4 mile radius.
          </p>
        </div>
        <CardGroup cards={cards} />
        <div className="w-full max-w-7xl mx-auto mb-12">
          <HourlyBarChart data={eventHourlyArray} />
          <Calendar data={calendarData} startDate={new Date('2024-06-01')} endDate={new Date()} />
        </div>
        <ArticleCardGroup />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
