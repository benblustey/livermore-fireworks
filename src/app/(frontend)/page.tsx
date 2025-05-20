import React from 'react'
import './styles.css'

import CardGroup from './components/CardGroup'
import HourlyBarChart from './components/HourlyChartComponent'
import Heatmap from './components/Heatmap'
import ArticleCardGroup from './components/ArticleCardGroup'
import EventData from './api/event-data.json'

export default async function HomePage() {
  const population = 5650
  const veterans = Math.round(population * 0.046)
  const eventsData = EventData
  const daysTotal = eventsData.monthlyData.length
  const eventsTotal = eventsData.eventsTotal

  const sampleData = Array.from({ length: 24 }).map((_, hour) => ({
    hour,
    value: Math.floor(Math.random() * 51),
  }))

  const cards = [
    {
      data: `~${population}`,
      title: 'Neighbors',
      desc: 'This data only reflects only the Old Town neighborhood and not the entire city of Livermore.* If data was acquired city wide, the number of affected residence would be much higher.',
      footnote: `* Estimated population acquired using <a href="https://www.maps.ie/population/">maps.ie</a>`,
    },
    {
      data: `${veterans}`,
      title: 'Veterans',
      desc: 'Based on census data of 4.6% of residents. Higher percentage than anywhere in the Bay Area. Half of these veterans are from Vietnam, Gulf, Afghanistan, and Iraq wars.†',
      footnote: `† Census Reporter data from 2022 <a href="https://censusreporter.org/profiles/16000US0641992-livermore-ca/">Source</a>`,
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

  const data = [
    { date: '2024-03-20', value: 5 },
    { date: '2024-03-21', value: 3 },
    // ... more data points
  ]
  const articleData = [
    {
      href: 'https://fox40.com/news/local-news/more-citations-coming-in-northern-california-after-drone-reveals-illegal-fireworks-use/amp/',
      title: 'Increased Fines Combat Fireworks',
      body: 'Learn how Sacramento Fire Department is using undercover officials working to secretly capture video and cite people for setting off illegal fireworks.',
    },
    {
      href: 'https://www.ttownmedia.com/tracy_press/fees-increased-for-use-of-illegal-fireworks/article_a9e93e62-dfcf-11ed-ba71-6b8f8cb4cbf7.html',
      title: 'Success with Tracy Ca',
      body: 'Sacramento increases fine to minimum of $750, issues 43 administrative citations, and arrests 14 for the health and safety code violations in regard to fireworks.',
    },
    {
      href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10588998/',
      title: 'Fireworks, Veterans, and PTSD: The Ironies of the Fourth of July',
      body: 'Learn more about the psychological affects that fireworks have on those that served our country.',
    },
    {
      href: 'https://medicalxpress.com/news/2023-11-person-dementia-fireworks-night.html',
      title: 'How to support a person with dementia during fireworks night',
      body: 'For a person with dementia, loud noises can confuse, scare or trigger unwanted past memories.',
    },
    {
      href: 'https://www.kcra.com/article/elk-grove-100k-fine-4th-of-july-illegal-fireworks/62012193',
      title:
        'Elk Grove issues $100k fine, others as part of 4th of July illegal fireworks enforcement',
      body: 'In total, 19 property owners received citations and fines, Mendez said Thursday. The fines totaled $240,000.',
    },
    {
      href: 'https://www.va.gov/hines-health-care/stories/how-your-fireworks-may-affect-americas-veterans/',
      title: "How your fireworks may affect America's Veterans",
      body: "What some don't realize is that these colorful celebrations of American freedom can seriously impact the Veterans who defended it.",
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
        <HourlyBarChart data={sampleData} />
        <Heatmap data={data} startDate={new Date('2024-03-01')} endDate={new Date('2024-03-31')} />
        <ArticleCardGroup articles={articleData} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
