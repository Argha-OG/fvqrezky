import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What areas do you serve?",
            answer: "We serve the entire Klang Valley including Kuala Lumpur, Selangor, Gombak, Setapak, Ampang, Kepong, Cheras, Mont Kiara, Bangsar, and Petaling Jaya. Contact us to confirm if we cover your specific location."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project duration varies based on scope. Simple gate installations take 3-5 days, kitchen renovations 7-14 days, and full house extensions 30-60 days. We provide detailed timelines during quotation."
        },
        {
            question: "Do you provide warranties?",
            answer: "Yes! All structural work comes with a comprehensive 5-year warranty on workmanship. Material warranties vary by supplier but typically range from 1-3 years."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept bank transfers, online banking, cash, and cheques. Payment is typically split into deposits (30-50%) and balance upon completion. We provide official receipts for all transactions."
        },
        {
            question: "Can I see examples of your previous work?",
            answer: "Absolutely! Visit our Portfolio page to see photos of completed projects. We can also arrange site visits to ongoing projects or provide customer references upon request."
        },
        {
            question: "Do you handle permits and approvals?",
            answer: "Yes, we assist with obtaining necessary permits and approvals from local authorities. This is especially important for structural work, extensions, and renovations that affect building structure."
        },
        {
            question: "What materials do you use?",
            answer: "We use only premium materials from trusted suppliers including high-grade aluminium, mild steel, stainless steel, and imported fixtures. All materials meet Malaysian safety standards."
        },
        {
            question: "Can you work on weekends?",
            answer: "Yes, weekend work can be arranged for an additional fee. This is ideal for clients who want to supervise the project or for urgent jobs. Please specify this requirement when requesting a quote."
        },
        {
            question: "How do I get a quotation?",
            answer: "Contact us via WhatsApp (+60 11 2389 2010), email, or our contact form. We'll arrange a site visit to assess your requirements and provide a detailed written quotation within 24-48 hours."
        },
        {
            question: "What makes FVQ Rezky different from other contractors?",
            answer: "Our commitment to quality, transparent pricing, timely completion, 5-year warranty, and 10+ years of proven track record set us apart. We treat every project as our own home."
        }
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>FAQ - Frequently Asked Questions | FVQ Rezky Enterprise</title>
                <meta name="description" content="Get answers to common questions about welding, aluminium fabrication, and renovation services in KL & Selangor. Project timelines, warranties, pricing, and more." />
                <meta name="keywords" content="Welding FAQ, Renovation Questions, Contractor FAQ KL, Aluminium Work Questions, Project Timeline, Warranty Information" />
                <link rel="canonical" href="https://fvqrezky.com/faq" />
            </Helmet>

            <div className="relative h-[40vh] overflow-hidden bg-zinc-950">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="FAQ" />
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="container text-center text-white space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold">Frequently Asked Questions</h1>
                        <p className="text-xl max-w-2xl mx-auto">Everything you need to know about our services</p>
                    </div>
                </div>
            </div>

            <section className="py-16 bg-background">
                <div className="container max-w-4xl">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <button
                                        className="w-full text-left p-6 flex items-center justify-between gap-4"
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    >
                                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                                        {openIndex === index ? (
                                            <Minus className="h-5 w-5 text-primary shrink-0" />
                                        ) : (
                                            <Plus className="h-5 w-5 text-primary shrink-0" />
                                        )}
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-in slide-in-from-top-2 duration-300">
                                            {faq.answer}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="container text-center space-y-6">
                    <h2 className="text-3xl font-bold">Still Have Questions?</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Can't find the answer you're looking for? Our friendly team is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a href="https://wa.me/601123892010" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                            WhatsApp Us
                        </a>
                        <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                            Contact Form
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
