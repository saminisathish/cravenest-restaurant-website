import { Card, CardContent } from "../components/ui/card";

import {
  Award,
  Heart,
  Users,
  Target,
} from "lucide-react";

export function About() {

  const team = [

    {
      name: "Chef Arjun Mehta",
      role: "Executive Chef",
      image: "/images/chef1.png",
      bio:
        "With over 20 years of culinary expertise, Chef Arjun brings authentic Indian flavors and innovation to every dish.",
    },

    {
      name: "Chef Rahul Verma",
      role: "Pastry Chef",
      image: "/images/chef2.png",
      bio:
        "Specialized in premium desserts and fusion sweets with a modern gourmet touch.",
    },

    {
      name: "Chef Priya Sharma",
      role: "Sous Chef",
      image: "/images/chef3.png",
      bio:
        "Expert in luxury fine dining and creative presentation inspired by Indian culinary traditions.",
    },

    {
      name: "Chef Ananya Iyer",
      role: "Restaurant Manager",
      image: "/images/chef4.png",
      bio:
        "Leading our hospitality team to create unforgettable dining experiences with warmth and elegance.",
    },

  ];

  const values = [

    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every dish using the finest ingredients and culinary techniques.",
    },

    {
      icon: Heart,
      title: "Passion",
      description:
        "Our love for food inspires us to create memorable dining experiences for every guest.",
    },

    {
      icon: Users,
      title: "Community",
      description:
        "We believe in building strong relationships with our guests and local producers.",
    },

    {
      icon: Target,
      title: "Innovation",
      description:
        "We constantly explore modern flavors while respecting traditional culinary artistry.",
    },

  ];

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-5xl font-bold mb-4">
            About CraveNest
          </h1>

          <p className="text-xl text-gray-100">
            A culinary journey of passion and excellence
          </p>

        </div>

      </div>

      {/* Our Story */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>

              <h2 className="text-4xl font-bold mb-6">
                Our Story
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-9 text-justify max-w-2xl">

  <p>
    Founded in 2011, CraveNest has been serving exceptional cuisine to food lovers for over 15 years. What started as a small family restaurant has grown into one of India’s most loved luxury dining destinations.
  </p>

  <p>
    Our chefs blend authentic Indian flavors with modern culinary techniques to create dishes filled with passion, creativity, and excellence using premium ingredients.
  </p>

  <p>
    At CraveNest, we believe dining is more than just food — it is about creating memories, celebrating special moments, and bringing people together through extraordinary hospitality.
  </p>

</div>

            </div>

            {/* Right Image */}
            <div>

              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
                alt="Restaurant Interior"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <Card className="shadow-lg border-0">

              <CardContent className="p-8">

                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">

                  <Target className="w-8 h-8 text-orange-600" />

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Our Mission
                </h3>

                <p className="text-gray-600 text-lg leading-8">

                  To provide unforgettable dining experiences through premium cuisine, warm hospitality, and world-class service.

                </p>

              </CardContent>

            </Card>

            {/* Vision */}
            <Card className="shadow-lg border-0">

              <CardContent className="p-8">

                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">

                  <Award className="w-8 h-8 text-orange-600" />

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-600 text-lg leading-8">

                  To become a globally recognized fine-dining destination known for innovation, elegance, and exceptional culinary artistry.

                </p>

              </CardContent>

            </Card>

          </div>

        </div>

      </section>

      {/* Values */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold mb-4">
              Our Values
            </h2>

            <p className="text-gray-600 text-lg">
              The principles that define CraveNest
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((value, index) => (

              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0"
              >

                <CardContent className="p-6">

                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">

                    <value.icon className="w-8 h-8 text-orange-600" />

                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600">
                    {value.description}
                  </p>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold mb-4">
              Meet Our Team
            </h2>

            <p className="text-gray-600 text-lg">
              The talented people behind your luxury dining experience
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {team.map((member, index) => (

              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0"
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />

                <CardContent className="p-6">

                  <h3 className="text-xl font-bold mb-1">
                    {member.name}
                  </h3>

                  <p className="text-orange-600 mb-3">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm leading-6">
                    {member.bio}
                  </p>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>

      {/* Awards */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold mb-4">
              Awards & Recognition
            </h2>

            <p className="text-xl text-gray-100">
              Celebrating our achievements
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center">

              <Award className="w-16 h-16 mx-auto mb-4" />

              <h3 className="text-2xl font-bold mb-2">
                Best Fine Dining
              </h3>

              <p className="text-gray-100">
                India Culinary Awards 2025
              </p>

            </div>

            <div className="text-center">

              <Award className="w-16 h-16 mx-auto mb-4" />

              <h3 className="text-2xl font-bold mb-2">
                Luxury Dining Excellence
              </h3>

              <p className="text-gray-100">
                Hospitality Awards 2024
              </p>

            </div>

            <div className="text-center">

              <Award className="w-16 h-16 mx-auto mb-4" />

              <h3 className="text-2xl font-bold mb-2">
                Chef of the Year
              </h3>

              <p className="text-gray-100">
                National Culinary Awards 2023
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}