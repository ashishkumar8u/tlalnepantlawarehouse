'use client';

import { useState } from 'react';
import { warehouseConfig } from '@/config/warehouse-content';
import { MapPin, ExternalLink } from 'lucide-react';

export default function ProjectLocation() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const locations = warehouseConfig.locations.addresses;

  // Convert Google Maps share link to embed URL
  const getEmbedUrl = (shareLink: string) => {
    // Extract coordinates or place ID from share link
    // For now, using a generic embed - you may need to update with actual coordinates
    return shareLink.replace('/maps.app.goo.gl/', '/www.google.com/maps/embed?pb=');
  };

  return (
    <section className="py-16 lg:py-24 bg-white" id="location">
      <div className="container xl:max-w-7xl  mx-auto ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-[#173C65] font-['Libre_Baskerville',Georgia,serif] font-normal"
          
          >
            Warehouse Locations
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Assistant',sans-serif]"
            
          >
            Strategically located warehouses in prime industrial zones. Choose the location that best fits your operational needs.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {locations.map((location, index) => (
          <button
            key={index}
            onClick={() => setSelectedLocation(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 font-['Assistant',sans-serif] ${
              selectedLocation === index
                ? 'text-white shadow-lg bg-[#173C65]'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
              {location.name}
            </button>
          ))}
        </div>

        {/* Map and Details */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Section */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d-99.2!3d19.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMwJzAwLjAiTiA5OcKwMTInMDAuMCJX!5e0!3m2!1sen!2smx!4v1234567890`}
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${locations[selectedLocation].name} Location Map`}
            />
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-[#173C65]" />
                <div>
                <h3
                  className="font-bold text-lg mb-1"
                  style={{
                    color: '#173C65',
                    fontFamily: 'Libre Baskerville, Georgia, serif',
                    fontWeight: 400
                  }}
                >
                  {locations[selectedLocation].name}
                </h3>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{
                      fontFamily: 'Assistant, sans-serif',
                    }}
                  >
                    {locations[selectedLocation].address}
                  </p>
                </div>
              </div>
              <a
                href={locations[selectedLocation].mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
                style={{
                  color: '#173C65',
                  fontFamily: 'Assistant, sans-serif',
                }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location Details */}
          <div>
            <h3
              className="text-2xl font-bold mb-6"
              style={{
                color: '#173C65',
                fontFamily: 'Libre Baskerville, Georgia, serif',
                fontWeight: 400
              }}
            >
              Location Details
            </h3>
            <div className="space-y-6">
              <div>
                <h4
                  className="font-semibold mb-3 text-lg"
                  style={{
                    color: '#173C65',
                    fontFamily: 'Libre Baskerville, Georgia, serif',
                    fontWeight: 400
                  }}
                >
                  Key Advantages
                </h4>
                <ul className="space-y-2">
                  {locations[selectedLocation].usps.map((usp, uspIndex) => (
                    <li
                      key={uspIndex}
                      className="flex items-start gap-2 text-gray-700"
                      style={{
                        fontFamily: 'Assistant, sans-serif',
                      }}
                    >
                      <span className="mt-1 text-[#173C65]">•</span>
                      <span>{usp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  className="font-semibold mb-3 text-lg"
                  style={{
                    color: '#173C65',
                    fontFamily: 'Libre Baskerville, Georgia, serif',
                    fontWeight: 400
                  }}
                >
                  Ideal For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {locations[selectedLocation].idealFor.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#EFF6FF] text-[#173C65] font-['Assistant',sans-serif]"
                   
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}