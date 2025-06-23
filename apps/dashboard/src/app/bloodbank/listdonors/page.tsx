'use client';

import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

interface Donor {
  _id: string;
  name: string;
  email: string;
  phone: string;
  bloodGroup: string;
  location: string;
}

export default function DonorsPage() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // New states for search, sort, and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'bloodGroup' | 'location' | ''>('');
  const [filterBloodGroup, setFilterBloodGroup] = useState<string>('');

  useEffect(() => {
    async function fetchDonors() {
      try {
        const response = await axios.get<Donor[]>('/api/listDonors');
        setDonors(response.data);
      } catch (err) {
        setError('Failed to load donors');
      } finally {
        setLoading(false);
      }
    }
    fetchDonors();
  }, []);

  // Memoize filtered and sorted donors for performance
  const filteredAndSortedDonors = useMemo(() => {
    let filtered = donors;

    // Filter by blood group if selected
    if (filterBloodGroup) {
      filtered = filtered.filter(
        (donor) => donor.bloodGroup.toLowerCase() === filterBloodGroup.toLowerCase()
      );
    }

    // Search filter (name, email, or location)
    if (searchTerm.trim() !== '') {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (donor) =>
          donor.name.toLowerCase().includes(lowerSearch) ||
          donor.email.toLowerCase().includes(lowerSearch) ||
          donor.location.toLowerCase().includes(lowerSearch)
      );
    }

    // Sort
    if (sortBy) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[sortBy] || '';
        const bVal = b[sortBy] || '';
        return aVal.localeCompare(bVal);
      });
    }

    return filtered;
  }, [donors, searchTerm, sortBy, filterBloodGroup]);

  if (loading) return <p>Loading donors...</p>;
  if (error) return <p>{error}</p>;

  // Unique blood groups for filter dropdown
  const uniqueBloodGroups = Array.from(new Set(donors.map(d => d.bloodGroup))).sort();

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6 text-black">🩸 Blood Bank Donors List</h1>

      {/* Controls: Search, Sort, Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 space-y-4 md:space-y-0">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by name, email, or location"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search donors"
        />

        {/* Sort By */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          aria-label="Sort donors"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="bloodGroup">Blood Group</option>
          <option value="location">Location</option>
        </select>

        {/* Filter by Blood Group */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          value={filterBloodGroup}
          onChange={(e) => setFilterBloodGroup(e.target.value)}
          aria-label="Filter by blood group"
        >
          <option value="">Filter by Blood Group</option>
          {uniqueBloodGroups.map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white text-sm text-left text-black">
          <thead className="bg-red-600 text-black">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Blood Group</th>
              <th className="px-6 py-3">Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedDonors.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No donors found.
                </td>
              </tr>
            ) : (
              filteredAndSortedDonors.map((donor) => (
                <tr key={donor._id} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-4">{donor.name}</td>
                  <td className="px-6 py-4">{donor.email}</td>
                  <td className="px-6 py-4">{donor.phone}</td>
                  <td className="px-6 py-4">{donor.bloodGroup}</td>
                  <td className="px-6 py-4">{donor.location}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
