'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

// ✅ Updated: bloodGroup is now an array
interface BloodRequest {
    _id: string;
    name: string;
    phone: string;
    bloodGroup: string[]; // changed from string to string[]
    units: number;
    state: string;
    city: string;
    description: string;
    createdAt: string;
    seen?: boolean;
}

export default function BloodRequestDetails() {
    const { id } = useParams();
    const [data, setData] = useState<BloodRequest | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`/api/blood-request/${id}`).then((res) => setData(res.data));
        }
    }, [id]);

    if (!data) return <p>Loading...</p>;

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4 text-red-600">Request Details</h1>
            <div className="bg-white p-6 rounded shadow-md space-y-2">
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Blood Groups:</strong> {data.bloodGroup.join(', ')}</p> {/* ✅ updated */}
                <p><strong>Units:</strong> {data.units}</p>
                <p><strong>Phone:</strong> {data.phone}</p>
                <p><strong>City:</strong> {data.city}</p>
                <p><strong>State:</strong> {data.state}</p>
                <p><strong>Description:</strong> {data.description}</p>
                <p><strong>Requested At:</strong> {new Date(data.createdAt).toLocaleString('en-IN')}</p>
            </div>
        </div>
    );
}
