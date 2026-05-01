import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Activity, HeartPulse, Stethoscope, ShieldCheck, Users, PhoneCall, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-351-1024x576.png" 
          alt="Kute Hospital Facility" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.span 
              variants={fadeIn}
              className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground text-sm font-semibold tracking-wider uppercase mb-4"
            >
              Leading Super-Speciality Hospital in Sangamner
            </motion.span>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Expert Care with <span className="text-primary">Genuine Warmth</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium"
            >
              Combining advanced surgical expertise with compassionate community care. We treat patients like family, not just numbers.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-full hover:scale-[1.02] transition-transform">
                  Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full text-lg h-14 px-8 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm rounded-full hover:scale-[1.02] transition-transform">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="bg-white border-b py-12 relative z-30 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl shadow-black/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">14+</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">10k+</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Happy Patients</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Emergency Care</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">30+</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Insurance Partners</div>
          </div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See Kute Hospital in Action</h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into our world-class facilities, dedicated team, and the compassionate care we deliver every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/sP9eHwJOQIA?rel=0&modestbranding=1&showinfo=0"
                title="Kute Hospital Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Care Under One Roof</h2>
            <p className="text-lg text-muted-foreground">
              Our state-of-the-art facility provides a wide range of medical services to meet your healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "Laparoscopy & Surgery", desc: "Advanced minimally invasive surgical procedures for faster recovery.", href: "/services/laparoscopy" },
              { icon: ShieldCheck, title: "Orthopaedic Care", desc: "Comprehensive treatment for bone, joint, and muscle conditions.", href: "/services/orthopaedic" },
              { icon: HeartPulse, title: "Cancer Care & Oncology", desc: "Expert diagnosis and compassionate treatment for various cancers.", href: "/services/oncology" },
              { icon: Stethoscope, title: "Super Speciality Care", desc: "Specialized treatment across neurology, cardiology, and more.", href: "/services/super-speciality" },
              { icon: Users, title: "ICU & Critical Care", desc: "24/7 intensive care with advanced monitoring and life support.", href: "/services/icu" },
              { icon: PhoneCall, title: "Pathology Lab", desc: "Accurate diagnostics with state-of-the-art laboratory equipment.", href: "/services/pathology" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card className="h-full border-none shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                      <div className="flex items-center text-primary font-medium text-sm">
                        View Details <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full hover:scale-[1.02] transition-transform">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Spotlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform -rotate-3 z-0"></div>
              <img 
                src="https://www.kutehospital.com/wp-content/uploads/2026/02/afd8fdf700ba4304ad76f402fdd29565-1-1024x576.jpg" 
                alt="Dr. Pradeep Kute" 
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full aspect-[4/3]"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <HeartPulse className="h-4 w-4" /> Chief Surgeon & Founder
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Dr. Pradeep Kute</h2>
              <p className="text-xl text-muted-foreground font-medium">MBBS, MS - General & Laparoscopic Surgeon</p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over a decade of surgical excellence, Dr. Kute has established Kute Hospital as a beacon of trust in Sangamner. His vision combines top-tier medical expertise with a deeply human approach to patient care.
                </p>
                <p>
                  Every patient is treated with dignity, clear communication, and the highest standard of surgical precision.
                </p>
              </div>
              
              <div className="pt-6">
                <Link href="/about">
                  <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] transition-transform">
                    Read Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+')]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-black/20 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center md:justify-start gap-3">
                <PhoneCall className="h-8 w-8" /> Need Emergency Help?
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Our emergency department is open 24/7. Immediate medical attention when you need it most.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="tel:+918888372225">
                <Button size="lg" variant="secondary" className="text-xl h-16 px-10 rounded-full font-bold shadow-2xl hover:scale-[1.02] transition-transform bg-white text-primary hover:bg-gray-100">
                  Call: +91 88883 72225
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}