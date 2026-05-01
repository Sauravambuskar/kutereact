import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Users, Target, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Story</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A legacy of healing, built on compassion and surgical excellence in Sangamner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Vision Behind Kute Hospital</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded over 14 years ago by Dr. Pradeep Kute, Kute Hospital began with a simple yet profound mission: to bring world-class surgical care to the community of Sangamner, so patients wouldn't have to travel to major cities for advanced treatments.
                </p>
                <p>
                  What started as a focused surgical centre has grown into a leading super-speciality hospital. Today, we are proud to serve thousands of patients from across Maharashtra, offering a comprehensive range of medical services backed by state-of-the-art technology.
                </p>
                <p>
                  Despite our growth, our core philosophy remains unchanged: every patient who walks through our doors is treated with the same warmth and dedication as family.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-347-1024x576.png" 
                  alt="Kute Hospital Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide every decision we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Compassion", desc: "We treat every patient with empathy, respect, and genuine care." },
              { icon: Award, title: "Excellence", desc: "We are committed to the highest standards of medical and surgical expertise." },
              { icon: Users, title: "Community Care", desc: "We strive to make quality healthcare accessible to all in our region." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground text-background rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <img 
                  src="https://www.kutehospital.com/wp-content/uploads/2026/02/afd8fdf700ba4304ad76f402fdd29565-1-1024x576.jpg" 
                  alt="Dr. Pradeep Kute" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="md:w-3/5 p-10 md:p-16 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold">
                  Founder & Chief Surgeon
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Dr. Pradeep Kute</h2>
                <p className="text-xl text-white/80 font-medium">MBBS, MS - General & Laparoscopic Surgeon</p>
                <div className="space-y-4 text-white/70 leading-relaxed pt-4 border-t border-white/10">
                  <p>
                    Dr. Pradeep Kute is a highly respected general and laparoscopic surgeon with an unwavering commitment to patient well-being. He earned his MBBS and MS degrees with distinction and has since performed thousands of successful surgeries.
                  </p>
                  <p>
                    His expertise spans advanced minimally invasive procedures, trauma care, and complex general surgeries. Beyond his clinical skills, Dr. Kute is known for his calm demeanor, patient-first approach, and dedication to ethical medical practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Stats */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground">14+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years of Service</div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground">10,000+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Patients Treated</div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground">24/7</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Emergency Care</div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground">30+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Insurance Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Trust Your Health With Us</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Experience compassionate care backed by expert medical knowledge.
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