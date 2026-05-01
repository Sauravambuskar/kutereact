import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Doctors() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const visitingSpecialists = [
    {
      name: "Dr. Anjali Sharma",
      speciality: "Cardiology",
      qualifications: "MD, DM (Cardiology)",
      days: "Mon, Wed, Fri",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Dr. Rajesh Deshmukh",
      speciality: "Neurology",
      qualifications: "MD, DM (Neurology)",
      days: "Tue, Thu",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Dr. Smita Patil",
      speciality: "Gynaecology",
      qualifications: "MBBS, DGO",
      days: "Mon to Sat",
      image: "https://images.unsplash.com/photo-1594824436998-dd1b42200dc8?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Dr. Vikram Joshi",
      speciality: "Paediatrics",
      qualifications: "MBBS, MD (Paediatrics)",
      days: "Mon, Wed, Sat",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Dr. Sanjay Kulkarni",
      speciality: "Orthopaedics",
      qualifications: "MBBS, MS (Ortho)",
      days: "Tue, Fri",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Dr. Neha Wagh",
      speciality: "Dermatology",
      qualifications: "MBBS, MD (Dermatology)",
      days: "Wed, Sat",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Dr. Amit Jadhav",
      speciality: "Urology",
      qualifications: "MS, MCh (Urology)",
      days: "Thu Only",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Dr. Priya More",
      speciality: "ENT Specialist",
      qualifications: "MS (ENT)",
      days: "Mon, Thu",
      image: "https://images.unsplash.com/photo-1594824436998-dd1b42200dc8?auto=format&fit=crop&q=80&w=500"
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Doctors</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Meet our team of experienced specialists dedicated to your health and well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Doctor Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://www.kutehospital.com/wp-content/uploads/2026/02/afd8fdf700ba4304ad76f402fdd29565-1-1024x576.jpg" 
                  alt="Dr. Pradeep Kute" 
                  className="w-full h-full object-cover min-h-[400px] object-top"
                />
              </div>
              <div className="md:w-1/2 p-10 lg:p-12 flex flex-col justify-center bg-foreground text-background">
                <div className="space-y-6">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                      Founder & Lead Surgeon
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Dr. Pradeep Kute</h2>
                    <p className="text-primary-foreground text-lg font-medium">MBBS, MS - General & Laparoscopic Surgeon</p>
                  </div>
                  
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Dr. Kute leads the surgical team with over 14 years of extensive experience in complex and minimally invasive surgeries.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>Available: Monday - Saturday</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <Link href="/contact">
                      <Button className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-white">
                        Book Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Specialists Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visiting Specialists</h2>
            <p className="text-lg text-muted-foreground">
              We bring renowned medical experts from various super-specialities right here to Sangamner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitingSpecialists.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{doctor.name}</h3>
                    <p className="text-primary font-medium text-sm">{doctor.speciality}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 space-y-2">
                    <p className="text-sm text-muted-foreground line-clamp-1">{doctor.qualifications}</p>
                    <div className="flex items-center gap-2 text-sm text-foreground/80 bg-gray-50 p-2 rounded-md">
                      <Calendar className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium">{doctor.days}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call CTA */}
      <section className="bg-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <PhoneCall className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">To check today's doctor availability</h2>
          <p className="text-lg text-white/70">Call our reception desk</p>
          <a href="tel:+918888882225" className="inline-block">
            <Button size="lg" className="text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white">
              +91 88888 82225
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}