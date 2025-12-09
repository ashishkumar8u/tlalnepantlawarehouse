"use client";

import { warehouseConfig } from "@/config/warehouse-content";
import {
  CheckCircle2,
  MapPin,
  Truck,
  Building2,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { warehouseLoc1, warehouseLoc2 } from "@/assets";

export default function LocationComparison() {
  const locations = warehouseConfig.locations.addresses;
  const locationImages = [warehouseLoc1, warehouseLoc2];

  return (
    <section className="py-16 lg:py-24 bg-white" id="locations">
      <div className="container max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#173C65] font-['Libre_Baskerville',Georgia,serif] font-normal">
            Choose Your Ideal Location
          </h2>
        
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Assistant',sans-serif]">
            A strategic location, optimized for operational efficiency. Discover
            how it can perfectly support your business needs.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="flex flex-col w-[70%] mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Location Header */}
              <div
                className={`p-6 border-b border-gray-200 flex-shrink-0 min-h-[180px] flex flex-col justify-between ${
                  index === 0 ? "bg-[#EFF6FF]" : "bg-[#F0F9FF]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 flex-shrink-0 text-[#173C65]" />
                    <h3 className="text-2xl font-bold text-[#173C65] font-['Libre_Baskerville',Georgia,serif] font-normal">
                      {location.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 font-['Assistant',sans-serif]">
                    {location.address}
                  </p>
                </div>
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity mt-auto text-[#173C65] font-['Assistant',sans-serif]"
                >
                  <span>View on Map</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Warehouse Image */}
              {locationImages[index] && (
                <div className="relative w-full h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={locationImages[index]}
                    alt={`${location.name} warehouse`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Map Section */}
              <div className="p-6 border-t border-gray-200 flex-shrink-0 min-h-[320px] flex flex-col">
                <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 mb-4 flex-shrink-0">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d-99.2!3d19.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMwJzAwLjAiTiA5OcKwMTInMDAuMCJX!5e0!3m2!1sen!2smx!4v1234567890`}
                    width="100%"
                    height="250"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} Location Map`}
                  />
                </div>
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity flex-shrink-0 text-[#173C65] font-['Assistant',sans-serif]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Unique Selling Points */}
              <div className="p-6 border-t border-gray-200 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Truck className="w-5 h-5 text-[#173C65]" />
                  <h4 className="text-lg font-bold text-[#173C65] font-['Libre_Baskerville',Georgia,serif] font-normal">
                    Key Advantages
                  </h4>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {location.usps.map((usp, uspIndex) => (
                    <li key={uspIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-['Assistant',sans-serif]">
                        {usp}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-[#173C65]" />
                  <h4 className="text-lg font-bold text-[#173C65] font-['Libre_Baskerville',Georgia,serif] font-normal">
                    Ideal For
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.idealFor.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#EFF6FF] text-[#173C65] font-['Assistant',sans-serif]"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
