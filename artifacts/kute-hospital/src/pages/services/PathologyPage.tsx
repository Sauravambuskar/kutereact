import { motion } from "framer-motion";
import { Link } from "wouter";
import { Activity, CheckCircle2, ChevronRight, Clock, Shield, Users, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PathologyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const procedures = [
    { title: "Complete Blood Count", desc: "Basic screening for overall health and infections." },
    { title: "Biochemistry Profile", desc: "Checking liver, kidney, and metabolic functions." },
    { title: "Histopathology", desc: "Microscopic examination of tissue for cancer diagnosis." },
    { title: "Microbiology", desc: "Identifying bacterial, viral, and fungal infections." },
    { title: "Hormone Assays", desc: "Thyroid, fertility, and other endocrinological tests." },
    { title: "Serology & Immunology", desc: "Testing for antibodies and immune system responses." }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
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
              <span className="text-primary">Pathology Lab</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Advanced Pathology Laboratory</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Accurate and rapid diagnostics are the cornerstone of effective treatment. Our fully automated in-house pathology lab ensures reliable results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Precision Diagnostics You Can Trust</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every successful treatment begins with an accurate diagnosis. At Kute Hospital, our in-house pathology laboratory is equipped with state-of-the-art automated analyzers and adheres to strict quality control measures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By processing samples internally, we dramatically reduce turnaround times, allowing our doctors to make faster, data-driven medical decisions. Whether it's a routine blood test or a complex biopsy, we deliver precision you can count on.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-100 flex items-center justify-center">
                <img 
                  src="https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-352-1024x576.png" 
                  alt="Pathology Lab" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Laboratory Services</h2>
            <p className="text-lg text-muted-foreground">A comprehensive range of diagnostic investigations.</p>
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
                  { icon: Shield, title: "Automated Analyzers", desc: "Minimizing human error for highest accuracy." },
                  { icon: Users, title: "Expert Pathologists", desc: "Experienced doctors overseeing all critical reports." },
                  { icon: Clock, title: "Fast Turnaround", desc: "Rapid processing for emergency and urgent cases." },
                  { icon: CheckCircle2, title: "Stringent Quality Control", desc: "Regular calibration and strict adherence to protocols." }
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
              <h2 className="text-3xl font-bold text-foreground mb-8">When Do You Need Our Services?</h2>
              <p className="text-lg text-muted-foreground mb-6">Common reasons for laboratory tests:</p>
              <ul className="space-y-4">
                {[
                  "Routine annual health checkups",
                  "Pre-operative health evaluations",
                  "Monitoring chronic conditions (diabetes, cholesterol)",
                  "Diagnosing infections or fevers",
                  "Evaluating organ function (liver, kidneys)"
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

      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl font-bold text-foreground">Meet Our Pathology Team</h2>
            <div className="bg-white p-8 rounded-3xl shadow-md border inline-flex flex-col sm:flex-row items-center gap-8 text-left max-w-2xl">
              <div className="w-48 h-48 rounded-full bg-gray-200 shadow-lg border-4 border-primary/10 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-400" />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Stethoscope className="h-4 w-4" /> Lab Director
                </div>
                <h3 className="text-2xl font-bold">Consultant Pathologist</h3>
                <p className="text-muted-foreground font-medium">MD Pathology</p>
                <p className="text-muted-foreground">Ensuring that every report meets the highest standards of diagnostic accuracy.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Lab Test?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for home collection services or walk into our lab for a quick sample collection.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full text-lg h-14 px-8 hover:scale-[1.02] transition-transform">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}