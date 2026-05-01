import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Info, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Patients() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const faqs = [
    {
      q: "What are the visiting hours for patients?",
      a: "General visiting hours are from 10:00 AM to 12:00 PM and 5:00 PM to 7:00 PM. ICU visiting is restricted to one relative at a time during brief designated intervals."
    },
    {
      q: "Do you have 24/7 emergency services?",
      a: "Yes, our emergency and trauma care department is fully functional 24/7, equipped with an ICU and emergency OT."
    },
    {
      q: "Is cashless mediclaim available?",
      a: "Yes, we are empaneled with all major TPAs and insurance companies for cashless treatment. Please bring your health card and ID proof at the time of admission."
    },
    {
      q: "How can I book an appointment?",
      a: "You can book an appointment by calling our reception at +91 88888 82225, using the contact form on our website, or visiting the hospital directly."
    },
    {
      q: "Are diagnostic facilities available in-house?",
      a: "Yes, we have a fully equipped pathology lab, X-ray, and ultrasound facilities available 24/7."
    },
    {
      q: "Do I need to bring my old medical records?",
      a: "Yes, we strongly recommend bringing all previous medical reports, prescriptions, and test results for a comprehensive evaluation."
    },
    {
      q: "Is parking available at the hospital?",
      a: "Yes, dedicated parking is available for patients and their visitors."
    },
    {
      q: "Do you have an in-house pharmacy?",
      a: "Yes, our pharmacy operates 24/7 to ensure all prescribed medicines are readily available."
    },
    {
      q: "Can I get an estimate for surgery costs?",
      a: "Yes, after a consultation, our billing department can provide an estimate based on the doctor's recommended treatment plan."
    },
    {
      q: "Are outside meals allowed for admitted patients?",
      a: "We provide hygienically prepared meals suitable for the patient's medical condition. Outside food is generally discouraged for infection control and dietary reasons."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">For Patients</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Everything you need to know about your visit, admission, and stay at Kute Hospital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Admission Process</h3>
              <p className="text-muted-foreground">Our staff will guide you through a streamlined admission process. Please carry valid ID proof, previous medical records, and insurance cards if applicable.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Insurance & Cashless</h3>
              <p className="text-muted-foreground">We partner with over 30 TPAs. Contact our TPA desk at the time of admission for pre-authorization and cashless claims assistance.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Discharge Process</h3>
              <p className="text-muted-foreground">Discharges typically take 2-4 hours to process, especially for insurance cases. You will receive a detailed discharge summary and medication instructions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Facilities</h2>
            <p className="text-lg text-white/70">A glimpse into our clean, modern, and well-equipped hospital environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden aspect-video">
              <img src="https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-351-1024x576.png" alt="Consultation Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-video">
              <img src="https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-349-1024x576.png" alt="ICU" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-video">
              <img src="https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-352-1024x576.png" alt="Pathology Lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="py-20 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Patient Stories</h2>
            <p className="text-lg text-muted-foreground">Hear what our patients have to say about their experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "My father had a complex hernia surgery here. The doctors were very clear in explaining the procedure, and the nursing staff was incredibly attentive post-surgery. We felt completely safe.", author: "Sanjay D.", loc: "Sangamner" },
              { text: "I was rushed to the ER after an accident. The speed at which the trauma team acted saved my leg. Dr. Kute's expertise is unmatched in this region. Truly grateful.", author: "Ramesh P.", loc: "Akole" },
              { text: "The cleanliness and hygiene standards here are comparable to big city hospitals. The cashless claim process was very smooth, taking a huge burden off our shoulders.", author: "Sunita M.", loc: "Sinnar" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border space-y-6 relative">
                <div className="text-6xl text-primary/20 absolute top-4 right-6 font-serif">"</div>
                <p className="text-foreground/80 leading-relaxed relative z-10 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-200">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Insurance Brands */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">Major Insurance Partners</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Star Health", "United India", "New India Assurance", "HDFC ERGO", "Bajaj Allianz", "ICICI Lombard", "National Insurance"].map((provider, i) => (
              <div key={i} className="bg-white px-6 py-3 rounded-full border shadow-sm font-medium text-sm text-foreground/70">
                {provider}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}