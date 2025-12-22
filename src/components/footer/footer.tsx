'use client';

import Image from 'next/image';
import { warehouseConfig } from '@/config/warehouse-content';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { logo } from '@/assets';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--gray-dark)] text-white">
      <div className="container lg:max-w-7xl w-[94%] mx-auto  py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src={logo}
                alt="NEWMARK Logo"
                width={150}
                height={38}
                className="h-6 w-auto brightness-0 invert"
              />
            </div>
            <p
              className="text-gray-300 text-sm leading-relaxed mb-4"
            >
              Premium Class A industrial warehouse facilities in strategic locations across Mexico. Your partner for logistics excellence.
            </p>
            <a
              href={`https://${warehouseConfig.brand.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>{warehouseConfig.brand.website}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Locations', 'Features', 'Specifications', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                    style={{
                      fontFamily: 'Assistant, sans-serif',
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
            >
              Contact
            </h4>
            <ul className="space-y-3">
              {warehouseConfig.contact?.phoneNumber && (
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  <a
                    href={`tel:${warehouseConfig.contact.phoneNumber.replace(/\s|-|\(|\)/g, '')}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                    style={{
                      fontFamily: 'Assistant, sans-serif',
                    }}
                  >
                    {warehouseConfig.contact.phoneNumber}
                  </a>
                </li>
              )}
              {warehouseConfig.contact?.email && (
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  <a
                    href={`mailto:${warehouseConfig.contact.email}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                    style={{
                      fontFamily: 'Assistant, sans-serif',
                    }}
                  >
                    {warehouseConfig.contact.email}
                  </a>
                </li>
              )}
              {warehouseConfig.locations.addresses[0] && (
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  <span
                    className="text-sm text-gray-300"
                    style={{
                      fontFamily: 'Assistant, sans-serif',
                    }}
                  >
                    {warehouseConfig.locations.addresses[0].address.split(',')[0]}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
            >
              Our Locations
            </h4>
            <ul className="space-y-2">
              {warehouseConfig.locations.addresses.map((location, index) => (
                <li key={index}>
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                    style={{
                      fontFamily: 'Assistant, sans-serif',
                    }}
                  >
                    <span>{location.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
            <h4
              className="text-sm text-center md:text-start font-semibold mb-3"
            >
              Disclaimer
            </h4>
          <p
            className="text-xs text-gray-400 leading-relaxed"
            style={{
              fontFamily: 'Assistant, sans-serif',
            }}
          >
            {warehouseConfig.disclaimer}
          </p>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {warehouseConfig.legal?.privacyPolicyUrl && (
                <a
                  href={warehouseConfig.legal.privacyPolicyUrl}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                  style={{
                    fontFamily: 'Assistant, sans-serif',
                  }}
                >
                  Privacy Policy
                </a>
              )}
              {warehouseConfig.legal?.termsConditionsUrl && (
                <>
                  <span className="text-gray-600">|</span>
                  <a
                    href={warehouseConfig.legal.termsConditionsUrl}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                    style={{
                      fontFamily: 'Assistant, sans-serif',
                    }}
                  >
                    Terms & Conditions
                  </a>
                </>
              )}
            </div>
            <p
              className="text-sm text-gray-400 text-center md:text-right "
            >
              © {currentYear} {warehouseConfig.brand.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

