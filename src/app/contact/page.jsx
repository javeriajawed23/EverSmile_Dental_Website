"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Calendar,
  Users,
  CheckCircle,
  MessageCircle,
  Navigation,
  Car,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    isNewPatient: true,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const officeHours = [
    { day: "Monday", hours: "9:00 AM - 7:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 7:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 7:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 7:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "(555) 987-6543",
      description: "Reach us during office hours",
      action: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "info@eversmile.com",
      description: "Send us a message anytime",
      action: "Send Email",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Text",
      value: "(555) 987-6543",
      description: "Quick questions via text",
      action: "Send Text",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Online Booking",
      value: "Available 24/7",
      description: "Schedule your visit online",
      action: "Book Now",
    },
  ];

  const faqs = [
    {
      question: "Do you accept my insurance?",
      answer:
        "We collaborate with most major insurance providers. Please contact us to confirm your coverage before your visit.",
    },
    {
      question: "What should I bring for my first visit?",
      answer:
        "Bring a valid ID, insurance cards, list of medications, and any previous dental records if available.",
    },
    {
      question: "Can I get emergency dental care?",
      answer:
        "Yes! We provide urgent care appointments and a dedicated emergency line for immediate assistance.",
    },
    {
      question: "How frequently should I schedule cleanings?",
      answer:
        "Most patients benefit from visits every 6 months, though your dentist may recommend a different schedule based on your needs.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-pink-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Book Your EverSmile Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Taking care of your smile is our top priority. Reach out to
              schedule your appointment or ask any questions about our
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the method that’s most convenient for you. We're always
              ready to assist!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {method.title}
                    </h3>
                    <p className="text-pink-500 font-medium">{method.value}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-pink-500 text-pink-500 hover:bg-pink-50"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form & Office Info */}
      <section className="bg-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Appointment Form */}
            <Card className="p-8">
              <CardHeader className="px-0">
                <CardTitle className="text-2xl">
                  Reserve Your Visit
                </CardTitle>
                <CardDescription className="text-base">
                  Complete the form below, and our team will reach out to confirm
                  your appointment.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cleaning">Routine Cleaning</SelectItem>
                        <SelectItem value="consultation">
                          New Patient Consultation
                        </SelectItem>
                        <SelectItem value="emergency">Emergency Care</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                        <SelectItem value="restorative">Restorative Care</SelectItem>
                        <SelectItem value="pediatric">Pediatric Dentistry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          handleInputChange("preferredDate", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) =>
                          handleInputChange("preferredTime", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9am">9:00 AM</SelectItem>
                          <SelectItem value="10am">10:00 AM</SelectItem>
                          <SelectItem value="11am">11:00 AM</SelectItem>
                          <SelectItem value="1pm">1:00 PM</SelectItem>
                          <SelectItem value="2pm">2:00 PM</SelectItem>
                          <SelectItem value="3pm">3:00 PM</SelectItem>
                          <SelectItem value="4pm">4:00 PM</SelectItem>
                          <SelectItem value="5pm">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Share any special requests or concerns..."
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newPatient"
                      checked={formData.isNewPatient}
                      onChange={(e) =>
                        handleInputChange("isNewPatient", e.target.checked)
                      }
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="newPatient" className="text-sm">
                      I am a new patient
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-lg py-3"
                  >
                    Request Appointment
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We’ll reach out within 24 hours to confirm your visit.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              {/* Location & Hours */}
              <Card className="p-6">
                <CardHeader className="px-0">
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-pink-500" />
                    <span>Our Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">EverSmile Dental</p>
                    <p className="text-gray-600">
                      456 Smile Street
                      <br />
                      Suite 300
                      <br />
                      Cityville, ST 67890
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 border-pink-500 text-pink-500 hover:bg-pink-50"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>Get Directions</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <Car className="h-4 w-4" />
                      <span>Parking Info</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="p-6">
                <CardHeader className="px-0">
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-pink-500" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-900">
                          {schedule.day}
                        </span>
                        <span
                          className={`text-sm ${
                            schedule.hours === "Closed"
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-pink-100 rounded-lg">
                    <p className="text-sm text-pink-700">
                      <strong>Emergency Care:</strong> Available 24/7 - Call our
                      emergency line for urgent dental issues.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="p-6">
                <CardHeader className="px-0">
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-pink-500" />
                    <span>What to Expect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Comprehensive Exam</p>
                        <p className="text-sm text-gray-600">
                          Complete evaluation of your oral health
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Digital X-Rays</p>
                        <p className="text-sm text-gray-600">
                          Modern imaging for accurate diagnosis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Personalized Plan</p>
                        <p className="text-sm text-gray-600">
                          Tailored treatment recommendations for your needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Insurance Assistance</p>
                        <p className="text-sm text-gray-600">
                          We help verify your coverage and benefits
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Common Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need more info?</p>
            <Button className="bg-pink-500 hover:bg-pink-600">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
