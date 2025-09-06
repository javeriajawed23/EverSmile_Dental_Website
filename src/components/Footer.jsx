import { Clock, MapPin, Phone, Smile } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                <Smile className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">EverSmile Dental</span>
            </div>
            <p className="text-pink-100">
              Creating brighter, healthier smiles with gentle care and modern
              technology since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-pink-100">
              <div>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About EverSmile
                </Link>
              </div>
              <div>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Our Treatments
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Our Services</h3>
            <div className="space-y-2 text-pink-100">
              <div>Preventive Care</div>
              <div>Smile Enhancements</div>
              <div>Restorative Solutions</div>
              <div>Kids’ Dentistry</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-2 text-pink-100">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 987-6543</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>456 Smile St, HappyTown, ST 67890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat: 9AM - 7PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pink-800 mt-12 pt-8 text-center text-pink-200">
          <p>&copy; 2024 EverSmile Dental. Brightening Smiles Everyday.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
