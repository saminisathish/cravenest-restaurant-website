import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  ArrowLeft
} from "lucide-react";

import {
  menuItems,
  reviewsData
} from "../data/menuData";

import { useCart } from "../context/CartContext";

import { toast } from "sonner";

export function FoodDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const item = menuItems.find(
    (item) => item.id === id
  );

  const reviews = reviewsData[id || ""] || [];

  if (!item) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <div className="text-center">

          <h2 className="text-2xl mb-4">
            Item not found
          </h2>

          <Link to="/menu">

            <Button>
              Back to Menu
            </Button>

          </Link>

        </div>

      </div>

    );
  }

  const handleAddToCart = () => {

    addToCart({
      ...item,
      quantity
    });

    toast.success(
      `${quantity} × ${item.name} added to cart!`
    );
  };

  const handleBuyNow = () => {

    addToCart({
      ...item,
      quantity
    });

    navigate("/cart");
  };

  const relatedItems = menuItems
    .filter(
      (i) =>
        i.category === item.category &&
        i.id !== item.id
    )
    .slice(0, 3);

  return (

    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Back Button */}
        <Link to="/menu">

          <Button variant="ghost" className="mb-6">

            <ArrowLeft className="w-4 h-4 mr-2" />

            Back to Menu

          </Button>

        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Image */}
          <div>

            <div className="relative rounded-lg overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[500px] object-cover"
              />

              {item.discount && (

                <Badge className="absolute top-4 right-4 bg-red-500 text-lg px-4 py-2">

                  {item.discount}% OFF

                </Badge>

              )}

            </div>

          </div>

          {/* Details */}
          <div>

            <Badge className="mb-3">
              {item.category}
            </Badge>

            <h1 className="text-4xl mb-4">
              {item.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">

              <div className="flex items-center mr-4">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(item.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />

                ))}

              </div>

              <span className="text-lg">
                {item.rating}
              </span>

              <span className="ml-2 text-gray-500">

                ({item.reviews} reviews)

              </span>

            </div>

            {/* Price */}
            <div className="mb-6">

              <span className="text-4xl text-orange-600">

                ₹{
                  item.discount
                    ? Math.round(
                        item.price *
                          (1 - item.discount / 100)
                      )
                    : item.price
                }

              </span>

              {item.discount && (

                <span className="ml-3 text-xl text-gray-400 line-through">

                  ₹{item.price}

                </span>

              )}

            </div>

            {/* Description */}
            <div className="mb-6">

              <h3 className="text-lg mb-2">
                Description
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>

            </div>

            {/* Ingredients */}
            <div className="mb-6">

              <h3 className="text-lg mb-3">
                Ingredients
              </h3>

              <div className="flex flex-wrap gap-2">

                {item.ingredients.map(
                  (ingredient, index) => (

                    <Badge
                      key={index}
                      variant="outline"
                    >

                      {ingredient}

                    </Badge>

                  )
                )}

              </div>

            </div>

            {/* Quantity Selector */}
            <div className="mb-6">

              <h3 className="text-lg mb-3">
                Quantity
              </h3>

              <div className="flex items-center space-x-3">

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setQuantity(
                      Math.max(1, quantity - 1)
                    )
                  }
                  disabled={quantity <= 1}
                >

                  <Minus className="w-4 h-4" />

                </Button>

                <span className="text-xl w-12 text-center">

                  {quantity}

                </span>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                >

                  <Plus className="w-4 h-4" />

                </Button>

              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">

              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >

                <ShoppingCart className="w-5 h-5 mr-2" />

                Add to Cart

              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="flex-1"
                onClick={handleBuyNow}
              >

                Buy Now

              </Button>

            </div>

          </div>

        </div>

        {/* Reviews Section */}
        <div className="mb-16">

          <h2 className="text-3xl mb-6">
            Customer Reviews
          </h2>

          {reviews.length === 0 ? (

            <Card>

              <CardContent className="p-8 text-center text-gray-500">

                No reviews yet.
                Be the first to review this dish!

              </CardContent>

            </Card>

          ) : (

            <div className="space-y-4">

              {reviews.map((review) => (

                <Card key={review.id}>

                  <CardContent className="p-6">

                    <div className="flex items-start space-x-4">

                      <img
                        src={review.avatar}
                        alt={review.userName}
                        className="w-12 h-12 rounded-full"
                      />

                      <div className="flex-1">

                        <div className="flex items-center justify-between mb-2">

                          <h4>
                            {review.userName}
                          </h4>

                          <span className="text-sm text-gray-500">

                            {review.date}

                          </span>

                        </div>

                        <div className="flex items-center mb-2">

                          {[...Array(5)].map((_, i) => (

                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />

                          ))}

                        </div>

                        <p className="text-gray-600">

                          {review.comment}

                        </p>

                      </div>

                    </div>

                  </CardContent>

                </Card>

              ))}

            </div>

          )}

        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (

          <div>

            <h2 className="text-3xl mb-6">
              You May Also Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {relatedItems.map((relatedItem, index) => (

                <Card
                  key={relatedItem.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >

                  <Link to={`/food/${relatedItem.id}`}>

                    <img
                      src={relatedItem.image}
                      alt={relatedItem.name}
                      className="
                        w-full
                        h-48
                        object-cover
                        hover:scale-105
                        transition-transform
                        duration-300
                      "
                    />

                  </Link>

                  <CardContent className="p-4">

                    <Link to={`/food/${relatedItem.id}`}>

                      <h3 className="mb-2 hover:text-orange-600 transition-colors">

                        {relatedItem.name}

                      </h3>

                    </Link>

                    <div className="flex items-center justify-between">

                      <span className="text-xl text-orange-600">

                        ₹{
                          [299, 399, 549][index % 3]
                        }

                      </span>

                      <div className="flex items-center">

                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

                        <span className="ml-1 text-sm">

                          {relatedItem.rating}

                        </span>

                      </div>

                    </div>

                  </CardContent>

                </Card>

              ))}

            </div>

          </div>

        )}

      </div>


    </div>
  );
}