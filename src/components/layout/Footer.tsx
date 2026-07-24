"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  footerPolicies,
  footerQuickLinks,
  footerSocials,
} from "@/constants/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils";
import BrandLogo from "@/components/common/BrandLogo";

function FooterAccordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="footer-group">
      <button
        type="button"
        className="footer-group__trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform md:hidden",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "footer-group__content",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
        )}
      >
        {children}
      </div>
    </div>
  );
}

function FooterLinkList({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <ul className="footer-link-list">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="footer-link">
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const midpoint = Math.ceil(footerQuickLinks.length / 2);
  const exploreLinks = footerQuickLinks.slice(0, midpoint);
  const companyLinks = footerQuickLinks.slice(midpoint);

  return (
    <>
      <div className="site-footer">
        <footer className="page-width">
          <div className="footer-main">
            <div className="footer-brand-panel">
              <BrandLogo inverted />
              <p className="footer-brand-copy">
                Computers, laptops, and gaming gear backed by straightforward
                advice and local support.
              </p>
              <p className="footer-service-note">
                Pakistan-wide delivery <span aria-hidden>·</span> 7-day
                replacement on eligible products
              </p>
            </div>

            <div className="footer-navigation">
              <FooterAccordion title="Explore">
                <FooterLinkList links={exploreLinks} />
              </FooterAccordion>

              <FooterAccordion title="Company & Support">
                <FooterLinkList links={companyLinks} />
              </FooterAccordion>

              <FooterAccordion title="Socials">
                <ul className="footer-social-list">
                  {footerSocials.map((link) => (
                    <li key={link.label}>
                      <span>{link.label}</span>
                    </li>
                  ))}
                </ul>
              </FooterAccordion>

              <address className="footer-contact">
                <p>Customer care</p>
                <a href={siteConfig.support.phoneHref}>
                  {siteConfig.support.phone}
                </a>
                <a href={`mailto:${siteConfig.support.email}`}>
                  {siteConfig.support.email}
                </a>
                <span>{siteConfig.support.hours}</span>
              </address>
            </div>
          </div>
        </footer>
      </div>

      <div className="footer-copyright">
        <div className="page-width footer-copyright__inner">
          <p>© 2026 Cyber Land. All rights reserved.</p>
          <ul>
            {footerPolicies.map((policy) => (
              <li key={policy.label}>
                <Link href={policy.href}>{policy.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
