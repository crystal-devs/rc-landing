"use client";
import React from "react";
import { Check, X, Info } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  isPopular?: boolean;
}

interface Feature {
  section: string;
  features: {
    name: string;
    tooltip?: string;
    values: (string | boolean)[];
  }[];
}

const plans: Plan[] = [
  { name: "Free", price: "₹0" },
  { name: "Starter", price: "₹499/year or ₹99/event" },
  { name: "Pro", price: "₹1,499/year", isPopular: true },
  { name: "Premium", price: "₹3,999/year" },
  { name: "Business", price: "₹9,999/year" },
];

const data: Feature[] = [
  {
    section: "Storage & Events",
    features: [
      { name: "Storage Limit", values: ["5GB", "25GB", "100GB", "500GB", "2TB"] },
      { name: "Event Limit / Year", values: ["1", "3", "10", "Unlimited", "Unlimited"] },
      { name: "Validity", values: ["1 Year", "1 Year", "1 Year + 6mo", "2 Years", "Lifetime*"] },
      { name: "Guests", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
    ],
  },
  {
    section: "Photo Gallery",
    features: [
      { name: "Photo Wall", values: ["Basic", "Live Slideshow", "Advanced", "Advanced", "Advanced"] },
      { name: "Maximum Resolution", values: ["1080p", "1080p", "Full HD", "4K Original", "4K Original"] },
      { name: "Auto Compression", values: [true, true, true, false, false] },
      { name: "Original Backup", values: [false, false, true, true, true] },
      { name: "AI Face Recognition", values: [false, false, true, true, true] },
      { name: "AI Photo Highlights", values: [false, false, false, true, true] },
      { name: "Content Moderation AI", values: [false, false, false, true, true] },
      { name: "GIF & Video Support", values: [false, true, true, true, true] },
      { name: "Customisable Gallery Themes", values: [false, true, true, true, true] },
      { name: "Manual Sorting & Selection", values: [false, true, true, true, true] },
      { name: "Switch ON/OFF Downloads", values: [false, true, true, true, true] },
    ],
  },
  {
    section: "Event Management",
    features: [
      { name: "Event Landing Page", values: [true, true, true, true, true] },
      { name: "Multiple QR Codes", values: [false, false, true, true, true] },
      { name: "RSVP & Guest Management", values: [false, true, true, true, true] },
      { name: "Custom Branding / Logo", values: [false, true, true, true, true] },
      { name: "White-label Branding", values: [false, false, false, true, true] },
      { name: "Custom Domain", values: [false, false, false, true, true] },
      { name: "Guest Analytics", values: [false, false, true, true, true] },
      { name: "Multiple Co-hosts", values: [false, false, true, true, true] },
    ],
  },
  {
    section: "Smart WhatsApp Bot",
    features: [
      { name: "Photo Sharing via WhatsApp", values: [false, true, true, true, true] },
      { name: "Guest Addition via WhatsApp", values: [false, true, true, true, true] },
      { name: "Event Updates via WhatsApp", values: [false, true, true, true, true] },
      { name: "Priority WhatsApp Support", values: [false, false, false, true, true] },
    ],
  },
  {
    section: "Developer & Business Tools",
    features: [
      { name: "API Access", values: [false, false, false, false, true] },
      { name: "Webhook Integrations", values: [false, false, false, false, true] },
      { name: "Multi-user Teams", values: [false, false, false, false, true] },
      { name: "Advanced Analytics", values: [false, false, false, false, true] },
      { name: "Dedicated Account Manager", values: [false, false, false, false, true] },
      { name: "SLA Guarantee (99.9%)", values: [false, false, false, false, true] },
    ],
  },
  {
    section: "Support",
    features: [
      { name: "Community Support", values: [true, true, false, false, false] },
      { name: "Email Support", values: [false, true, true, true, true] },
      { name: "Priority Support", values: [false, false, true, true, true] },
      { name: "Dedicated Support Team", values: [false, false, false, false, true] },
    ],
  },
];

export default function ComparisonTable() {
  return (
    <div className="col-span-full max-w-7xl mx-auto pb-64">
      <div className="bg-white">
        <table className="w-full border-collapse table-fixed">
          {/* Sticky Header */}
          <thead className="sticky top-0 z-20">
            <tr>
              <th colSpan={6} className="p-0">
                <div className="flex items-start backdrop-blur-md bg-white/80 sticky top-0 pt-24 pb-0 border-b border-gray-200">
                  <div className="flex-1 text-left p-4"></div>
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`flex-1 p-4 text-left ${
                        plan.isPopular ? "bg-neutral-200 rounded-t-2xl" : "bg-white"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                        <span className="text-base md:text-lg font-semibold text-gray-900">
                          {plan.name}
                        </span>
                        {plan.isPopular && (
                          <span className="text-xs font-semibold bg-blue-600 text-white px-2 py-1 rounded-md">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-gray-500 mt-1 text-sm">{plan.price}</div>
                      <button
                        className={`mt-3 inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                          plan.isPopular
                            ? "bg-neutral-900 text-white hover:bg-neutral-700"
                            : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Get started
                      </button>
                    </div>
                  ))}
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((section, idx) => (
              <React.Fragment key={idx}>
                <tr>
                  <th
                    colSpan={6}
                    className="bg-gray-50 text-left text-sm font-semibold text-gray-700 uppercase py-3 px-4 border-t border-gray-200"
                  >
                    {section.section}
                  </th>
                </tr>

                {section.features.map((feature, i) => (
                  <tr key={i} className="border-t">
                    <th className="text-left p-4 text-sm font-medium text-gray-900 flex items-center gap-1">
                      {feature.name}
                      {feature.tooltip && (
                        <Info className="w-4 h-4 text-gray-400 cursor-help" />
                      )}
                    </th>
                    {feature.values.map((val, j) => (
                      <td
                        key={j}
                        className={`p-4 text-sm ${
                          plans[j]?.isPopular ? "bg-neutral-200" : "bg-white"
                        } text-gray-700 text-center md:text-left`}
                      >
                        {typeof val === "boolean" ? (
                          val ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto md:mx-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto md:mx-0" />
                          )
                        ) : (
                          <span className="text-gray-600">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}

            {/* Footer filler */}
            <tr>
              {plans.map((_, i) => (
                <td
                  key={i}
                  className={i === 2 ? "bg-neutral-200 rounded-b-2xl pb-3.5" : "pb-3.5"}
                ></td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
