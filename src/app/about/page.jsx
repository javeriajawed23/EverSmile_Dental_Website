"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Shield, Heart, Smile } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Olivia Martinez",
      role: "Founder & Chief Dentist",
      credentials: "DDS, MS",
      experience: "16+ years",
      specialties: ["Cosmetic Dentistry", "Implantology", "Preventive Care"],
      bio: "Dr. Martinez is committed to creating confident smiles. She trained at Stanford School of Dentistry and has dedicated over 16 years to patient-focused care.",
      image:
        "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Dr. Ethan Brooks",
      role: "Pediatric Specialist",
      credentials: "DDS, Pediatric Dentistry",
      experience: "11+ years",
      specialties: ["Children's Dentistry", "Orthodontics", "Preventive Care"],
      bio: "Dr. Brooks makes dental visits enjoyable for young patients. His gentle approach ensures kids develop healthy dental habits early.",
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Dr. Ava Li",
      role: "Oral Surgery Expert",
      credentials: "DDS, Oral Surgery",
      experience: "13+ years",
      specialties: ["Oral Surgery", "Complex Extractions", "Implants"],
      bio: "Dr. Li brings advanced surgical precision to every procedure. She completed her residency at Johns Hopkins and excels in complex oral surgeries.",
      image:
        "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Caring Service",
      description:
        "We prioritize empathy and compassion in every interaction, making patients feel valued and understood.",
    },
    {
      icon: <Shield className="h-8 w-8 text-pink-400" />,
      title: "Quality & Safety",
      description:
        "Our clinic maintains the highest standards in dental safety and clinical excellence at every visit.",
    },
    {
      icon: <Users className="h-8 w-8 text-pink-300" />,
      title: "Community Commitment",
      description:
        "We are dedicated to supporting our local community and fostering long-term relationships with patients.",
    },
    {
      icon: <Award className="h-8 w-8 text-pink-600" />,
      title: "Innovation & Growth",
      description:
        "We embrace ongoing education and modern technology to provide advanced, reliable dental care.",
    },
  ];

  const milestones = [
    {
      year: "2009",
      event: "Clinic Launched",
      description:
        "Dr. Martinez founded EverSmile Dental with a vision of modern, patient-centered care",
    },
    {
      year: "2013",
      event: "Digital Upgrade",
      description:
        "Introduced advanced digital imaging and CAD/CAM technology for superior treatment experience",
    },
    {
      year: "2016",
      event: "Team Expansion",
      description:
        "Added new specialists to offer comprehensive care for patients of all ages",
    },
    {
      year: "2019",
      event: "Modern Facility",
      description:
        "Renovated the clinic with state-of-the-art equipment and a welcoming environment",
    },
    {
      year: "2021",
      event: "Patient Milestone",
      description:
        "Served over 6,000 patients, providing exceptional care and comfort",
    },
    {
      year: "2025",
      event: "Community Recognition",
      description:
        "Awarded 'Top Dental Clinic' by local health organizations for our dedication and quality",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-pink-900">
              Smiles Designed for You
            </h1>
            <p className="text-xl text-pink-700 max-w-3xl mx-auto">
              For over 16 years, EverSmile Dental has been delivering personalized dental care. Explore our story and meet the dedicated team behind our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-900">
                  Our Journey
                </h2>
                <p className="text-lg text-pink-700">
                  EverSmile Dental began with a mission to provide gentle, modern dental care in a welcoming environment. What started as a small clinic has grown into a comprehensive center serving thousands of patients.
                </p>
                <p className="text-lg text-pink-700">
                  By embracing advanced techniques and technologies, we ensure every patient receives the highest quality care, helping them achieve healthy, confident smiles.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-pink-500">16+</div>
                  <div className="text-pink-700">Years of Expertise</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-pink-500">6000+</div>
                  <div className="text-pink-700">Satisfied Patients</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <Smile className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink-900">
                  Patient-Focused Approach
                </h3>
                <p className="text-pink-700">
                  Every choice we make revolves around the comfort and wellbeing of our patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
              Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-900">
              What Guides Us
            </h2>
            <p className="text-xl text-pink-700 max-w-3xl mx-auto">
              Our principles drive how we care for patients, innovate treatments, and engage with our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-pink-900">
                    {value.title}
                  </h3>
                  <p className="text-pink-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
              Meet Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-900">
              Experienced Professionals
            </h2>
            <p className="text-xl text-pink-700 max-w-3xl mx-auto">
              Our dedicated team combines expertise with compassion to deliver personalized care to every patient.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-pink-900">
                        {member.name}
                      </h3>
                      <p className="text-pink-500 font-medium">{member.role}</p>
                      <p className="text-sm text-pink-600">
                        {member.credentials} • {member.experience}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-pink-700 text-center">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-900">
              Key Milestones
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-pink-900 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-pink-700">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Experience the EverSmile advantage. Book your appointment today and join our growing family of happy patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-pink-500 hover:bg-pink-100"
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                className="bg-white text-pink-500 hover:bg-pink-100"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
