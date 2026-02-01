"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useLanguage } from "@/app/context/LanguageContext";

// FormData интерфэйс тодорхойлох
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  //   tourTitle: string;
}

interface BuyTravelProps {
  data?: {
    _id: string;
    titleIt: string;
    titleEn: string;
    slug: string;
  };
}

const BuyTravel: React.FC<BuyTravelProps> = ({ data }) => {
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Форм цэвэрлэх функц
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Форм илгээх handleSubmit функц
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Заавал бөглөх талбаруудыг шалгах
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email форматыг шалгах
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (isSending) return;

    setIsSending(true);

    const currentTime = new Date().toLocaleString();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: currentTime,
      tourTitle: data?.titleEn,
    };

    try {
      const response = await emailjs.send(
        "service_419zplj", // Таны service ID
        "template_wkeqv94", // Таны template ID
        templateParams,
        "RzxKXZNXvNqyObtir" // Таны user ID
      );

      // console.log('EmailJS Response: ', response)
      toast.success("Message sent successfully!");
      resetForm(); // Форм цэвэрлэх
      setIsDialogOpen(false); // Dialog хаах
    } catch (error: any) {
      // console.error("EmailJS Error: ", error)
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <button
          className="w-[80%] flex justify-self-center justify-center py-2 px-4 mt-4
    bg-gray-400
    backdrop-blur-md  
    border border-white/30
    text-white
    font-semibold
    rounded-full
    shadow-lg
    hover:bg-white/30
    hover:text-gray-800
    hover:border-green-400
    active:bg-white/30
    active:text-gray-800
    transition-all duration-300
    cursor-pointer
  "
        >
          {language === "it"
            ? `Book ${data?.titleIt}`
            : `Book ${data?.titleEn}`}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <form ref={formRef} onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Book Your Travel</DialogTitle>
            <DialogDescription>
              Fill out the form to book your travel. We&apos;ll get back to you
              soon.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your travel plans..."
              />
            </div>
          </div>
          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={isSending}
              className="bg-[#2fa147] hover:bg-white border border-white hover:border-[#2fa147] hover:text-[#2fa147] active:bg-white active:border-[#2fa147] active:text-[#2fa147]"
            >
              {isSending ? "Sending..." : "Book Travel"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BuyTravel;
