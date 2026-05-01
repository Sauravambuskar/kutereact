import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, HeartPulse, Stethoscope, Users, PhoneCall, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      id: "laparoscopy",
      icon: Activity,
      title: "Laparoscopy & Surgery Centre",
      description: "Advanced minimally invasive surgical procedures that ensure smaller incisions, less pain, and faster recovery times. Our state-of-the-art OT is equipped for complex laparoscopic interventions.",
      features: ["Gallbladder Surgery", "Hernia Repair", "Appendectomy", "Diagnostic Laparoscopy"],
      image: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-351-1024x576.png"
    },
    {
      id: "orthopaedic",
      icon: ShieldCheck,
      title: "Orthopaedic Care",
      description: "Comprehensive diagnosis and treatment for all musculoskeletal conditions. From trauma care to joint replacements, our experts ensure you get back to your active lifestyle safely.",
      features: ["Fracture Management", "Joint Replacement", "Sports Injuries", "Spine Care"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "oncology",
      icon: HeartPulse,
      title: "Cancer Care & Oncology",
      description: "Compassionate, multidisciplinary approach to cancer diagnosis and treatment. We provide personalized care plans guided by the latest oncological protocols.",
      features: ["Cancer Screening", "Surgical Oncology", "Chemotherapy Support", "Palliative Care"],
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "super-speciality",
      icon: Stethoscope,
      title: "Super Speciality Care",
      description: "Expert consultations across a wide range of medical super-specialities, bringing highly qualified visiting consultants to Sangamner.",
      features: ["Cardiology", "Neurology", "Urology", "Gastroenterology"],
      image: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-348-1024x576.png"
    },
    {
      id: "icu",
      icon: Users,
      title: "ICU & Critical Care",
      description: "Our 24/7 Intensive Care Unit is equipped with advanced life-support systems and continuous monitoring, staffed by specially trained critical care personnel.",
      features: ["24/7 Monitoring", "Ventilator Support", "Trained Intensivists", "Emergency Resuscitation"],
      image: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-349-1024x576.png"
    },
    {
      id: "pathology",
      icon: PhoneCall,
      title: "Pathology Lab",
      description: "Accurate and rapid diagnostics are the cornerstone of effective treatment. Our fully automated in-house pathology lab ensures reliable results.",
      features: ["Blood & Urine Tests", "Histopathology", "Microbiology", "Quick Reporting"],
      image: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-352-1024x576.png"
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive, state-of-the-art medical care across multiple specialities, all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 w-full"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance Providers Section */}
      <section className="py-20 bg-gray-50 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Cashless Mediclaim Available</h2>
            <p className="text-lg text-muted-foreground">
              We partner with major insurance providers and TPAs to ensure a seamless, cashless hospitalization experience.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Star Health", "United India", "New India Assurance", "HDFC ERGO", "Bajaj Allianz", "ICICI Lombard", "National Insurance"].map((provider, i) => (
              <div key={i} className="bg-white px-6 py-4 rounded-xl border shadow-sm font-semibold text-foreground/80 flex items-center justify-center min-w-[160px]">
                {provider}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Require specialized care?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with our medical experts.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8 rounded-full">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}