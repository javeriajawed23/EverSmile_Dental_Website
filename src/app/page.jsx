import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Clock,
  Users,
  Award,
  Shield,
  Heart,
  Smile,
  Zap,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Smile className="h-8 w-8 text-pink-500" />,
      title: "Family Dentistry",
      description:
        "Personalized care for every age — from regular cleanings to preventive treatments.",
      features: ["Routine Checkups", "Cavity Fillings", "Digital X-rays", "Oral Exams"],
    },
    {
      icon: <Zap className="h-8 w-8 text-pink-500" />,
      title: "Cosmetic Enhancements",
      description:
        "Brighten and perfect your smile with our advanced cosmetic dental solutions.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Design"],
    },
    {
      icon: <Shield className="h-8 w-8 text-pink-500" />,
      title: "Restorative Solutions",
      description:
        "Restore confidence with treatments that bring back strength and natural beauty.",
      features: ["Dental Implants", "Crowns & Bridges", "Root Canals", "Dentures"],
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Children’s Dentistry",
      description:
        "Gentle, fun, and stress-free dental visits designed just for kids.",
      features: ["Fluoride Care", "Sealants", "Kid-Friendly Cleanings", "Education"],
    },
  ];

  const testimonials = [
    {
      name: "Ayesha Khan",
      rating: 5,
      text: "The EverSmile team made me feel completely at ease during my treatment. My smile has never looked better!",
      treatment: "Smile Makeover",
    },
    {
      name: "Daniel Lee",
      rating: 5,
      text: "Professional, caring, and modern. EverSmile truly raised my expectations for dental care.",
      treatment: "Cosmetic Dentistry",
    },
    {
      name: "Hina Patel",
      rating: 5,
      text: "My children actually look forward to their dental visits now! Such a welcoming and caring environment.",
      treatment: "Pediatric Care",
    },
  ];

  const stats = [
    { number: "20+", label: "Years of Expertise" },
    { number: "7000+", label: "Smiles Restored" },
    { number: "99%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Emergency Support" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
                  💖 EverSmile Dental Care
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  A Healthier Smile, A Happier You
                </h1>
                <p className="text-xl text-gray-600">
                  At EverSmile, we combine compassion with innovation to give you gentle,
                  personalized care in a modern and relaxing space.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
                  Book an Appointment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-50"
                >
                  Explore Services
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Trusted by Families</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl h-80 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto">
                      <Smile className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Care You Can Trust
                    </h3>
                    <p className="text-gray-600">Advanced treatments with a gentle touch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-pink-500">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
              Our Care
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Complete Smile Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it’s preventive, cosmetic, or restorative, we ensure every
              patient leaves with a brighter, healthier smile.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-50"
            >
              See All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
                  Why EverSmile?
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Dental Care with Heart
                </h2>
                <p className="text-lg text-gray-600">
                  Our focus is on making every patient feel cared for, while using
                  cutting-edge technology for the best results.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                    <p className="text-gray-600">
                      Skilled professionals dedicated to exceptional patient outcomes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovative Care</h3>
                    <p className="text-gray-600">
                      Latest techniques and technology for precise treatment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Compassionate Approach</h3>
                    <p className="text-gray-600">
                      We listen, understand, and treat every patient with empathy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  7000+ Happy Patients
                </h3>
                <p className="text-gray-600">Smiles we are proud to care for</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">
              Patient Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hear from Our Patients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-pink-400 text-pink-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.treatment}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let’s Create Your Dream Smile
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step toward a
              healthier mouth and a confident smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
                Book Appointment
              </Button>
              <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
                Call (555) 987-6543
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
