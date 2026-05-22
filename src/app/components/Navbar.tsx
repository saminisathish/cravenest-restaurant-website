import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

import {
  ShoppingCart,
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

import { useState } from "react";

import { Badge } from "./ui/badge";

export function Navbar() {

  const location = useLocation();

  const { getTotalItems } = useCart();

  const {
    user,
    logout,
    isAuthenticated
  } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const totalItems = getTotalItems();

  return (

    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
          >

            <span className="text-2xl">
              🍽️
            </span>

            <span className="font-bold text-xl text-[#5C4033]">

              CraveNest

            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">

            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`
                  transition-colors
                  hover:text-orange-600
                  ${
                    location.pathname === link.path
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700"
                  }
                `}
              >

                {link.label}

              </Link>

            ))}

          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Admin Dashboard */}
            {isAuthenticated && user?.isAdmin && (

              <Link to="/dashboard">

                <Button
                  variant="ghost"
                  size="sm"
                >

                  <LayoutDashboard className="w-4 h-4 mr-2" />

                  Dashboard

                </Button>

              </Link>

            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="relative"
            >

              <Button
                variant="ghost"
                size="icon"
              >

                <ShoppingCart className="w-5 h-5" />

                {totalItems > 0 && (

                  <Badge
                    className="
                      absolute
                      -top-1
                      -right-1
                      h-5
                      w-5
                      flex
                      items-center
                      justify-center
                      p-0
                      text-xs
                    "
                  >

                    {totalItems}

                  </Badge>

                )}

              </Button>

            </Link>

            {/* Auth Buttons */}
            {isAuthenticated ? (

              <div className="flex items-center space-x-2">

                <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-lg">

                  <User className="w-4 h-4" />

                  <span className="text-sm">

                    {user?.name}

                  </span>

                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                >

                  <LogOut className="w-4 h-4 mr-2" />

                  Logout

                </Button>

              </div>

            ) : (

              <div className="flex items-center space-x-2">

                <Link to="/login">

                  <Button
                    variant="outline"
                    size="sm"
                  >

                    Login

                  </Button>

                </Link>

                <Link to="/signup">

                  <Button
                    size="sm"
                    className="
                      bg-orange-600
                      hover:bg-orange-700
                    "
                  >

                    Sign Up

                  </Button>

                </Link>

              </div>

            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
          >

            {mobileMenuOpen ? (

              <X className="w-6 h-6" />

            ) : (

              <Menu className="w-6 h-6" />

            )}

          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (

          <div className="md:hidden py-4 space-y-3 border-t">

            {/* Mobile Nav Links */}
            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`
                  block
                  py-2
                  transition-colors
                  hover:text-orange-600
                  ${
                    location.pathname === link.path
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700"
                  }
                `}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >

                {link.label}

              </Link>

            ))}

            <div className="pt-3 border-t space-y-2">

              {/* Dashboard */}
              {isAuthenticated && user?.isAdmin && (

                <Link
                  to="/dashboard"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >

                    <LayoutDashboard className="w-4 h-4 mr-2" />

                    Dashboard

                  </Button>

                </Link>

              )}

              {/* Cart */}
              <Link
                to="/cart"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >

                <Button
                  variant="ghost"
                  className="w-full justify-start"
                >

                  <ShoppingCart className="w-5 h-5 mr-2" />

                  Cart ({totalItems})

                </Button>

              </Link>

              {/* User Actions */}
              {isAuthenticated ? (

                <>

                  <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">

                    <User className="w-4 h-4" />

                    <span className="text-sm">

                      {user?.name}

                    </span>

                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {

                      logout();

                      setMobileMenuOpen(false);

                    }}
                  >

                    <LogOut className="w-4 h-4 mr-2" />

                    Logout

                  </Button>

                </>

              ) : (

                <>

                  <Link
                    to="/login"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >

                    <Button
                      variant="outline"
                      className="w-full"
                    >

                      Login

                    </Button>

                  </Link>

                  <Link
                    to="/signup"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >

                    <Button
                      className="
                        w-full
                        bg-orange-600
                        hover:bg-orange-700
                      "
                    >

                      Sign Up

                    </Button>

                  </Link>

                </>

              )}

            </div>

          </div>

        )}

      </div>

    </nav>

  );
}