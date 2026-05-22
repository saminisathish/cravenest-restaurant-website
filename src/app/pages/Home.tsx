import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, ArrowRight, Clock, Users, Award } from "lucide-react";
import { menuItems } from "../data/menuData";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export function Home() {

  const { addToCart } = useCart();

  const featuredDishes =
    menuItems.filter(
      (item) => item.isFeatured
    );

  const popularFoods =
    menuItems.filter(
      (item) => item.isPopular
    );

  const handleAddToCart = (
    item: typeof menuItems[0]
  ) => {

    addToCart(item);

    toast.success(
      `${item.name} added to cart!`
    );
  };

  return (

    <div>

      {/* Hero Banner */}
      <section
        className="
          relative
          h-screen
          bg-cover
          bg-center
          bg-no-repeat
          flex
          items-center
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url('/images/home-banner.jpg')
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

          <div className="max-w-2xl">

            <h1 className="
              text-5xl
              md:text-6xl
              mb-6
            ">
              Experience Fine Dining at CraveNest
            </h1>

            <p className="
              text-xl
              mb-8
              text-gray-200
            ">
              Savor the finest cuisines crafted by
              world-class chefs in an elegant atmosphere
            </p>

            <div className="
              flex
              flex-wrap
              gap-4
            ">

              <Link to="/menu">

                <Button
                  size="lg"
                  className="text-lg"
                >

                  View Menu

                  <ArrowRight className="
                    ml-2
                    w-5
                    h-5
                  " />

                </Button>

              </Link>

              <Link to="/contact">

                <Button
                  size="lg"
                  variant="outline"
                  className="
                    text-lg
                    bg-white/10
                    backdrop-blur-sm
                    border-white
                    text-white
                    hover:bg-white/20
                  "
                >

                  Reserve Table

                </Button>

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="
        py-12
        bg-orange-600
        text-white
      ">

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
            md:grid-cols-3
            gap-8
            text-center
          ">

            <div>

              <Clock className="
                w-12
                h-12
                mx-auto
                mb-3
              " />

              <h3 className="
                text-3xl
                mb-2
              ">
                15+
              </h3>

              <p>
                Years of Excellence
              </p>

            </div>

            <div>

              <Users className="
                w-12
                h-12
                mx-auto
                mb-3
              " />

              <h3 className="
                text-3xl
                mb-2
              ">
                50K+
              </h3>

              <p>
                Happy Customers
              </p>

            </div>

            <div>

              <Award className="
                w-12
                h-12
                mx-auto
                mb-3
              " />

              <h3 className="
                text-3xl
                mb-2
              ">
                25+
              </h3>

              <p>
                Awards Won
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Featured Dishes */}
      <section className="
        py-16
        bg-gray-50
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        ">

          <div className="
            text-center
            mb-12
          ">

            <h2 className="
              text-4xl
              mb-4
            ">
              Featured Dishes
            </h2>

            <p className="
              text-gray-600
              text-lg
            ">
              Handpicked favorites by our master chefs
            </p>

          </div>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">

            {featuredDishes.map((dish) => (

              <Card
                key={dish.id}
                className="
                  overflow-hidden
                  hover:shadow-lg
                  transition-shadow
                "
              >

                <div className="relative">

                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="
                      w-full
                      h-48
                      object-cover
                    "
                  />

                  {dish.discount && (

                    <Badge className="
                      absolute
                      top-2
                      right-2
                      bg-red-500
                    ">

                      {dish.discount}% OFF

                    </Badge>

                  )}

                </div>

                <CardContent className="p-4">

                  <h3 className="
                    text-lg
                    mb-2
                  ">
                    {dish.name}
                  </h3>

                  <p className="
                    text-sm
                    text-gray-600
                    mb-3
                    line-clamp-2
                  ">
                    {dish.description}
                  </p>

                  <div className="
                    flex
                    items-center
                    justify-between
                    mb-3
                  ">

                    <span className="
                      text-xl
                      text-orange-600
                    ">
                      ₹{dish.price}
                    </span>

                    <div className="
                      flex
                      items-center
                    ">

                      <Star className="
                        w-4
                        h-4
                        fill-yellow-400
                        text-yellow-400
                      " />

                      <span className="
                        ml-1
                        text-sm
                      ">
                        {dish.rating}
                      </span>

                    </div>

                  </div>

                  <Button
                    className="w-full"
                    onClick={() =>
                      handleAddToCart(dish)
                    }
                  >

                    Add to Cart

                  </Button>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>

      {/* Popular Foods */}
      <section className="py-16">

        <div className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        ">

          <div className="
            text-center
            mb-12
          ">

            <h2 className="
              text-4xl
              mb-4
            ">
              Popular Foods
            </h2>

            <p className="
              text-gray-600
              text-lg
            ">
              Customer favorites you can't miss
            </p>

          </div>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          ">

            {popularFoods.map((dish) => (

              <Card
                key={dish.id}
                className="
                  overflow-hidden
                  hover:shadow-lg
                  transition-shadow
                "
              >

                <div className="flex">

                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="
                      w-32
                      h-32
                      object-cover
                    "
                  />

                  <CardContent className="
                    p-4
                    flex-1
                  ">

                    <h3 className="mb-2">
                      {dish.name}
                    </h3>

                    <p className="
                      text-sm
                      text-gray-600
                      mb-2
                      line-clamp-2
                    ">
                      {dish.description}
                    </p>

                    <div className="
                      flex
                      items-center
                      justify-between
                    ">

                      <span className="
                        text-lg
                        text-orange-600
                      ">
                        ₹{dish.price}
                      </span>

                      <div className="
                        flex
                        items-center
                      ">

                        <Star className="
                          w-4
                          h-4
                          fill-yellow-400
                          text-yellow-400
                        " />

                        <span className="
                          ml-1
                          text-sm
                        ">
                          {dish.rating}
                        </span>

                      </div>

                    </div>

                  </CardContent>

                </div>

              </Card>

            ))}

          </div>

          <div className="
            text-center
            mt-8
          ">

            <Link to="/menu">

              <Button
                size="lg"
                variant="outline"
              >

                View Full Menu

                <ArrowRight className="
                  ml-2
                  w-5
                  h-5
                " />

              </Button>

            </Link>

          </div>

        </div>

      </section>

    </div>

  );
}