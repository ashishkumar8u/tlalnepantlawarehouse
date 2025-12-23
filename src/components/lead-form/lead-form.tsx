'use client';

import { useMemo, useState } from 'react';
import { warehouseConfig } from '@/config/warehouse-content';

export default function LeadForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const apiHost = useMemo(() => {
    const host = process.env.NEXT_PUBLIC_API_HOST || '';
    return host.endsWith('/') ? host.slice(0, -1) : host;
  }, []);

  const clientId = useMemo(() => {
    return process.env.NEXT_PUBLIC_CLIENT_ID || '39f5fed7-e83c-498a-bf6f-48edb58a5e9f';
  }, []);

  const toNumberIfPossible = (value?: string) => {
    if (!value) return undefined;
    const cleaned = value.replace(/,/g, '').trim();
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : cleaned;
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    warehouseConfig.leadForm.fields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (field.type === 'email' && formData[field.name] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field.name])) {
        newErrors[field.name] = 'Please enter a valid email address';
      }
      if (field.type === 'tel' && formData[field.name] && !/^[\d\s\-\+\(\)]+$/.test(formData[field.name])) {
        newErrors[field.name] = 'Please enter a valid phone number';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setIsSubmitted(false);

    try {
      if (!apiHost) {
        throw new Error('API host is not configured.');
      }

      const payload = {
        client_id: clientId,
        form_data: {
          full_name: formData.fullName?.trim() || '',
          company_name: formData.companyName?.trim() || '',
          email: formData.email?.trim() || '',
          phone: formData.phone?.trim() || '',
          warehouse_size_sqft: toNumberIfPossible(formData.warehouseSize),
          preferred_location: formData.preferredLocation?.trim() || '',
          monthly_budget: toNumberIfPossible(formData.budget),
          lease_duration: formData.leaseDuration?.trim() || '',
          timeline_to_move_in: formData.timeline?.trim() || '',
          additional_information: formData.additionalNotes?.trim() || '',
        },
      };

      const response = await fetch(`${apiHost}/forms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result?.status === false) {
        throw new Error(result?.message || 'Failed to submit the form.');
      }
      
      // Reset form
      setFormData({});
      setIsSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      const message = error instanceof Error ? error.message : 'There was an error submitting the form. Please try again.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: typeof warehouseConfig.leadForm.fields[0]) => {
    const hasError = !!errors[field.name];
    const value = formData[field.name] || '';

    if (field.type === 'textarea') {
      return (
        <div key={field.name} className="w-full">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium mb-1.5 text-[var(--gray-dark)] font-['Assistant',sans-serif]"
          >
            {field.label}
            {field.required && <span className="ml-1 text-[#173C65]">*</span>}
          </label>
          <textarea
            id={field.name}
            name={field.name}
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value)}
            rows={3}
            className={`w-full px-3 py-2 rounded-lg border transition-all duration-200 font-['Assistant',sans-serif] text-[0.95rem] text-black bg-white ${
              hasError
                ? 'border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
            }`}
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
          {hasError && (
            <p className="mt-1 text-sm text-[#173C65] font-['Assistant',sans-serif]">
              {errors[field.name]}
            </p>
          )}
        </div>
      );
    }

    if (field.type === 'select') {
      return (
        <div key={field.name} className="w-full">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium mb-1.5 text-[var(--gray-dark)] font-['Assistant',sans-serif]"
          >
            {field.label}
            {field.required && <span className="ml-1 text-[#173C65]">*</span>}
          </label>
          <select
            id={field.name}
            name={field.name}
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={`w-full px-3 py-2 rounded-lg border transition-all duration-200 bg-white font-['Assistant',sans-serif] text-[0.95rem] text-black ${
              hasError
                ? 'border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
            }`}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {hasError && (
            <p className="mt-1 text-sm text-[#173C65] font-['Assistant',sans-serif]">
              {errors[field.name]}
            </p>
          )}
        </div>
      );
    }

    return (
      <div key={field.name} className="w-full">
        <label
          htmlFor={field.name}
          className="block text-sm font-medium mb-2 text-[var(--gray-dark)] font-['Assistant',sans-serif]"
        >
          {field.label}
          {field.required && <span className="text-blue-500 ml-1">*</span>}
        </label>
        <input
          type={field.type}
          id={field.name}
          name={field.name}
          value={value}
          onChange={(e) => handleChange(field.name, e.target.value)}
          className={`w-full px-4 md:py-3 py-1 rounded-lg border transition-all duration-200 font-['Assistant',sans-serif] text-[0.95rem] text-black bg-white ${
            hasError
              ? 'border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          }`}
          placeholder={`Enter ${field.label.toLowerCase()}`}
        />
        {hasError && (
          <p className="mt-1 text-sm text-blue-500 font-['Assistant',sans-serif]">
            {errors[field.name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white scroll-mt-20"
    >
      <div className="container max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-3 md:mb-12">
          <h2
            className="text-xl   lg:text-2xl xl:text-3xl  mb-4 text-[#173C65] fw-bold font-libre"
          >
            {warehouseConfig.leadForm.title}
          </h2>
          <p
            className="md:text-xl text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-['Assistant',sans-serif]"
          >
            {warehouseConfig.leadForm.subtitle}
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div
            className="mb-6 p-4 rounded-lg border-2 border-green-500 bg-green-50 font-['Assistant',sans-serif]"
          >
            <p className="text-green-700 font-medium text-center">
              ✅ Thank you! We've received your inquiry and will get back to you shortly.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div
            className="mb-6 p-4 rounded-lg border-2 border-red-500 bg-red-50 font-['Assistant',sans-serif]"
          >
            <p className="text-red-700 font-medium text-center">
              {submitError}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-5 md:p-6 lg:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {warehouseConfig.leadForm.fields.map((field) => {
              // Full-width fields (textarea and some others)
              if (field.type === 'textarea' || field.name === 'additionalNotes') {
                return (
                  <div key={field.name} className="md:col-span-2">
                    {renderField(field)}
                  </div>
                );
              }
              // Two-column layout for other fields
              return renderField(field);
            })}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 cursor-pointer rounded-lg font-semibold text-sm transition-all duration-200 w-full sm:w-auto min-w-[150px] disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 border-2 bg-white text-black border-[#173C65] font-['Assistant',sans-serif]"
            >
              {isSubmitting ? 'Submitting...' : warehouseConfig.ctas.primary.text}
            </button>

          
          </div>


          {/* Disclaimer */}
          <p
            className="mt-4 text-xs text-gray-500 text-center leading-relaxed font-['Assistant',sans-serif]"
          >
            {warehouseConfig.disclaimer}
          </p>
        </form>
      </div>
    </section>
  );
}

