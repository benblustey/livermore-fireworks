import React from 'react'
import './globals.css'

export const metadata = {
  description: 'Analytical data for Livermore Fireworks',
  title: 'Livermore Fireworks',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const websiteStatsURL = process.env.DATA_WEBSITE_URL
  const websiteStatsID = process.env.DATA_WEBSITE_ID

  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <script
          defer
          src={websiteStatsURL}
          data-website-id={websiteStatsID}
        ></script>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
