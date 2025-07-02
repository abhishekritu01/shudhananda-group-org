'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface BloodStock {
    _id: string;
    bloodGroup: string;
    units: number;
    updatedAt: string;
}

const BloodStockTable = () => {
    const [stock, setStock] = useState<BloodStock[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStock = async () => {
            try {
                const res = await axios.get<BloodStock[]>('/api/blood-stock');
                setStock(res.data);
            } catch (error) {
                console.error('Failed to fetch blood stock:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStock();
    }, []);

    return (
        <div className="min-h-screen bg-red-50 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-red-700 mb-4 text-center">
                    🩸 Current Blood Stock Levels
                </h1>

                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : stock.length === 0 ? (
                    <p className="text-center text-gray-500">No stock data available.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
                            <thead className="bg-red-600 text-white">
                                <tr>
                                    <th className="px-4 py-3">Blood Group</th>
                                    <th className="px-4 py-3">Units Available</th>
                                    <th className="px-4 py-3">Last Updated</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stock.map((item) => (
                                    <tr
                                        key={item._id}
                                        className="border-t hover:bg-red-50 transition duration-200"
                                    >
                                        <td className="px-4 py-3 font-semibold">{item.bloodGroup}</td>
                                        <td className="px-4 py-3">{item.units}</td>
                                        <td className="px-4 py-3 text-gray-500">
                                            {new Date(item.updatedAt).toLocaleString('en-IN')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BloodStockTable;
