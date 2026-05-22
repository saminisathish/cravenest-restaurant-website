import { useState } from "react";
import { Link, useNavigate } from "react-router";

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

export function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      await login(
        formData.email,
        formData.password
      );

      // ADMIN LOGIN
      if (
        formData.email === "admin@cravenest.com" &&
        formData.password === "admin123"
      ) {

        toast.success(
          "Welcome CraveNest Admin 👨‍🍳"
        );

        navigate("/dashboard");

      } else {

        // NORMAL USER LOGIN
        toast.success(
          "Welcome back to CraveNest!"
        );

        navigate("/");

      }

    } catch (error) {

      toast.error(
        "Login failed. Please try again."
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

            Welcome Back

          </CardTitle>

          <CardDescription className="text-center text-gray-600">

            Sign in to continue your
            CraveNest dining experience

          </CardDescription>

        </CardHeader>

        {/* Form */}
        <CardContent>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

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

            {/* Forgot Password */}
            <div className="flex items-center justify-between text-sm">

              <Link
                to="/forgot-password"
                className="text-orange-600 hover:underline"
              >

                Forgot password?

              </Link>

            </div>

            {/* Login Button */}
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
                ? "Signing in..."
                : "Sign In"}

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
        <CardFooter className="flex flex-col space-y-2">

          <div className="text-sm text-center text-gray-600">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="
                text-orange-600
                hover:underline
                font-semibold
              "
            >

              Sign up

            </Link>

          </div>

          {/* Admin Credentials */}
          <div className="text-xs text-center text-gray-500 mt-2 leading-6">

            👨‍🍳 Admin Access
            <br />

            Email:
            admin@cravenest.com

            <br />

            Password:
            admin123

          </div>

        </CardFooter>

      </Card>

    </div>

  );
}