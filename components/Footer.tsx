'use client'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Technologies', href: '#technologies' },
    ],
    services: [
      { name: 'Website Development', href: '#services' },
      { name: 'AI/ML Solutions', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Consulting', href: '#contact' },
    ],
  }

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">OD</span>
              <span className="text-primary">LABS</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming ideas into digital reality with cutting-edge technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get the latest updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-hover rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} OD Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
