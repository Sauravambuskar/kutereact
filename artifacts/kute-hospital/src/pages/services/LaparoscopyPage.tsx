import { motion } from "framer-motion";
import { Link } from "wouter";
import { Activity, CheckCircle2, ChevronRight, Clock, Shield, Users, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LaparoscopyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const procedures = [
    { title: "Gallbladder Surgery", desc: "Minimally invasive removal of the gallbladder (cholecystectomy)." },
    { title: "Hernia Repair", desc: "Laparoscopic repair for inguinal, umbilical, and incisional hernias." },
    { title: "Appendectomy", desc: "Quick and safe removal of an infected appendix." },
    { title: "Diagnostic Laparoscopy", desc: "Exploratory procedure to diagnose abdominal and pelvic pain." },
    { title: "Colorectal Surgery", desc: "Advanced procedures for bowel conditions." },
    { title: "Gynecological Laparoscopy", desc: "Treatment for cysts, fibroids, and endometriosis." }
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
            className="max-w-4xl space-y-6"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary">Laparoscopy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Laparoscopy & Surgery Centre</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Advanced minimally invasive surgical procedures ensuring smaller incisions, less pain, and faster recovery times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Setting the Standard in Minimal Access Surgery</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Laparoscopic surgery, also called minimally invasive surgery or keyhole surgery, represents a modern surgical technique where operations are performed through small incisions (usually 0.5–1.5 cm) elsewhere in the body.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Kute Hospital, our state-of-the-art operation theaters are equipped with the latest high-definition laparoscopic towers and precision instruments. Our surgical team brings decades of experience in handling complex cases with excellent clinical outcomes, ensuring our patients return to their normal lives as quickly as possible.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <img 
                  src="https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-351-1024x576.png" 
                  alt="Laparoscopy Surgery Theater" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 bg-gray-50 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Procedures</h2>
            <p className="text-lg text-muted-foreground">Comprehensive minimally invasive treatments tailored to your condition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((proc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-none shadow-md">
                  <CardContent className="p-6 space-y-4">
                    <Activity className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">{proc.title}</h3>
                    <p className="text-muted-foreground">{proc.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & When to Seek Care */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-foreground">Why Choose Us?</h2>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Advanced Technology", desc: "Latest HD camera systems for maximum precision." },
                  { icon: Users, title: "Expert Surgical Team", desc: "Highly experienced surgeons with specialized fellowship training." },
                  { icon: Clock, title: "Faster Recovery", desc: "Minimal tissue damage means shorter hospital stays." },
                  { icon: CheckCircle2, title: "Proven Outcomes", desc: "Thousands of successful procedures completed." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-primary/5 p-8 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">When To Seek Care</h2>
              <p className="text-lg text-muted-foreground mb-6">Consult our specialists if you experience:</p>
              <ul className="space-y-4">
                {[
                  "Severe or persistent abdominal pain",
                  "Unexplained pelvic pain",
                  "Visible lumps or bulges (suspected hernia)",
                  "Chronic digestive issues or gallstone symptoms",
                  "Recommendations for exploratory surgery"
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground/80 font-medium">{symptom}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl font-bold text-foreground">Meet Our Surgical Expert</h2>
            <div className="bg-white p-8 rounded-3xl shadow-md border inline-flex flex-col sm:flex-row items-center gap-8 text-left max-w-2xl">
              <img 
                src="https://www.kutehospital.com/wp-content/uploads/2026/02/afd8fdf700ba4304ad76f402fdd29565-1-1024x576.jpg" 
                alt="Dr. Pradeep Kute"
                className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-primary/10"
              />
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Stethoscope className="h-4 w-4" /> Chief Surgeon
                </div>
                <h3 className="text-2xl font-bold">Dr. Pradeep Kute</h3>
                <p className="text-muted-foreground font-medium">MBBS, MS - General & Laparoscopic Surgeon</p>
                <p className="text-muted-foreground">Leading our surgical team with over a decade of dedicated expertise in minimally invasive techniques.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Surgical Consultation?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule an appointment with our specialists to discuss your condition and treatment options.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full text-lg h-14 px-8 hover:scale-[1.02] transition-transform">
              Book Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}