'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaRegSadCry } from "react-icons/fa";

interface Event {
    _id?: string;
    date: string;
    location: string;
    description: string;
    image?: string;
}

const UpcomingEvents: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editEventId, setEditEventId] = useState<string | null>(null);

    const [formData, setFormData] = useState<Event>({
        date: '',
        location: '',
        description: '',
        image: ''
    });

    const fetchEvents = async () => {
        try {
            const res = await axios.get("/api/upcommingEvents");
            setEvents(res.data);
        } catch (err) {
            console.error("Error fetching events:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleEdit = (event: Event) => {
        setFormData(event);
        setEditEventId(event._id || null);
        setIsEditing(true);
        setShowForm(true);
    };

    const handleDelete = async (id?: string) => {
        if (!id) return;

        const confirmDelete = window.confirm("Are you sure you want to delete this event?");
        if (!confirmDelete) return;

        try {
            await axios.delete("/api/upcommingEvents", {
                data: { id },
            });
            setEvents(prev => prev.filter(e => e._id !== id));
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };

    const handleSubmit = async () => {
        try {
            if (isEditing && editEventId) {
                // PUT request with id in body
                await axios.put("/api/upcommingEvents", {
                    id: editEventId,
                    ...formData
                });
            } else {
                // POST request
                await axios.post("/api/upcommingEvents", formData);
            }

            await fetchEvents();

            setShowForm(false);
            setFormData({ date: '', location: '', description: '', image: '' });
            setIsEditing(false);
            setEditEventId(null);
        } catch (error) {
            console.error("Error saving event:", error);
        }
    };

    const noEventsTemplate = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full">
                <FaRegSadCry className="text-red-600 text-6xl mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-4">No Blood Donation Camps Right Now</h3>
                <p className="text-gray-600 mb-6">Please stay tuned — new camps will be announced soon!</p>
                <div className="bg-gradient-to-r from-red-600 to-red-900 text-white py-3 px-6 rounded-lg font-medium">
                    Stay Connected & Save Lives
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-gray-50 min-h-[500px] px-4">
            <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">
                Upcoming Blood Donation Camps & Events
            </h2>

            <div className="flex justify-end mb-2 max-w-6xl w-full mx-auto">
                <button
                    onClick={() => {
                        setShowForm(true);
                        setIsEditing(false);
                        setFormData({ date: '', location: '', description: '', image: '' });
                    }}
                    className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Add Event
                </button>
            </div>

            {showForm && (
                <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50">
                    <div className="bg-white text-black p-6 rounded-lg shadow-xl w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-4">
                            {isEditing ? 'Edit Event' : 'Add New Event'}
                        </h3>
                        <div className="space-y-4">
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                placeholder="Location"
                                className="w-full p-2 border rounded"
                            />
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Description"
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                placeholder="Image URL (optional)"
                                className="w-full p-2 border rounded"
                            />
                            <div className="flex justify-end gap-4 pt-2">
                                <button
                                    onClick={() => {
                                        setShowForm(false);
                                        setIsEditing(false);
                                        setEditEventId(null);
                                    }}
                                    className="px-4 py-2 border rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="px-4 py-2 bg-green-600 text-white rounded"
                                >
                                    {isEditing ? 'Update' : 'Save'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {loading ? (
                <p className="text-gray-600">Loading events...</p>
            ) : events.length === 0 ? (
                noEventsTemplate
            ) : (
                <div className="overflow-x-auto w-full max-w-6xl ml-45">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-left">
                        <thead className="bg-red-600 text-white">
                            <tr>
                                <th className="py-3 px-4">Date</th>
                                <th className="py-3 px-4">Location</th>
                                <th className="py-3 px-4">Description</th>
                                <th className="py-3 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event) => (
                                <tr key={event._id} className="border-t border-gray-200 hover:bg-gray-100 transition">
                                    <td className="py-3 px-4 text-black">{event.date}</td>
                                    <td className="py-3 px-4 text-black">{event.location}</td>
                                    <td className="py-3 px-4 text-black">{event.description}</td>
                                    <td className="py-3 px-4 flex justify-center gap-4">
                                        <button
                                            onClick={() => handleEdit(event)}
                                            className="text-blue-600 hover:text-blue-800"
                                            title="Edit"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(event._id)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Delete"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default UpcomingEvents;

