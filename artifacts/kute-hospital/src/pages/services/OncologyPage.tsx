import { motion } from "framer-motion";
import { Link } from "wouter";
import { Activity, CheckCircle2, ChevronRight, Clock, Shield, Users, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OncologyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const procedures = [
    { title: "Cancer Screening", desc: "Comprehensive tests for early detection of various cancers." },
    { title: "Surgical Oncology", desc: "Advanced surgical procedures for tumor removal." },
    { title: "Chemotherapy", desc: "Targeted drug therapies to destroy cancer cells." },
    { title: "Radiation Therapy Planning", desc: "Coordination with top centers for radiation treatments." },
    { title: "Palliative Care", desc: "Improving quality of life for advanced stage patients." },
    { title: "Pain Management", desc: "Specialized techniques to alleviate cancer-related pain." }
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
              <span className="text-primary">Oncology</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Cancer Care & Oncology</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Compassionate, multidisciplinary approach to cancer diagnosis and treatment. We provide personalized care plans guided by the latest oncological protocols.
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
              <h2 className="text-3xl font-bold text-foreground">A Compassionate Approach to Cancer Care</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A cancer diagnosis can be overwhelming, but you don't have to face it alone. Our Oncology Department provides comprehensive care, from early screening and diagnosis to advanced treatment and palliative care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in a multidisciplinary approach, where medical oncologists, surgical oncologists, and support staff collaborate to design a personalized treatment plan for every patient, prioritizing both survival and quality of life.
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
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Oncology Care" 
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Oncology Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive care for various types of cancers.</p>
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
                  { icon: Shield, title: "Tumor Board Approach", desc: "Every case is reviewed by multiple specialists." },
                  { icon: Users, title: "Experienced Oncologists", desc: "Expertise in solid tumors and hematological malignancies." },
                  { icon: Clock, title: "Timely Intervention", desc: "Fast-tracked diagnostic and treatment pathways." },
                  { icon: CheckCircle2, title: "Holistic Support", desc: "Nutritional, psychological, and pain management support." }
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
              <p className="text-lg text-muted-foreground mb-6">Consult an oncologist if you notice:</p>
              <ul className="space-y-4">
                {[
                  "Unexplained weight loss or severe fatigue",
                  "A persistent lump or swelling anywhere in the body",
                  "Changes in skin moles or unhealing sores",
                  "Chronic cough or hoarseness",
                  "Unexplained bleeding or changes in bowel habits"
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
            <h2 className="text-3xl font-bold text-foreground">Meet Our Oncology Experts</h2>
            <div className="bg-white p-8 rounded-3xl shadow-md border inline-flex flex-col sm:flex-row items-center gap-8 text-left max-w-2xl">
              <div className="w-48 h-48 rounded-full bg-gray-200 shadow-lg border-4 border-primary/10 flex items-center justify-center">
                <Stethoscope className="h-16 w-16 text-gray-400" />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Stethoscope className="h-4 w-4" /> Consultant Medical Oncologist
                </div>
                <h3 className="text-2xl font-bold">Oncology Team</h3>
                <p className="text-muted-foreground font-medium">MD, DM Medical Oncology</p>
                <p className="text-muted-foreground">Committed to providing evidence-based, empathetic cancer care.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Expert Cancer Care You Can Trust</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a consultation or a second opinion on your treatment plan.
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