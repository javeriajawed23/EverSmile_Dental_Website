"use client";
import { Menu, Phone, Smile, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <Smile className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl max-sm:hidden font-bold text-gray-900">
                EverSmile Dental
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-pink-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              Treatments
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact + CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>(555) 987-6543</span>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600">
              Book Your Visit
            </Button>

            {/* Mobile Menu Button */}
            <Button
              className="bg-white hover:bg-white md:hidden p-2 text-gray-700 hover:text-pink-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <Link
            href="/"
            className="block text-gray-900 hover:text-pink-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-pink-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="block text-gray-700 hover:text-pink-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Treatments
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-pink-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <span>(555) 987-6543</span>
          </div>
          <Button className="w-full bg-pink-500 hover:bg-pink-600">
            Book Your Visit
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
