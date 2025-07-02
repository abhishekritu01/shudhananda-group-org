'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import axios from 'axios';
import { Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface BloodGroupEntry {
    group: string;
    units: number;
}

interface BloodRequest {
    _id: string;
    name: string;
    phone: string;
    bloodGroup: BloodGroupEntry[];
    units: number;
    state: string;
    city: string;
    description: string;
    createdAt: string;
    seen?: boolean;
}

export default function Navbar() {
    const [requests, setRequests] = useState<BloodRequest[]>([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get<BloodRequest[]>('/api/blood-request');
                setRequests(res.data);
            } catch (err) {
                console.error('Failed to fetch blood requests:', err); // ✅ used
            }
        };
        fetchRequests();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowNotifications(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const unseenCount = useMemo(() => {
        return requests.filter((r) => !r.seen).length;
    }, [requests]);

    const latestRequests = useMemo(() => {
        return [...requests]
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 5);
    }, [requests]);

    const toggleNotifications = async () => {
        const wasClosed = !showNotifications;
        setShowNotifications((prev) => !prev);

        if (wasClosed && unseenCount > 0) {
            try {
                await axios.post('/api/blood-request/seen');
                setRequests((prev) => prev.map((r) => ({ ...r, seen: true })));
            } catch (err) {
                console.error('Failed to mark requests as seen:', err); // ✅ used
            }
        }
    };

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white border-b shadow z-50">
            <Link href="/bloodbank/bloodlist">
                <h1 className="text-xl font-semibold text-red-600">🩸 Blood Bank</h1>
            </Link>

            <div className="relative" ref={dropdownRef}>
                <button onClick={toggleNotifications} className="relative">
                    <Bell className="w-7 h-7 text-red-600" />
                    {unseenCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5">
                            {unseenCount}
                        </span>
                    )}
                </button>

                {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white border shadow-lg rounded-md z-50">
                        <div className="p-3 border-b font-semibold text-gray-700">Latest Requests</div>
                        <ul className="max-h-60 overflow-y-auto">
                            {latestRequests.length > 0 ? (
                                latestRequests.map((req) => (
                                    <li
                                        key={req._id}
                                        className="p-3 border-b text-sm hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setShowNotifications(false);
                                            router.push(`/bloodbank/bloodlist/request/${req._id}`);
                                        }}
                                    >
                                        <div className={`font-medium ${!req.seen ? 'text-red-600' : 'text-gray-700'}`}>
                                            {req.name}{' '}
                                            (
                                            {req.bloodGroup
                                                .map((bg) => `${bg.group} (${bg.units})`)
                                                .join(', ')}
                                            )
                                        </div>
                                        <div className="text-gray-600 text-xs">
                                            {req.city}, {req.state}
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            {new Date(req.createdAt).toLocaleString('en-IN')}
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="p-3 text-center text-gray-500 text-sm">
                                    No requests found
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
