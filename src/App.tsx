import React, { lazy, Suspense, useState } from 'react';
import {
  Building2,
  Phone,
  MapPin,
  Mail,
  CheckCircle2,
  Home,
  Key,
  Banknote,
  Car,
  Facebook,
  Twitter,
  ArrowUp,
  Menu,
  X,
} from 'lucide-react';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeToggle } from './components/ThemeToggle';
import { AvailabilityClock } from './components/AvailabilityClock';
import { ContactForm } from './components/ContactForm';

// Lazy load images component
const LazyImage = lazy(() => import('./components/LazyImage'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const propertyTypes = [
    {
      type: '1 Bedroom Apartments',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    },
    {
      type: '2 Bedroom Apartments',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80',
    },
    {
      type: 'Business Shops',
      image:
        'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&q=80',
    },
    {
      type: 'Bedsitters',
      image:
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80',
    },
    {
      type: 'Single Rooms',
      image:
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80',
    },
    {
      type: 'Student Hostels',
      image:
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80',
    },
    {
      type: 'Commercial Spaces',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    },
    {
      type: 'Premium Properties',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Ringbelt Estate Agents
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <AvailabilityClock />
              <ThemeToggle />
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              {/* Desktop navigation */}
              <div className="hidden md:flex space-x-8">
                <a href="#properties" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                  Properties
                </a>
                <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                  Services
                </a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-col space-y-4">
                <a
                  href="#properties"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Properties
                </a>
                <a
                  href="#services"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add a spacer div to prevent content from being hidden under the navbar */}
      <div className="h-16"></div>

      {/* Quick Contact Bar */}
      <div className="bg-blue-600 dark:bg-blue-700 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <a
              href="tel:+254707016042"
              className="flex items-center hover:text-blue-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              Office: +254 707046253
            </a>
            <a
              href="tel:+254XXXXXXXXX"
              className="flex items-center hover:text-blue-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              Director (John Nyingi): +254 721398816
            </a>
            <a
              href="https://wa.me/254721398816"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-[600px] bg-gray-200 dark:bg-gray-800 animate-pulse" />}>
            <LazyImage
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80"
              alt="Nyeri Landscape"
              className="w-full h-[600px] object-cover"
            />
          </Suspense>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Trusted Property Management Partner in Nyeri
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional property management, real estate sales, and vehicle
              trading services. Let us handle your property while you focus on
              what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-center"
              >
                I'm a Landlord
              </a>
              <a
                href="#properties"
                className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
              >
                I'm Looking to Rent
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Property Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From property management to sales, we offer end-to-end real estate
              services in Nyeri and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Key className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
                title: 'Property Management',
                description:
                  'Professional rent collection, tenant screening, and property maintenance services',
                image:
                  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
              },
              {
                icon: <Home className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
                title: 'Real Estate Sales',
                description:
                  'Expert guidance in buying and selling land and properties in prime locations',
                image:
                  'https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&q=80',
              },
              {
                icon: <Car className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
                title: 'Vehicle Trading',
                description:
                  'Trusted vehicle sales and purchase services with verified documentation',
                image:
                  'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
              >
                <Suspense fallback={<div className="w-full h-64 bg-gray-200 dark:bg-gray-700 animate-pulse" />}>
                  <LazyImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    {service.icon}
                    <h3 className="text-xl font-semibold ml-2">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property Types Section */}
      <div id="properties" className="py-24 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Available Properties
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We manage a diverse portfolio of properties to suit every need and
              budget
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {propertyTypes.map((property, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Suspense fallback={<div className="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse" />}>
                  <LazyImage
                    src={property.image}
                    alt={property.type}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg mb-2">
                    {property.type}
                  </h3>
                  <button className="text-sm bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    View Available
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse" />}>
            <LazyImage
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
              alt="Office Background"
              className="w-full h-full object-cover"
            />
          </Suspense>
          <div className="absolute inset-0 bg-blue-900 dark:bg-blue-800 opacity-90"></div>
        </div>

        <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Property Owners Trust Us
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Join hundreds of satisfied property owners who rely on our
              professional management services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Timely rent collection and remittance',
              'Professional tenant screening',
              'Regular property maintenance',
              '24/7 emergency response',
              'Transparent financial reporting',
              'Competitive management fees',
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white dark:bg-gray-800 bg-opacity-10 p-4 rounded-lg"
              >
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Visit Our Office
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Main Office - Nyeri Town</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Kimathi Way, Nyeri
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/-1.2812288,36.9426432/ringbelt+real+estate+agency/@-0.8557595,36.780079,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x182867006bb91649:0xc5e16e934b6ee3d2!2m2!1d36.9518288!2d-0.4216805?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">Office: +254 707046253</p>
                    <p className="text-gray-600 dark:text-gray-300">Director: +254 721398816</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <a
                    href="mailto:info@nyingiproperties.co.ke"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    info@nyingiproperties.co.ke
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://wa.me/254721398816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">
                  Nyingi Properties
                </span>
              </div>
              <p className="mt-4 max-w-xs">
                Your trusted property management partner in Nyeri, Kenya.
                Licensed and insured.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Property Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Real Estate Sales
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Vehicle Trading
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Properties</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Residential
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Commercial
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Land
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} Ringbelt Estate Agents. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;