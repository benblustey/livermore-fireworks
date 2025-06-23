import { MigrateUpArgs } from '@payloadcms/db-mongodb'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  console.log('Finding themes without _order values...')

  try {
    const { docs } = await payload.find({
      collection: 'ordinances',
      where: { _order: { exists: false } },
      req,
    })

    console.log(`Found ${docs.length} themes without _order values`)

    let successCount = 0
    let errorCount = 0

    for (const doc of docs) {
      try {
        await payload.update({
          collection: 'ordinances',
          id: doc.id,
          data: {},
          req,
        })
        console.log(`Updated theme ${doc.id} with orderable value`)
        successCount++
      } catch (error) {
        console.error(`Failed to update theme ${doc.id}:`, error)
        errorCount++
      }
    }

    console.log(`Updates complete: ${successCount} successful, ${errorCount} failed`)
  } catch (error) {
    console.error('Error finding or updating themes:', error)
  }
}
