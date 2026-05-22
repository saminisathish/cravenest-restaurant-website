import { Link } from "react-router-dom";

import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export function Footer() {

  return (

    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About */}
          <div>

            <div className="flex items-center space-x-2 mb-4">

              <span className="text-2xl">
                🍽️
              </span>

              <span className="font-bold text-xl text-white">

                CraveNest

              </span>

            </div>

            <p className="text-sm leading-7">

              Experience premium dining with
              our exquisite menu crafted by
              world-class chefs and culinary experts.

            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold text-white mb-4">

              Quick Links

            </h3>

            <ul className="space-y-2 text-sm">

              <li>

                <Link
                  to="/"
                  className="
                    hover:text-orange-500
                    transition-colors
                  "
                >

                  Home

                </Link>

              </li>

              <li>

                <Link
                  to="/menu"
                  className="
                    hover:text-orange-500
                    transition-colors
                  "
                >

                  Menu

                </Link>

              </li>

              <li>

                <Link
                  to="/about"
                  className="
                    hover:text-orange-500
                    transition-colors
                  "
                >

                  About Us

                </Link>

              </li>

              <li>

                <Link
                  to="/contact"
                  className="
                    hover:text-orange-500
                    transition-colors
                  "
                >

                  Contact

                </Link>

              </li>

            </ul>

          </div>

          {/* Contact Info */}
          <div>

            <h3 className="font-semibold text-white mb-4">

              Contact Us

            </h3>

            <ul className="space-y-3 text-sm">

              <li className="flex items-center space-x-2">

                <Phone className="w-4 h-4 text-orange-500" />

                <span>
                  +91 98765 43210
                </span>

              </li>

              <li className="flex items-center space-x-2">

                <Mail className="w-4 h-4 text-orange-500" />

                <span>
                  info@cravenest.com
                </span>

              </li>

              <li className="flex items-center space-x-2">

                <MapPin className="w-4 h-4 text-orange-500" />

                <span>
                  45 Food Street, Chennai
                </span>

              </li>

            </ul>

          </div>

          {/* Social Media */}
          <div>

            <h3 className="font-semibold text-white mb-4">

              Follow Us

            </h3>

            <div className="flex space-x-4">

              <a
                href="#"
                className="
                  hover:text-orange-500
                  transition-colors
                "
              >

                <Facebook className="w-6 h-6" />

              </a>

              <a
                href="#"
                className="
                  hover:text-orange-500
                  transition-colors
                "
              >

                <Instagram className="w-6 h-6" />

              </a>

              <a
                href="#"
                className="
                  hover:text-orange-500
                  transition-colors
                "
              >

                <Twitter className="w-6 h-6" />

              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">

          <p>

            © 2026 CraveNest Restaurant.
            All rights reserved.

          </p>

        </div>

      </div>

    </footer>

  );
}