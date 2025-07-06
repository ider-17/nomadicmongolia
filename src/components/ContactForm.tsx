"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null)

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    })

    const [isSending, setIsSending] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formRef.current || isSending) return

        setIsSending(true)

        const currentTime = new Date().toLocaleString()

        const templateParams = {
            ...formData,
            time: currentTime,
        }

        emailjs
            .send(
                "service_419zplj",
                "template_wkeqv94",
                templateParams,
                "RzxKXZNXvNqyObtir"
            )
            .then(() => {
                toast.success("Message sent successfully!")
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                })
            })
            .catch((error) => {
                toast.error("Error: " + error.text)
            })
            .finally(() => {
                setIsSending(false)
            })
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm space-y-6"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-black">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-black">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm"
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
                    required
                    className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-black">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-black">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 w-full px-3 py-2 text-sm border text-black border-gray-300 rounded-md shadow-sm"
                />
            </div>

            <button
                type="submit"
                disabled={isSending}
                className={`w-full text-sm font-medium border border-black py-2 px-4 rounded-md transition
                    ${isSending
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-black text-white hover:bg-neutral-800 active:text-black active:bg-white"
                    }`}
            >
                {isSending ? "Sending..." : "Send Message"}
            </button>
        </form>
    )
}
