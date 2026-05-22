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

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

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

    <div className="min-h-screen bg-[#F8F5F2]">

      {/* Hero Section */}
      <section
        className="
          relative
          h-[55vh]
          bg-cover
          bg-center
          bg-no-repeat
          flex
          items-center
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.65),
              rgba(0,0,0,0.65)
            ),
            url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop')
          `
        }}
      >

        <div className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          text-white
        ">

          <div className="max-w-3xl">

            <p className="
              uppercase
              tracking-[5px]
              text-orange-400
              mb-4
            ">
              Get In Touch
            </p>

            <h1 className="
              text-5xl
              md:text-7xl
              font-bold
              mb-6
            ">
              Contact
              <span className="text-orange-400">
                {" "}CraveNest
              </span>
            </h1>

            <p className="
              text-xl
              text-gray-200
              leading-9
            ">
              We would love to hear from you and make your dining experience unforgettable.
            </p>

          </div>

        </div>

      </section>

      {/* Contact Content */}
      <section className="py-20">

        <div className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        ">

          <div className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-12
          ">

            {/* Contact Info */}
            <div className="
              lg:col-span-1
              space-y-6
            ">

              <Card className="
                border-0
                shadow-xl
                rounded-3xl
              ">

                <CardContent className="p-8">

                  <h2 className="
                    text-3xl
                    font-bold
                    mb-8
                    text-[#1A120B]
                  ">
                    Contact Information
                  </h2>

                  {/* Address */}
                  <div className="
                    flex
                    items-start
                    space-x-4
                    mb-8
                  ">

                    <div className="
                      w-14
                      h-14
                      bg-orange-100
                      rounded-full
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    ">

                      <MapPin className="
                        w-7
                        h-7
                        text-orange-600
                      " />

                    </div>

                    <div>

                      <h3 className="
                        font-semibold
                        text-xl
                        mb-2
                      ">
                        Address
                      </h3>

                      <p className="
                        text-gray-600
                        leading-7
                      ">
                        45 Food Street
                        <br />
                        Chennai, Tamil Nadu 600028
                        <br />
                        India
                      </p>

                    </div>

                  </div>

                  {/* Phone */}
                  <div className="
                    flex
                    items-start
                    space-x-4
                    mb-8
                  ">

                    <div className="
                      w-14
                      h-14
                      bg-orange-100
                      rounded-full
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    ">

                      <Phone className="
                        w-7
                        h-7
                        text-orange-600
                      " />

                    </div>

                    <div>

                      <h3 className="
                        font-semibold
                        text-xl
                        mb-2
                      ">
                        Phone
                      </h3>

                      <p className="
                        text-gray-600
                        leading-7
                      ">
                        Main: +91 98765 43210
                        <br />
                        Reservations: +91 91234 56789
                      </p>

                    </div>

                  </div>

                  {/* Email */}
                  <div className="
                    flex
                    items-start
                    space-x-4
                    mb-8
                  ">

                    <div className="
                      w-14
                      h-14
                      bg-orange-100
                      rounded-full
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    ">

                      <Mail className="
                        w-7
                        h-7
                        text-orange-600
                      " />

                    </div>

                    <div>

                      <h3 className="
                        font-semibold
                        text-xl
                        mb-2
                      ">
                        Email
                      </h3>

                      <p className="
                        text-gray-600
                        leading-7
                      ">
                        info@cravenest.com
                        <br />
                        reservations@cravenest.com
                      </p>

                    </div>

                  </div>

                  {/* Hours */}
                  <div className="
                    flex
                    items-start
                    space-x-4
                  ">

                    <div className="
                      w-14
                      h-14
                      bg-orange-100
                      rounded-full
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    ">

                      <Clock className="
                        w-7
                        h-7
                        text-orange-600
                      " />

                    </div>

                    <div>

                      <h3 className="
                        font-semibold
                        text-xl
                        mb-2
                      ">
                        Opening Hours
                      </h3>

                      <p className="
                        text-gray-600
                        leading-7
                      ">
                        Monday - Thursday
                        <br />
                        11:00 AM - 10:00 PM

                        <br />
                        <br />

                        Friday - Sunday
                        <br />
                        11:00 AM - 11:30 PM
                      </p>

                    </div>

                  </div>

                </CardContent>

              </Card>

              {/* Social Media */}
              <Card className="
                border-0
                shadow-xl
                rounded-3xl
              ">

                <CardContent className="p-8">

                  <h3 className="
                    text-2xl
                    font-bold
                    mb-6
                  ">
                    Follow CraveNest
                  </h3>

                  <div className="
                    flex
                    space-x-4
                  ">

                    {[Facebook, Instagram, Twitter].map(
                      (Icon, index) => (

                        <a
                          key={index}
                          href="#"
                          className="
                            w-14
                            h-14
                            bg-orange-100
                            rounded-full
                            flex
                            items-center
                            justify-center
                            hover:bg-orange-500
                            hover:text-white
                            transition-all
                            duration-300
                          "
                        >

                          <Icon className="
                            w-6
                            h-6
                            text-orange-600
                          " />

                        </a>

                      )
                    )}

                  </div>

                </CardContent>

              </Card>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">

              <Card className="
                border-0
                shadow-xl
                rounded-3xl
              ">

                <CardContent className="p-10">

                  <h2 className="
                    text-4xl
                    font-bold
                    mb-8
                    text-[#1A120B]
                  ">
                    Send Us a Message
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

                    <div className="
                      grid
                      grid-cols-1
                      md:grid-cols-2
                      gap-6
                    ">

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
                          className="mt-2 h-12"
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
                          className="mt-2 h-12"
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
                        className="mt-2 h-12"
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
                        className="mt-2"
                      />

                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="
                        w-full
                        h-14
                        text-lg
                      "
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
          <div className="mt-20">

            <div className="
              text-center
              mb-8
            ">

              <h2 className="
                text-4xl
                font-bold
                text-[#1A120B]
                mb-4
              ">
                Find Us Here
              </h2>

              <p className="
                text-gray-600
                text-lg
              ">
                Visit CraveNest and enjoy an unforgettable dining experience
              </p>

            </div>

            <Card className="
              overflow-hidden
              border-0
              shadow-2xl
              rounded-3xl
            ">

              <CardContent className="p-0">

                <div className="
                  w-full
                  h-[500px]
                ">

                  <iframe
                    src="https://www.google.com/maps?q=Chennai&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CraveNest Location"
                    className="rounded-3xl"
                  ></iframe>

                </div>

              </CardContent>

            </Card>

          </div>

        </div>

      </section>

    </div>

  );
}