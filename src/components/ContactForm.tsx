"use client"

import { useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-black">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-black/80"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-black">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-black/80"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-black">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-black/80"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-black">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-black/80"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-black">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-black/80"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full text-sm font-medium py-2 px-4 bg-black text-white rounded-md hover:bg-neutral-800 transition"
            >
                Send Message
            </button>
        </form>
    );
}
