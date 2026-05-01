import React from "react";
import { Link } from "wouter";
import { Cross, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Cross className="h-5 w-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Kute Hospital</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs text-white/70">
              A leading super-speciality hospital in Sangamner City, providing expert surgical care with genuine warmth and accessibility.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/doctors" className="text-sm text-white/70 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link href="/patients" className="text-sm text-white/70 hover:text-white transition-colors">For Patients</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors">Laparoscopy & Surgery</Link></li>
              <li><Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors">Orthopaedic Care</Link></li>
              <li><Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors">Cancer Care & Oncology</Link></li>
              <li><Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors">ICU & Critical Care</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Sangamner City and Taluka,<br/>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 88888 82225</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@kutehospital.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Kute Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}