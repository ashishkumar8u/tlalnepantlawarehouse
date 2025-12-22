'use client';

import Banner from '@/components/banner/banner';
import Apartments from '@/components/apartments/apartments';
import Locations from '@/components/locations/locations';
import LocationComparison from '@/components/location-comparison/location-comparison';
import PropertySpecification from '@/components/property/property';
import IdealFor from '@/components/ideal-for/ideal-for';
import Gallery from '@/components/gallery/gallery';
import AvailabilityPricing from '@/components/availability-pricing/availability-pricing';
import LeadForm from '@/components/lead-form/lead-form';
import ContactMethods from '@/components/contact-methods/contact-methods';
import CTASection from '@/components/cta-section/cta-section';

export default function Home() {
  return (
    <main>
      <Banner />
      <Apartments />
      <LocationComparison />
      <CTASection />
      <Locations />
      <IdealFor />
      <PropertySpecification/>
       <AvailabilityPricing />
      <Gallery />
      
      <LeadForm />
      <ContactMethods />
    </main>
  );
}
