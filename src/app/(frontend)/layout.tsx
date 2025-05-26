import React from 'react'
import './globals.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <script
          defer
          src="https://stats.henhousesolutions.com/script.js"
          data-website-id="e326f3e8-01a8-49b5-b76d-1716fb40a41a"
        ></script>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
