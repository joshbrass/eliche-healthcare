
// import {DataTable} from '@/components/table/DataTable'
// import StatCard from '@/components/StatCard'
// import { getRecentAppointmentList } from '@/lib/actions/appointment.action'
// import Image from 'next/image'
// import Link from 'next/link'
// import { columns} from '@/components/table/columns'



   

// const Admin = async () => {
    
//     const appointments = await getRecentAppointmentList()
//     console.log(appointments);
//   return (
//     <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
//       <header className='admin-header'>
//         <Link href='/' className='cursor-pointer'>
//             <Image
//                 src='/assets/icons/logo-full.png'
//                 height={32}
//                 width={162}
//                 alt='logo'
//                 className='h-8 w-fit'
//             />
//         </Link>
//         <p className='text-16-semibold'> Admin Dashboard</p>
//       </header>
//       <main className='admin-main'>
//         <section className='w-full space-y-4'>
//         <h1 className='header'>Welcome </h1>
//         <p className='text-dark-700'>Start the day with managing your appointment</p>
//         </section>
//         <section className='admin-stat'>
//         <StatCard
//             type='appointments'
//             count={appointments?.scheduledCount ?? 0}
//             label='Scheduled appointment'
//             icon='/assets/icons/appointments.svg'
//           />
//           <StatCard
//             type='pending'
//             count={appointments?.pendingCount ?? 0}
//             label='Pending appointment'
//             icon='/assets/icons/pending.svg'
//           />
//           <StatCard
//             type='cancelled'
//             count={appointments?.cancelledCount ?? 0}
//             label='Cancelled appointment'
//             icon='/assets/icons/cancelled.svg'
//           />
//         </section> 
//         <DataTable columns={columns} data={appointments.documents} />
        

//       </main>
//     </div>
//   )
// }

// export default Admin




import { DataTable } from '@/components/table/DataTable'
import StatCard from '@/components/StatCard'
import { getRecentAppointmentList } from '@/lib/actions/appointment.action'
import Image from 'next/image'
import Link from 'next/link'
import { columns } from '@/components/table/columns'

// Define the type for appointments
interface Appointment {
  scheduledCount: number;
  pendingCount: number;
  cancelledCount: number;
  documents: any[]; // Update with the correct type for your document data if available
}

const Admin = async () => {
  try {
    const appointments: Appointment | null = await getRecentAppointmentList();

    return (
      <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
        <header className='admin-header'>
          <Link href='/' className='cursor-pointer'>
            <Image
              src='/assets/icons/logo-full.png'
              height={32}
              width={162}
              alt='logo'
              className='h-8 w-fit'
            />
          </Link>
          <p className='text-16-semibold'> Admin Dashboard</p>
        </header>
        <main className='admin-main'>
          <section className='w-full space-y-4'>
            <h1 className='header'>Welcome </h1>
            <p className='text-dark-700'>Start the day with managing your appointment</p>
          </section>
          <section className='admin-stat'>
            <StatCard
              type='appointments'
              count={appointments?.scheduledCount ?? 0}
              label='Scheduled appointment'
              icon='/assets/icons/appointments.svg'
            />
            <StatCard
              type='pending'
              count={appointments?.pendingCount ?? 0}
              label='Pending appointment'
              icon='/assets/icons/pending.svg'
            />
            <StatCard
              type='cancelled'
              count={appointments?.cancelledCount ?? 0}
              label='Cancelled appointment'
              icon='/assets/icons/cancelled.svg'
            />
          </section>
          <DataTable
            columns={columns}
            data={appointments?.documents || []} // Provide an empty array if appointments.documents is undefined
          />
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error fetching appointments:", error)
    return <div>Error loading data. Please try again later.</div>
  }
}

export default Admin
