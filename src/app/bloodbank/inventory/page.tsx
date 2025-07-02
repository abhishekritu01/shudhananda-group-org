'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // ✅ Add this at the top


const bloodTypes = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+", "A2", "A2B"];

interface BloodStock {
    bloodGroup: string;
    units: number;
}

const BloodRequestTable = () => {
    const [unitsRequested, setUnitsRequested] = useState<Record<string, number>>(
        bloodTypes.reduce((acc, type) => ({ ...acc, [type]: 0 }), {})
    );
    const [showModal, setShowModal] = useState(false);
    const [bloodStock, setBloodStock] = useState<BloodStock[]>([]);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        state: '',
        city: '',
        description: '',
    });

    useEffect(() => {
        fetch('/api/blood-stock')
            .then((res) => res.json())
            .then((data) => setBloodStock(data))
            .catch((err) => console.error('Failed to load blood stock:', err));
    }, []);

    const checkAvailability = (type: string, requested: number) => {
        const stockEntry = bloodStock.find((s) => s.bloodGroup === type);
        if (requested <= 0) return { message: "", color: "" };
        if (stockEntry) {
            if (stockEntry.units <= 0) {
                return { message: "❌ Not available", color: "text-red-600" };
            }
            if (stockEntry.units >= requested) {
                return { message: "✅ Available", color: "text-green-600" };
            } else {
                return {
                    message: `❌ Only ${stockEntry.units} unit(s) available`,
                    color: "text-red-600"
                };
            }
        }
        return { message: "❌ Not available", color: "text-red-600" };
    };

    const handleChange = (type: string, value: number) => {
        setUnitsRequested((prev) => ({
            ...prev,
            [type]: value < 0 ? 0 : value
        }));
    };

    const handleOpenForm = () => {
        const selectedGroups = bloodTypes.filter(type => unitsRequested[type] > 0);
        if (selectedGroups.length === 0) {
            alert("Please select at least one blood group with units.");
            return;
        }
        setShowModal(true);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const selectedGroups = bloodTypes.filter(type => unitsRequested[type] > 0);
        const selectedUnits = selectedGroups.map(type => unitsRequested[type]);

        if (
            !formData.name.trim() ||
            !formData.phone.trim() ||
            !formData.state.trim() ||
            !formData.city.trim() ||
            !formData.description.trim() ||
            selectedGroups.length === 0 ||
            selectedUnits.some(u => isNaN(u) || u <= 0)
        ) {
            alert("All required fields must be filled properly.");
            return;
        }

        // ✅ Construct correct bloodGroup array
        const bloodGroup = selectedGroups.map((group, i) => ({
            group,
            units: selectedUnits[i]
        }));

        const payload = {
            ...formData,
            bloodGroup,
        };

        try {
            const res = await fetch('/api/blood-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (res.ok) {
                alert('Blood request submitted successfully!');
                setShowModal(false);
                setUnitsRequested(bloodTypes.reduce((acc, type) => ({ ...acc, [type]: 0 }), {}));
                setFormData({
                    name: '',
                    phone: '',
                    state: '',
                    city: '',
                    description: '',
                });
            } else {
                alert(data.message || 'Submission failed.');
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    };

    const selectedGroups = bloodTypes.filter(type => unitsRequested[type] > 0);
    const selectedUnits = selectedGroups.map(type => unitsRequested[type]);
    const bloodGroup = selectedGroups.map((group, i) => ({
        group,
        units: selectedUnits[i]
    }));

    return (
        <div className="min-h-screen flex flex-col md:flex-row relative">
            <div className="w-full md:w-1/2 bg-gray-50 p-6 flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 w-full max-w-2xl h-full flex flex-col">
                    <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
                        🩸 Request Blood Units
                    </h2>

                    <div className="overflow-y-auto flex-1">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-gray-700 border-b border-gray-100">
                                    <th className="py-2">Blood Type</th>
                                    <th className="py-2">Units</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bloodTypes.map((type) => {
                                    const availability = checkAvailability(type, unitsRequested[type]);
                                    return (
                                        <tr key={type} className="hover:bg-gray-50">
                                            <td className="py-2">{type}</td>
                                            <td className="py-2">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={unitsRequested[type]}
                                                    onChange={(e) => handleChange(type, parseInt(e.target.value) || 0)}
                                                    className="w-20 text-center border rounded-md px-2 py-1 text-sm"
                                                />
                                                <p className={`text-xs mt-1 ${availability.color}`}>
                                                    {availability.message}
                                                </p>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <button
                        onClick={handleOpenForm}
                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full"
                    >
                        Submit Selected Request
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/2 h-screen sticky top-0 hidden md:block">
                <Image
                    src="/home-02.jpg"
                    alt="Donate Blood"
                    width={1920}
                    height={1080}
                    className="w-full h-screen object-cover"
                />

            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-center text-red-600">Blood Request Form</h3>
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                            <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border p-2 rounded-md" />
                            <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border p-2 rounded-md" />
                            <input type="text" disabled value={bloodGroup.map(bg => `${bg.group} (${bg.units})`).join(', ')} className="w-full border p-2 rounded-md bg-gray-100" />
                            <input type="text" placeholder="State" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="w-full border p-2 rounded-md" />
                            <input type="text" placeholder="City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full border p-2 rounded-md" />
                            <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full border p-2 rounded-md" />
                            <div className="flex justify-between">
                                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Submit</button>
                                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-600">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BloodRequestTable;
