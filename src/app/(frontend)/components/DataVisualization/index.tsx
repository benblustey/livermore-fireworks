import HourlyBarChart from './HourlyChartComponent'
import Heatmap from './HeatmapComponent'
import { getPayload } from 'payload'
import config from '@payload-config'

export const DataVisualization = async () => {
  const payload = await getPayload({ config })
  const data = await payload.find({ collection: 'events', limit: 1000 })

  const newHeatMapData: { date: string; value: number }[] = []

  const eventHourlyArray = Array.from({ length: 24 }).map((_, hour) => ({ hour, value: 0 }))
  for (const event of data.docs) {
    const eventHour = new Date(event.eventDate).getHours()
    eventHourlyArray[eventHour].value += 1

    const dateFormatted = new Date(event.eventDate).toISOString().split('T')[0]
    const dateIndex = newHeatMapData.findIndex((item) => item.date === dateFormatted)
    if (dateIndex !== -1) {
      newHeatMapData[dateIndex].value += 1
    } else {
      newHeatMapData.push({ date: dateFormatted, value: 1 })
    }
  }
  return (
    <>
      <HourlyBarChart data={eventHourlyArray} />
      <Heatmap data={newHeatMapData} startDate={new Date('2024-06-24')} endDate={new Date()} />
    </>
  )
}
