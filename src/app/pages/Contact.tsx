import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

import { toast } from "sonner";

export function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(
      "Message sent successfully! CraveNest team will contact you soon."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setLoading(false);
  };

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-5xl mb-4">
            Contact CraveNest
          </h1>

          <p className="text-xl text-gray-100">
            We'd love to hear from you
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">

            <Card>

              <CardContent className="p-6">

                {/* Address */}
                <div className="flex items-start space-x-4 mb-6">

                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">

                    <MapPin className="w-6 h-6 text-orange-600" />

                  </div>

                  <div>

                    <h3 className="mb-2">
                      Address
                    </h3>

                    <p className="text-gray-600">

                      45 Food Street
                      <br />

                      Chennai, Tamil Nadu 600028
                      <br />

                      India

                    </p>

                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 mb-6">

                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">

                    <Phone className="w-6 h-6 text-orange-600" />

                  </div>

                  <div>

                    <h3 className="mb-2">
                      Phone
                    </h3>

                    <p className="text-gray-600">

                      Main: +91 98765 43210
                      <br />

                      Reservations: +91 91234 56789

                    </p>

                  </div>

                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 mb-6">

                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">

                    <Mail className="w-6 h-6 text-orange-600" />

                  </div>

                  <div>

                    <h3 className="mb-2">
                      Email
                    </h3>

                    <p className="text-gray-600">

                      info@cravenest.com
                      <br />

                      reservations@cravenest.com

                    </p>

                  </div>

                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">

                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">

                    <Clock className="w-6 h-6 text-orange-600" />

                  </div>

                  <div>

                    <h3 className="mb-2">
                      Opening Hours
                    </h3>

                    <p className="text-gray-600">

                      Monday - Thursday:
                      <br />
                      11:00 AM - 10:00 PM

                      <br />
                      <br />

                      Friday - Sunday:
                      <br />
                      11:00 AM - 11:30 PM

                    </p>

                  </div>

                </div>

              </CardContent>

            </Card>

            {/* Social Media */}
            <Card>

              <CardContent className="p-6">

                <h3 className="mb-4">
                  Follow CraveNest
                </h3>

                <div className="flex space-x-4">

                  <a
                    href="#"
                    className="
                      w-12
                      h-12
                      bg-orange-100
                      rounded-full
                      flex
                      items-center
                      justify-center
                      hover:bg-orange-200
                      transition-colors
                    "
                  >

                    <Facebook className="w-6 h-6 text-orange-600" />

                  </a>

                  <a
                    href="#"
                    className="
                      w-12
                      h-12
                      bg-orange-100
                      rounded-full
                      flex
                      items-center
                      justify-center
                      hover:bg-orange-200
                      transition-colors
                    "
                  >

                    <Instagram className="w-6 h-6 text-orange-600" />

                  </a>

                  <a
                    href="#"
                    className="
                      w-12
                      h-12
                      bg-orange-100
                      rounded-full
                      flex
                      items-center
                      justify-center
                      hover:bg-orange-200
                      transition-colors
                    "
                  >

                    <Twitter className="w-6 h-6 text-orange-600" />

                  </a>

                </div>

              </CardContent>

            </Card>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">

            <Card>

              <CardContent className="p-8">

                <h2 className="text-3xl mb-6">
                  Send Us a Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>

                      <Label htmlFor="name">
                        Your Name
                      </Label>

                      <Input
                        id="name"
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

                    <div>

                      <Label htmlFor="email">
                        Your Email
                      </Label>

                      <Input
                        id="email"
                        type="email"
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

                  </div>

                  <div>

                    <Label htmlFor="subject">
                      Subject
                    </Label>

                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value
                        })
                      }
                      required
                    />

                  </div>

                  <div>

                    <Label htmlFor="message">
                      Message
                    </Label>

                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value
                        })
                      }
                      required
                    />

                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                  >

                    {loading
                      ? "Sending..."
                      : "Send Message"}

                  </Button>

                </form>

              </CardContent>

            </Card>

          </div>

        </div>

        {/* Map Section */}
        <div className="mt-12">

          <Card>

            <CardContent className="p-0">

              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.404125352266!2d80.27071817484287!3d13.082680312407498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52661b2c4b2c4b%3A0xabcdef1234567890!2sChennai!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CraveNest Location"
                ></iframe>

              </div>

            </CardContent>

          </Card>

        </div>

      </div>

    </div>
  );
}