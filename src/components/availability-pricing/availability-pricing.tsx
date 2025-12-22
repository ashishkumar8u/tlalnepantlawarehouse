"use client";

import { warehouseConfig } from "@/config/warehouse-content";
import { CheckCircle2, Calendar, DollarSign, FileText } from "lucide-react";

export default function AvailabilityPricing() {
  const availability = warehouseConfig.availability;

  return (
    <section className="py-16 lg:py-24" id="availability">
      <div className="container  xl:max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl mb-3  md:mb-6 text-[#173C65] fw-bold font-libre ">
            Availability & Pricing
          </h2>
          <p className="text-sm  md:text-base text-gray-600 md:max-w-3xl w-[94%] mx-auto leading-relaxed font-['Assistant',sans-serif]">
            Ready to move in immediately. Flexible pricing options to suit your
            business needs.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl md:p-6 p-5 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr">
            {/* Availability Status */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-gray-300 h-full">
              <div className="md:w-16 md:h-16 h-10 w-10 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="md:w-10 md:h-10 w-6 h-6 text-white" />
              </div>
              <h3
                className="md:text-xl text-base font-bold mb-2"
                style={{
                  color: "#173C65",
                  fontFamily: "Libre Baskerville, Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {availability.status}
              </h3>
              <p
                className="text-sm text-gray-600 flex-grow"
                style={{
                  fontFamily: "Assistant, sans-serif",
                }}
              >
                {availability.statusText}
              </p>
            </div>

            {/* Pricing */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-gray-300 h-full">
              <div
                className="md:w-16 md:h-16 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#173C65" }}
              >
                <DollarSign className="md:w-10 md:h-10 w-6 h-6 text-white" />
              </div>
              <h3
                className="md:text-xl text-base font-bold mb-2"
                style={{
                  color: "#173C65",
                  fontFamily: "Libre Baskerville, Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {availability.pricing}
              </h3>
              <p
                className="text-sm text-gray-600 flex-grow"
                style={{
                  fontFamily: "Assistant, sans-serif",
                }}
              >
                {availability.pricingModel}
              </p>
            </div>

            {/* Lease Terms */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-300 h-full">
              <div
                className="md:w-16 md:h-16 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#173C65" }}
              >
                <Calendar className="md:w-10 md:h-10 w-6 h-6 text-white" />
              </div>
              <h3
                className="md:text-xl text-base font-bold mb-2"
                style={{
                  color: "#173C65",
                  fontFamily: "Libre Baskerville, Georgia, serif",
                  fontWeight: 400,
                }}
              >
                Lease Terms
              </h3>
              <p
                className="text-sm text-gray-600 flex-grow"
                style={{
                  fontFamily: "Assistant, sans-serif",
                }}
              >
                {availability.leaseTerms}
              </p>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gray-300 h-full">
              <div
                className="md:w-16 md:h-16 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#173C65" }}
              >
                <FileText className="md:w-10 md:h-10 w-6 h-6 text-white" />
              </div>
              <h3
                className="md:text-xl text-basefont-bold mb-2 text-center"
                style={{
                  color: "#173C65",
                  fontFamily: "Libre Baskerville, Georgia, serif",
                  fontWeight: 400,
                }}
              >
                Get Quote
              </h3>
              <a
                href="#contact"
                className="px-6 py-2 rounded-lg font-semibold text-sm font-['Assistant',sans-serif]
             border-2 border-[#173C65] bg-white text-black text-nowrap
             transition-all duration-300
             hover:bg-[#173C65] hover:text-white
             hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
