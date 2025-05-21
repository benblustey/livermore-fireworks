import HourlyBarChart from './HourlyChartComponent'
import Calendar from './CalendarComponent'
import { getPayload } from 'payload'
import config from '@payload-config'

export const DataVisualization = async () => {
  const payload = await getPayload({ config })
  const data = await payload.find({ collection: 'events', limit: 1000 })
  const calls = await payload.find({ collection: 'calls', limit: 1000 })

  // for (const call of calls.docs) {
  //   console.log('call: ', call)
  // }

  const calendarData: { date: string; value: number }[] = []

  const eventHourlyArray = Array.from({ length: 24 }).map((_, hour) => ({ hour, value: 0 }))

  for (const event of data.docs) {
    const eventHour = new Date(event.eventDate).getHours()
    eventHourlyArray[eventHour].value += 1
    const dateFormatted = new Date(event.eventDate).toISOString().split('T')[0]
    const dateIndex = calendarData.findIndex((item) => item.date === dateFormatted)
    if (dateIndex !== -1) {
      calendarData[dateIndex].value += 1
    } else {
      calendarData.push({ date: dateFormatted, value: 1 })
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto mb-12">
      <HourlyBarChart data={eventHourlyArray} />
      <Calendar data={calendarData} startDate={new Date('2024-06-01')} endDate={new Date()} />
    </div>
  )
}
