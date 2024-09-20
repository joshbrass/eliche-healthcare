import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientsForm from "@/components/forms/PatientsForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";


export default async function NewAppointment({ params: {userId}}: SearchParamProps) {
    const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src='/assets/icons/logo-full.png'
            height={100}
            width={100}
            alt="patient"
            className="mb-12 h-15 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
            setOpen= 'false'
          
          />
          
           <p className="copyrigt mt-10 py-12">
            © 2024 eliche healthcare
            </p>
           
        </div> 
      </section> 
      <Image
        src='/assets/images/appointment-img.png'
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      /> 
    </div>
  );
}
