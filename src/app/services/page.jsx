"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Phone,
  Clock,
  Shield,
  Heart,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Camera,
  Wrench,
  Baby,
  Stethoscope,
  Activity,
  Eye,
} from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      id: "general",
      title: "Comprehensive Checkups",
      icon: <Stethoscope className="h-6 w-6 text-pink-500" />,
      description: "Thorough dental examinations for a healthy smile",
      services: [
        {
          name: "Routine Cleaning & Exams",
          description:
            "Keep your teeth sparkling and healthy with regular checkups",
          features: [
            "Deep cleaning",
            "Plaque removal",
            "Oral health screening",
            "Digital X-rays",
          ],
          duration: "45-60 mins",
          price: "$100-150",
        },
        {
          name: "Preventive Treatments",
          description: "Protect your teeth and prevent future issues",
          features: [
            "Fluoride application",
            "Dental sealants",
            "Custom mouth guards",
            "Oral hygiene tips",
          ],
          duration: "30-45 mins",
          price: "$50-100",
        },
        {
          name: "Fillings & Minor Repairs",
          description: "Restore damaged teeth quickly and comfortably",
          features: [
            "Tooth-colored fillings",
            "Emergency repairs",
            "Painless procedures",
            "Durable materials",
          ],
          duration: "30-60 mins",
          price: "$120-300",
        },
      ],
    },
    {
      id: "cosmetic",
      title: "Smile Enhancements",
      icon: <Star className="h-6 w-6 text-pink-500" />,
      description: "Enhance your smile with aesthetic and cosmetic treatments",
      services: [
        {
          name: "Teeth Whitening",
          description: "Brighten your smile with safe and effective whitening",
          features: [
            "In-office whitening",
            "Take-home kits",
            "Long-lasting results",
            "Safe for enamel",
          ],
          duration: "60-90 mins",
          price: "$350-550",
        },
        {
          name: "Veneers",
          description: "Perfectly shaped veneers for a flawless smile",
          features: [
            "Custom design",
            "Natural look",
            "Stain-resistant",
            "Durable",
          ],
          duration: "2-3 visits",
          price: "$900-1500 per tooth",
        },
        {
          name: "Bonding & Repairs",
          description: "Fix chips, gaps, and imperfections quickly",
          features: [
            "Same-day treatment",
            "Natural color match",
            "Minimal prep",
            "Quick recovery",
          ],
          duration: "30-60 mins",
          price: "$250-500",
        },
      ],
    },
    {
      id: "restorative",
      title: "Restorative Solutions",
      icon: <Wrench className="h-6 w-6 text-pink-500" />,
      description: "Repair and restore damaged or missing teeth",
      services: [
        {
          name: "Crowns & Bridges",
          description:
            "Strong and natural-looking restorations for damaged teeth",
          features: [
            "Custom color match",
            "Durable materials",
            "Comfortable fit",
            "Same-day options",
          ],
          duration: "2-3 visits",
          price: "$800-1400 per crown",
        },
        {
          name: "Dental Implants",
          description: "Permanent tooth replacement for a natural smile",
          features: [
            "Titanium implants",
            "Long-lasting solution",
            "Preserves jawbone",
            "Natural appearance",
          ],
          duration: "3-6 months",
          price: "$2500-5000 per implant",
        },
        {
          name: "Dentures",
          description:
            "Partial or full dentures for comfortable tooth replacement",
          features: [
            "Custom fit",
            "Natural look",
            "Improved chewing",
            "Durable materials",
          ],
          duration: "4-6 weeks",
          price: "$1000-3000",
        },
      ],
    },
    {
      id: "pediatric",
      title: "Kids & Teens Care",
      icon: <Baby className="h-6 w-6 text-pink-500" />,
      description: "Gentle, specialized dental care for children and teens",
      services: [
        {
          name: "Children's Cleanings",
          description: "Kid-friendly cleaning and checkups",
          features: [
            "Gentle techniques",
            "Fluoride treatments",
            "Fun environment",
            "Oral health education",
          ],
          duration: "25-40 mins",
          price: "$70-100",
        },
        {
          name: "Dental Sealants",
          description: "Protect teeth from cavities with painless sealants",
          features: [
            "Long-lasting protection",
            "Quick application",
            "Insurance-covered options",
            "Safe for kids",
          ],
          duration: "15-25 mins",
          price: "$40-60 per tooth",
        },
        {
          name: "Pediatric Braces",
          description: "Early orthodontics to guide proper teeth alignment",
          features: [
            "Growth guidance",
            "Custom braces",
            "Phase treatment",
            "Monitoring progress",
          ],
          duration: "12-24 months",
          price: "$2500-5500",
        },
      ],
    },
  ];

  const technologies = [
    {
      name: "Digital X-Rays",
      description: "Sharp images with minimal radiation exposure",
      icon: <Camera className="h-8 w-8 text-pink-500" />,
    },
    {
      name: "Same-Day Crowns",
      description: "Custom crowns created in just one visit",
      icon: <Zap className="h-8 w-8 text-pink-500" />,
    },
    {
      name: "Laser Dentistry",
      description: "Faster, comfortable, and minimally invasive treatments",
      icon: <Activity className="h-8 w-8 text-pink-500" />,
    },
    {
      name: "3D Imaging",
      description: "Advanced planning for precise dental care",
      icon: <Eye className="h-8 w-8 text-pink-500" />,
    },
  ];

  const insuranceProviders = [
    "Delta Dental",
    "Cigna",
    "Aetna",
    "MetLife",
    "Blue Cross Blue Shield",
    "Humana",
    "Guardian",
    "Principal",
    "United Healthcare",
    "Anthem",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Gentle & Modern Dental Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Offering a full spectrum of dental treatments with comfort,
              precision, and care for patients of all ages.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="general" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center space-y-2 p-4 data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700"
                >
                  {category.icon}
                  <span className="text-sm font-medium">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="space-y-8"
              >
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.services.map((service, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow duration-300"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{service.price}</Badge>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">
                            Includes:
                          </h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2 text-sm text-gray-600"
                              >
                                <CheckCircle className="h-4 w-4 text-pink-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                          Schedule Appointment
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
              Advanced Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Cutting-Edge Dental Equipment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our modern tools ensure accurate diagnoses and comfortable
              treatments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing & Insurance */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
                  Easy & Affordable
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Flexible Payment Options
                </h2>
                <p className="text-lg text-gray-600">
                  We believe everyone deserves a healthy smile. That’s why we
                  offer simple, stress-free payment plans and insurance support.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Wide Insurance Coverage
                    </h3>
                    <p className="text-gray-600">
                      Accepted by most leading providers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Monthly Installments
                    </h3>
                    <p className="text-gray-600">
                      Budget-friendly options for every patient.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Special Memberships
                    </h3>
                    <p className="text-gray-600">
                      Exclusive discounts for uninsured patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Insurance Partners
                </h3>
                <p className="text-gray-600">
                  We work closely with trusted providers to make dental care
                  simple and accessible.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-700"
                  >
                    <Shield className="h-4 w-4 text-pink-500" />
                    <span>{provider}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                Verify Coverage
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
                Emergency Care
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Urgent Dental Help
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Same-day appointments and after-hours care for dental
                emergencies.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 space-y-4">
                <Phone className="h-10 w-10 text-pink-500 mx-auto" />
                <h3 className="text-xl font-bold text-gray-900">Call Now</h3>
                <p className="text-gray-600">24/7 emergency dental hotline</p>
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-50"
                >
                  (555) 123-4567
                </Button>
              </Card>
              <Card className="p-6 space-y-4">
                <Clock className="h-10 w-10 text-pink-500 mx-auto" />
                <h3 className="text-xl font-bold text-gray-900">
                  Immediate Visits
                </h3>
                <p className="text-gray-600">
                  Slots reserved for urgent cases daily
                </p>
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-50"
                >
                  Book Now
                </Button>
              </Card>
              <Card className="p-6 space-y-4">
                <Heart className="h-10 w-10 text-pink-500 mx-auto" />
                <h3 className="text-xl font-bold text-gray-900">
                  Fast Pain Relief
                </h3>
                <p className="text-gray-600">
                  Immediate care for toothaches and injuries
                </p>
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-50"
                >
                  Get Help
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
