import { Card, CardContent } from "../components/ui/card";
import { Award, Heart, Users, Target } from "lucide-react";

export function About() {
  const team = [
    {
      name: "Chef Marco Romano",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1697898109582-40f15c65f174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjBjb29raW5nfGVufDF8fHx8MTc3ODgzODA2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "With over 20 years of culinary expertise, Chef Marco brings passion and innovation to every dish.",
    },
    {
      name: "Chef Sarah Chen",
      role: "Pastry Chef",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf",
      bio: "Award-winning pastry chef specializing in French desserts and modern confections.",
    },
    {
      name: "Chef David Martinez",
      role: "Sous Chef",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=d1d4f9",
      bio: "Trained in Michelin-starred kitchens, David ensures excellence in every preparation.",
    },
    {
      name: "Emma Thompson",
      role: "Restaurant Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=ffd5dc",
      bio: "Leading our front-of-house team to deliver exceptional dining experiences.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every dish, using only the finest ingredients and time-honored techniques.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for food drives us to create memorable culinary experiences that delight our guests.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in building lasting relationships with our customers and supporting local producers.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "While respecting tradition, we constantly explore new flavors and modern culinary techniques.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-5xl mb-4">
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

            <div>

              <h2 className="text-4xl mb-6">
                Our Story
              </h2>

              <div className="space-y-4 text-gray-600 text-lg">

                <p>
                  Founded in 2011, CraveNest has been serving exceptional cuisine to food lovers
                  for over 15 years. What started as a small family restaurant has grown into
                  one of the most beloved dining destinations in the city.
                </p>

                <p>
                  Our journey began with a simple vision: to create a place where people could
                  gather, celebrate, and enjoy extraordinary food made with love and care. Every
                  dish we serve tells a story of tradition, innovation, and our commitment to
                  culinary excellence.
                </p>

                <p>
                  Today, we continue to honor our roots while embracing new culinary techniques
                  and flavors. Our team of talented chefs works tirelessly to bring you dishes
                  that not only satisfy your taste buds but also create lasting memories.
                </p>

              </div>
            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1758648207365-df458d3e83f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50JTIwZGluaW5nfGVufDF8fHx8MTc3ODgzODA2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Restaurant Interior"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />

            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <Card>

              <CardContent className="p-8">

                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>

                <h3 className="text-2xl mb-4">
                  Our Mission
                </h3>

                <p className="text-gray-600 text-lg">
                  To provide our guests with an unforgettable dining experience through exceptional
                  food, warm hospitality, and a commitment to sustainability. We aim to be more than
                  just a restaurant – we want to be a cherished part of our community.
                </p>

              </CardContent>

            </Card>

            <Card>

              <CardContent className="p-8">

                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>

                <h3 className="text-2xl mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-600 text-lg">
                  To become the leading restaurant known for culinary innovation, exceptional service,
                  and sustainable practices. We envision a future where CraveNest is synonymous with
                  quality dining and memorable experiences for generations to come.
                </p>

              </CardContent>

            </Card>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl mb-4">
              Our Values
            </h2>

            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((value, index) => (

              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >

                <CardContent className="p-6">

                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-orange-600" />
                  </div>

                  <h3 className="text-xl mb-3">
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

            <h2 className="text-4xl mb-4">
              Meet Our Team
            </h2>

            <p className="text-gray-600 text-lg">
              The talented people behind your dining experience
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {team.map((member, index) => (

              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />

                <CardContent className="p-6">

                  <h3 className="text-xl mb-1">
                    {member.name}
                  </h3>

                  <p className="text-orange-600 mb-3">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>

                </CardContent>

              </Card>

            ))}

          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl mb-4">
              Awards & Recognition
            </h2>

            <p className="text-xl text-gray-100">
              Celebrating our achievements
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center">

              <Award className="w-16 h-16 mx-auto mb-4" />

              <h3 className="text-2xl mb-2">
                Best Fine Dining
              </h3>

              <p className="text-gray-100">
                City Food Awards 2025
              </p>

            </div>

            <div className="text-center">

              <Award className="w-16 h-16 mx-auto mb-4" />

              <h3 className="text-2xl mb-2">
                Michelin Star
              </h3>

              <p className="text-gray-100">
                Michelin Guide 2024
              </p>

            </div>

            <div className="text-center">

              <Award className="w-16 h-16 mx-auto mb-4" />

              <h3 className="text-2xl mb-2">
                Chef of the Year
              </h3>

              <p className="text-gray-100">
                National Culinary Awards 2023
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}


    </div>
  );
}