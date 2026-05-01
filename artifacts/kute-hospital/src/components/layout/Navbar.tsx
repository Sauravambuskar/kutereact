import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Clock, Activity, ShieldCheck, HeartPulse, Stethoscope, Users, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const servicesList = [
  { title: "Laparoscopy & Surgery", href: "/services/laparoscopy", desc: "Advanced minimally invasive procedures.", icon: Activity },
  { title: "Orthopaedic Care", href: "/services/orthopaedic", desc: "Treatment for bones, joints & muscles.", icon: ShieldCheck },
  { title: "Cancer Care & Oncology", href: "/services/oncology", desc: "Compassionate cancer treatments.", icon: HeartPulse },
  { title: "Super Speciality", href: "/services/super-speciality", desc: "Expert care across specialities.", icon: Stethoscope },
  { title: "ICU & Critical Care", href: "/services/icu", desc: "24/7 advanced life support.", icon: Users },
  { title: "Pathology Lab", href: "/services/pathology", desc: "Accurate & rapid diagnostics.", icon: PhoneCall },
];

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string; desc: string; icon: any }
>(({ className, title, desc, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-md">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium leading-none mb-1">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {desc}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-medium flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>Emergency Helpline: +91 88883 72225</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Working Hours: Mon-Sat 08:00 AM - 09:00 PM</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="https://www.kutehospital.com/wp-content/uploads/2026/02/Kute-Hospital.png"
                alt="Kute Hospital"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1 lg:space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${
                        location === "/" ? "text-primary" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${
                        location === "/about" ? "text-primary" : ""
                      }`}
                    >
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-transparent ${location.startsWith("/services") ? "text-primary" : ""}`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {servicesList.map((service) => (
                        <ListItem
                          key={service.href}
                          href={service.href}
                          title={service.title}
                          desc={service.desc}
                          icon={service.icon}
                        />
                      ))}
                      <li className="col-span-full mt-2 pt-2 border-t text-center">
                        <NavigationMenuLink asChild>
                          <Link href="/services" className="text-sm font-medium text-primary hover:underline">
                            View All Services →
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/doctors"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${
                        location === "/doctors" ? "text-primary" : ""
                      }`}
                    >
                      Our Doctors
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/patients"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${
                        location === "/patients" ? "text-primary" : ""
                      }`}
                    >
                      For Patients
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="pl-4 border-l ml-4">
              <Link href="/contact">
                <Button className="hover:scale-[1.02] transition-transform">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white absolute w-full left-0 shadow-lg">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/doctors", label: "Our Doctors" },
              { href: "/patients", label: "For Patients" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  location === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}