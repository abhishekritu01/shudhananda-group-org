'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Volunteer {
    _id: string;
    name: string;
    email: string;
    phone: string;
    location: string;
    answer: string;
}

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchVolunteers = async () => {
            try {
                const res = await axios.get('/api/volunteer');
                setVolunteers(res.data);
            } catch (err) {
                console.error('Error fetching volunteers:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchVolunteers();
    }, []);

    const filteredVolunteers = volunteers.filter((vol) =>
        `${vol.name} ${vol.email} ${vol.phone} ${vol.location} ${vol.answer}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <section className="min-h-screen p-6 bg-red-50">
            <h1 className="text-3xl font-bold text-red-700 text-center mb-6">
                Volunteer List
            </h1>

            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Search by name, email, location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md p-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300 font-bold text-gray-500"
                />
            </div>

            {loading ? (
                <div className="text-center text-gray-600">Loading volunteers...</div>
            ) : filteredVolunteers.length === 0 ? (
                <div className="text-center text-gray-500">No matching volunteers found.</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border border-red-500 bg-white text-black rounded-lg overflow-hidden">
                        <thead className="bg-red-100 text-black">
                            <tr>
                                <th className="p-3 border border-red-500">Name</th>
                                <th className="p-3 border border-red-500">Email</th>
                                <th className="p-3 border border-red-500">Phone</th>
                                <th className="p-3 border border-red-500">Location</th>
                                <th className="p-3 border border-red-500">Why Volunteer?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVolunteers.map((vol) => (
                                <tr
                                    key={vol._id}
                                    className="text-center hover:bg-red-100 transition-colors"
                                >
                                    <td className="p-3 border border-red-500">{vol.name}</td>
                                    <td className="p-3 border border-red-500">{vol.email}</td>
                                    <td className="p-3 border border-red-500">{vol.phone}</td>
                                    <td className="p-3 border border-red-500">{vol.location}</td>
                                    <td className="p-3 border border-red-500 text-left">{vol.answer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default VolunteerList;
