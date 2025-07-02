'use client';

import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

interface BloodGroupEntry {
    group: string;
    units: number;
    _id?: string;
}

interface BloodRequest {
    _id: string;
    name: string;
    phone: string;
    bloodGroup: BloodGroupEntry[]; // ✅ array of objects
    units: number;
    state: string;
    city: string;
    description: string;
    createdAt: string;
    seen?: boolean;
}

export default function BloodRequestsPage() {
    const [requests, setRequests] = useState<BloodRequest[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get<BloodRequest[]>('/api/blood-request');
                setRequests(res.data);
            } catch (err) {
                console.error('Failed to load requests:', err);
                setError('Error loading requests');
            }
            finally {
                setLoading(false);
            }
        };
        fetchRequests();
    }, []);

    const filteredRequests = useMemo(() => {
        const term = searchTerm.toLowerCase();
        return requests.filter((r) =>
            r.name.toLowerCase().includes(term) ||
            r.phone.includes(term) ||
            r.city.toLowerCase().includes(term) ||
            r.state.toLowerCase().includes(term) ||
            r.description.toLowerCase().includes(term) ||
            r.bloodGroup.some(bg => bg.group.toLowerCase().includes(term))
        );
    }, [searchTerm, requests]);

    if (loading) return <p className="p-10 text-center">Loading requests...</p>;
    if (error) return <p className="p-10 text-center text-red-500">{error}</p>;

    return (
        <main className="min-h-screen bg-gray-50 p-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-black">🩸 Blood Requests List</h1>
            </div>

            {/* 🔍 Search Input */}
            <input
                type="text"
                placeholder="Search by name, phone, group, city, state, or description..."
                className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* 📋 Blood Request Table */}
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white text-sm">
                    <thead className="bg-red-600 text-white">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Phone</th>
                            <th className="px-6 py-3">Blood Group(s)</th>
                            <th className="px-6 py-3">Total Units</th>
                            <th className="px-6 py-3">State</th>
                            <th className="px-6 py-3">City</th>
                            <th className="px-6 py-3">Description</th>
                            <th className="px-6 py-3">Requested At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRequests.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center py-4 text-gray-500">
                                    No requests found.
                                </td>
                            </tr>
                        ) : (
                            filteredRequests.map((req) => (
                                <tr key={req._id} className="border-b hover:bg-gray-100">
                                    <td className="px-6 py-3">{req.name}</td>
                                    <td className="px-6 py-3">{req.phone}</td>
                                    <td className="px-6 py-3">
                                        {req.bloodGroup.map((bg) => `${bg.group} (${bg.units})`).join(', ')}
                                    </td>
                                    <td className="px-6 py-3">{req.units}</td>
                                    <td className="px-6 py-3">{req.state}</td>
                                    <td className="px-6 py-3">{req.city}</td>
                                    <td className="px-6 py-3">{req.description}</td>
                                    <td className="px-6 py-3">
                                        {new Date(req.createdAt).toLocaleString('en-IN')}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
