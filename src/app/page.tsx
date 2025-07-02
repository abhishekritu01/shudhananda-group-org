'use client';
import VolunteerList from './bloodbank/volunteerList/page';
import ListDonors from "@/app/bloodbank/listdonors/page";

export default function HomePage() {
  return (
    <main>

      <VolunteerList />
      <ListDonors />

    </main>
  );
}