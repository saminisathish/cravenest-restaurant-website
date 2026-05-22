import { useState } from "react";
import { Link } from "react-router";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

import {
  Star,
  Search,
  ShoppingCart
} from "lucide-react";

import {
  menuItems,
  categories
} from "../data/menuData";

import { useCart } from "../context/CartContext";

import { toast } from "sonner";

export function Menu() {

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const { addToCart } = useCart();

  // Filter Logic
  const filteredItems = menuItems.filter((item) => {

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||

      item.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;

  });

  // Add to Cart
  const handleAddToCart = (
    item: typeof menuItems[0]
  ) => {

    addToCart(item);

    toast.success(
      `${item.name} added to cart!`
    );
  };

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-5xl mb-4 font-bold">

            CraveNest Menu

          </h1>

          <p className="text-xl text-gray-100">

            Discover our exquisite selection of premium dishes

          </p>

        </div>

      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Search */}
        <div className="mb-8">

          <div className="flex flex-col md:flex-row gap-4 mb-6">

            <div className="relative flex-1">

              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

              <Input
                type="text"
                placeholder="Search delicious dishes..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="pl-10"
              />

            </div>

          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">

            {categories.map((category) => (

              <Button
                key={category}
                variant={
                  selectedCategory === category
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  setSelectedCategory(category)
                }
              >

                {category}

              </Button>

            ))}

          </div>

        </div>

        {/* Result Count */}
        <div className="mb-6">

          <p className="text-gray-600">

            Showing {filteredItems.length}{" "}

            {filteredItems.length === 1
              ? "dish"
              : "dishes"}

          </p>

        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (

          <div className="text-center py-16">

            <p className="text-gray-500 text-lg">

              No dishes found.
              Try another search.

            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredItems.map((item) => (

              <Card
                key={item.id}
                className="
                  overflow-hidden
                  hover:shadow-xl
                  transition-all
                  duration-300
                  border-0
                "
              >

                {/* Image */}
                <Link to={`/food/${item.id}`}>

                  <div className="relative overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-full
                        h-56
                        object-cover
                        hover:scale-105
                        transition-transform
                        duration-500
                      "
                    />

                    {/* Discount Badge */}
                    {item.discount && (

                      <Badge className="absolute top-3 right-3 bg-red-500">

                        {item.discount}% OFF

                      </Badge>

                    )}

                    {/* Category Badge */}
                    <Badge className="absolute top-3 left-3 bg-black/70">

                      {item.category}

                    </Badge>

                  </div>

                </Link>

                {/* Content */}
                <CardContent className="p-5">

                  {/* Title */}
                  <Link to={`/food/${item.id}`}>

                    <h3 className="
                      text-xl
                      font-semibold
                      mb-2
                      hover:text-orange-600
                      transition-colors
                    ">

                      {item.name}

                    </h3>

                  </Link>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">

                    {item.description}

                  </p>

                  {/* Price + Rating */}
                  <div className="flex items-center justify-between mb-4">

                    {/* Price */}
                    <div>

                      <span className="text-2xl font-bold text-orange-600">

                        ₹{item.price}

                      </span>

                      {item.discount && (

                        <span className="ml-2 text-sm text-gray-400 line-through">

                          ₹{
                            Math.round(
                              item.price +
                              item.price * 0.2
                            )
                          }

                        </span>

                      )}

                    </div>

                    {/* Rating */}
                    <div className="flex items-center">

                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />

                      <span className="ml-1 font-medium">

                        {item.rating}

                      </span>

                      <span className="ml-1 text-sm text-gray-500">

                        ({item.reviews})

                      </span>

                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">

                    <Link
                      to={`/food/${item.id}`}
                      className="flex-1"
                    >

                      <Button
                        variant="outline"
                        className="w-full"
                      >

                        View Details

                      </Button>

                    </Link>

                    <Button
                      onClick={() =>
                        handleAddToCart(item)
                      }
                      className="
                        flex-1
                        bg-orange-600
                        hover:bg-orange-700
                      "
                    >

                      <ShoppingCart className="w-4 h-4 mr-2" />

                      Add

                    </Button>

                  </div>

                </CardContent>

              </Card>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}