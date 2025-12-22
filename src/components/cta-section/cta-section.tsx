'use client';

import { warehouseConfig } from '@/config/warehouse-content';

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white" id="cta-section">
      <div className="container xl:max-w-7xl w-[94%] mx-auto">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-xl lg:text-2xl xl:text-3xl mb-3 md:mb-6 text-[#173C65] font-bold font-['Libre_Baskerville',Georgia,serif]">
            Ready to Get Started?
          </h2>
          
          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-['Assistant',sans-serif]">
            Explore our Class A warehouse facilities and discover how we can support your business operations.
          </p>

          {/* CTA Button */}
          <div className="flex w-1/2 md:w-[94%] flex-col sm:flex-row gap-4 justify-center items-center mx-auto">
  <a
    href={warehouseConfig.ctas.primary.link}
    className="cta inline-block px-8 lg:py-4 py-2 rounded-lg font-semibold text-base transition-all duration-300 hover:opacity-90 w-full sm:w-auto border-2 bg-white text-black border-[#173C65] font-['Assistant',sans-serif] hover:bg-[#173C65] hover:text-white hover:-translate-y-1 hover:shadow-lg text-center"
  >
    {warehouseConfig.ctas.primary.text}
  </a>
</div>

        </div>
      </div>
    </section>
  );
}