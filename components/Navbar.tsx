"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Studies", href: "#studies" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 w-full transition-colors",
        scrolled ? "bg-background/75 backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-lg font-bold text-primary hover:text-accent transition-colors"
        >
          AG
        </a>

        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex gap-1">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link
                  href={item.href}
                  className={clsx(
                    "block px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    activeSection === item.href.replace("#", "")
                      ? "text-primary"
                      : "text-foreground/80",
                  )}
                >
                  {item.label}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <MobileMenu activeSection={activeSection} />
      </div>
    </header>
  );
}

function MobileMenu({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Render placeholder button during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <button className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-primary hover:text-white md:hidden">
        <Menu size={24} />
      </button>
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-primary hover:text-white md:hidden">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col pt-16 sm:max-w-full"
      >
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "rounded-md px-4 py-3 text-lg font-medium transition-colors hover:bg-primary hover:text-white",
                activeSection === item.href.replace("#", "")
                  ? "text-primary"
                  : "text-foreground/80",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
