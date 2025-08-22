import {prisma} from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data : {
      id: '68bdcb5e-d28e-4f6c-9c33-96c9d948a2b7',
      title: 'Evento de programação', 
      slug: 'programacao-event', 
      details: 'Um evento para dev back-end e front-end',
      maximunAttendees: 120
    }
  })
}


seed().then(() => {
  console.log('Database seeded')
  prisma.$disconnect()
})