"use client";
import React from "react";
import { Check } from "lucide-react";

type Plan = {
    name: string;
    subtitle?: string;
    price: string;
    highlights: string[];
    popular?: boolean;
};

const plans: Plan[] = [
    {
        name: "Free",
        subtitle: "Perfect for small events",
        price: "₹0",
        highlights: ["5 GB storage", "1 event", "Basic photo wall"],
    },
    {
        name: "Starter",
        subtitle: "For families and small gatherings",
        price: "₹499 / year or ₹99 / event",
        highlights: ["25 GB storage", "3 events / year", "Live photo wall + logo"],
    },
    {
        name: "Pro",
        subtitle: "Most popular — for creators & photographers",
        price: "₹1,499 / year",
        popular: true,
        highlights: [
            "100 GB storage",
            "10 events / year",
            "Full HD + Originals",
            "AI Face Recognition",
        ],
    },
    {
        name: "Premium",
        subtitle: "Studios & professional teams",
        price: "₹3,999 / year",
        highlights: [
            "500 GB storage",
            "Unlimited events",
            "4K originals",
            "AI Highlights + White-label",
        ],
    },
];

export const PricingCard: React.FC = () => {
    return (
        <section
            aria-labelledby="pricing-heading"
            className="container mx-auto px-4 py-12"
        >
            <h2 id="pricing-heading" className="sr-only">
                Pricing plans
            </h2>

            <div className="flex flex-col items-center gap-6">
                <p className="max-w-2xl text-center text-sm text-gray-600">
                    Simple, clear plans — start free and scale as your events grow.
                </p>

                <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl ${plan.popular ? "p-[3px]" : "p-[1px]"
                                }`}
                        >
                            {/* 🌈 Gradient blur highlight for popular plan */}
                            {plan.popular && (
                                <div
                                    aria-hidden
                                    className="absolute -inset-0.5 rounded-2xl overflow-hidden"
                                    style={{ pointerEvents: "none" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 opacity-[0.18] blur-xl" />
                                </div>
                            )}

                            {/* Inner card */}
                            <div className="relative rounded-2xl bg-white border border-gray-200 h-full flex flex-col">
                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {plan.name}
                                            </h3>
                                            {plan.subtitle && (
                                                <p className="mt-1 text-sm text-gray-600">
                                                    {plan.subtitle}
                                                </p>
                                            )}
                                        </div>

                                        {/* {plan.popular && (
                                            <span className="ml-2 inline-flex items-center rounded-md bg-black px-2 py-0.5 text-xs font-semibold text-white">
                                                Popular
                                            </span>
                                        )} */}
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-gray-900">
                                                {plan.price}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="mt-6 space-y-3">
                                        {plan.highlights.map((h) => (
                                            <li
                                                key={h}
                                                className="flex items-center gap-3 text-sm text-gray-800"
                                            >
                                                <Check className="w-4 h-4 text-black" />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8">
                                        <a
                                            href="#"
                                            className={`inline-block w-full rounded-full border border-gray-900 px-4 py-2 text-center text-sm font-medium transition-colors ${plan.popular
                                                    ? "bg-black text-white hover:bg-white hover:text-black"
                                                    : "text-gray-900 hover:bg-gray-50"
                                                }`}
                                            aria-label={`Choose ${plan.name} plan`}
                                        >
                                            {plan.popular ? "Get Pro" : "Get Started"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 💼 Optional Enterprise CTA */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-600">
                        Need a larger or custom plan?{" "}
                        <a
                            href="#"
                            className="font-medium text-gray-900 underline hover:text-black"
                        >
                            Contact Sales
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};
