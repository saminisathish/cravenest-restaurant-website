import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../components/ui/card";

import { useAuth } from "../context/AuthContext";

import { toast } from "sonner";

import {
  Facebook,
  Mail
} from "lucide-react";

export function Signup() {

  const navigate = useNavigate();

  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      toast.error(
        "Passwords do not match!"
      );

      return;
    }

    if (
      formData.password.length < 6
    ) {

      toast.error(
        "Password must be at least 6 characters!"
      );

      return;
    }

    setLoading(true);

    try {

      await signup({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      toast.success(
        "Welcome to CraveNest! 🎉"
      );

      navigate("/");

    } catch (error) {

      toast.error(
        "Signup failed. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4 py-12">

      <Card className="w-full max-w-md shadow-xl border-0">

        {/* Header */}
        <CardHeader className="space-y-1">

          <CardTitle className="text-3xl text-center text-[#5C4033]">

            Create Account

          </CardTitle>

          <CardDescription className="text-center text-gray-600">

            Join CraveNest for an unforgettable dining experience

          </CardDescription>

        </CardHeader>

        {/* Form */}
        <CardContent>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* Name */}
            <div className="space-y-2">

              <Label htmlFor="name">
                Full Name
              </Label>

              <Input
                id="name"
                type="text"
                placeholder="Rahul Sharma"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value
                  })
                }
                required
              />

            </div>

            {/* Email */}
            <div className="space-y-2">

              <Label htmlFor="email">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value
                  })
                }
                required
              />

            </div>

            {/* Phone */}
            <div className="space-y-2">

              <Label htmlFor="phone">
                Phone Number
              </Label>

              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value
                  })
                }
                required
              />

            </div>

            {/* Password */}
            <div className="space-y-2">

              <Label htmlFor="password">
                Password
              </Label>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value
                  })
                }
                required
              />

            </div>

            {/* Confirm Password */}
            <div className="space-y-2">

              <Label htmlFor="confirmPassword">
                Confirm Password
              </Label>

              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value
                  })
                }
                required
              />

            </div>

            {/* Signup Button */}
            <Button
              type="submit"
              className="
                w-full
                bg-orange-600
                hover:bg-orange-700
              "
              disabled={loading}
            >

              {loading
                ? "Creating account..."
                : "Sign Up"}

            </Button>

          </form>

          {/* Divider */}
          <div className="relative my-6">

            <div className="absolute inset-0 flex items-center">

              <div className="w-full border-t"></div>

            </div>

            <div className="relative flex justify-center text-xs uppercase">

              <span className="bg-white px-2 text-gray-500">

                Or continue with

              </span>

            </div>

          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">

            <Button
              variant="outline"
              type="button"
            >

              <Mail className="mr-2 h-4 w-4" />

              Google

            </Button>

            <Button
              variant="outline"
              type="button"
            >

              <Facebook className="mr-2 h-4 w-4" />

              Facebook

            </Button>

          </div>

        </CardContent>

        {/* Footer */}
        <CardFooter>

          <div className="text-sm text-center text-gray-600 w-full">

            Already have an account?{" "}

            <Link
              to="/login"
              className="
                text-orange-600
                hover:underline
                font-semibold
              "
            >

              Sign in

            </Link>

          </div>

        </CardFooter>

      </Card>

    </div>

  );
}