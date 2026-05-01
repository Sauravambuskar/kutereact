import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required").optional().or(z.literal('')),
  department: z.string().min(1, "Please select a department"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = React.useMemo(() => {
    // We're importing react-hook-form directly here to fix the import error in the previous block
    const { useForm: useReactHookForm } = require('react-hook-form');
    return useReactHookForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        phone: "",
        email: "",
        department: "",
        message: ""
      }
    });
  }, []);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Message Sent Successfully",
      description: "Our team will contact you shortly to confirm your appointment.",
    });
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground py-3 px-4 flex items-center justify-center gap-3">
        <AlertCircle className="h-5 w-5 animate-pulse" />
        <span className="font-semibold text-sm sm:text-base">
          AMBULANCE EMERGENCY: <a href="tel:+918888372225" className="underline font-bold">+91 88883 72225</a> (24/7 Available)
        </span>
      </div>

      <section className="bg-primary/5 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We are here for you. Reach out to book an appointment or for any medical queries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Details */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Phone Numbers</h4>
                      <p className="text-muted-foreground mt-1">Enquiry: +91 88888 82225</p>
                      <p className="text-muted-foreground">Helpline: +91 88887 32225</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Email</h4>
                      <p className="text-muted-foreground mt-1">info@kutehospital.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Location</h4>
                      <p className="text-muted-foreground mt-1 leading-relaxed">
                        Kute Hospital, Sangamner City and Taluka,<br/>
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Working Hours</h4>
                      <p className="text-muted-foreground mt-1">Mon - Sat: 08:00 AM - 09:00 PM</p>
                      <p className="text-destructive font-semibold mt-1">Emergency: 24/7 Open</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-8">Book an Appointment</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-gray-50 border-gray-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 XXXXX XXXXX" className="bg-gray-50 border-gray-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="bg-gray-50 border-gray-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Department</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-gray-50 border-gray-200">
                                  <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="general">General Surgery</SelectItem>
                                <SelectItem value="ortho">Orthopaedics</SelectItem>
                                <SelectItem value="cardio">Cardiology</SelectItem>
                                <SelectItem value="neuro">Neurology</SelectItem>
                                <SelectItem value="gynae">Gynaecology</SelectItem>
                                <SelectItem value="other">Other / Not Sure</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Message / Symptoms</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Briefly describe your symptoms or reason for visit..." 
                              className="min-h-[120px] bg-gray-50 border-gray-200"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full text-lg h-14 rounded-full">
                      Submit Request
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="bg-gray-200 h-[400px] relative">
        {/* We use an image placeholder for the map to keep it clean, but in a real app this would be an iframe */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground flex-col gap-4">
          <MapPin className="h-12 w-12 text-primary opacity-50" />
          <p className="font-medium text-lg">Sangamner City, Maharashtra</p>
          <p className="text-sm opacity-70">(Google Maps Embed Area)</p>
        </div>
      </section>
    </div>
  );
}