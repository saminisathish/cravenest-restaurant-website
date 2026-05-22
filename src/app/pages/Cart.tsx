import { Link } from "react-router";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag
} from "lucide-react";

import { useCart } from "../context/CartContext";

import { toast } from "sonner";

export function Cart() {

  const {
    items,
    updateQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();

  const handleRemove = (
    id: string,
    name: string
  ) => {

    removeFromCart(id);

    toast.success(
      `${name} removed from cart`
    );
  };

  // Empty Cart
  if (items.length === 0) {

    return (

      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">

        <div className="text-center">

          <ShoppingBag className="w-24 h-24 mx-auto mb-4 text-gray-300" />

          <h2 className="text-2xl mb-2">

            Your cart is empty

          </h2>

          <p className="text-gray-600 mb-6">

            Start adding delicious dishes
            from CraveNest to your cart!

          </p>

          <Link to="/menu">

            <Button size="lg">

              Explore Menu

            </Button>

          </Link>

        </div>

      </div>

    );
  }

  // Correct Price Calculations
  const subtotal = getTotalPrice();

  const deliveryFee =
    subtotal > 799 ? 0 : 79;

  const gst =
    Math.round(subtotal * 0.05);

  const total =
    subtotal + deliveryFee + gst;

  return (

    <div className="min-h-screen bg-gray-50 py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h1 className="text-4xl mb-8">

          Shopping Cart

        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">

            {items.map((item) => (

              <Card key={item.id}>

                <CardContent className="p-6">

                  <div className="flex gap-4">

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-24
                        h-24
                        object-cover
                        rounded-lg
                      "
                    />

                    {/* Content */}
                    <div className="flex-1">

                      <div className="flex justify-between items-start mb-2">

                        <div>

                          <h3 className="text-lg">

                            {item.name}

                          </h3>

                          <p className="text-sm text-gray-600">

                            {item.category}

                          </p>

                        </div>

                        {/* Dynamic Price */}
                        <span className="text-lg text-orange-600">

                          ₹{item.price}

                        </span>

                      </div>

                      {/* Quantity + Remove */}
                      <div className="flex items-center justify-between mt-4">

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">

                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity - 1
                              )
                            }
                          >

                            <Minus className="w-4 h-4" />

                          </Button>

                          <span className="w-12 text-center">

                            {item.quantity}

                          </span>

                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity + 1
                              )
                            }
                          >

                            <Plus className="w-4 h-4" />

                          </Button>

                        </div>

                        {/* Remove */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleRemove(
                              item.id,
                              item.name
                            )
                          }
                          className="
                            text-red-600
                            hover:text-red-700
                            hover:bg-red-50
                          "
                        >

                          <Trash2 className="w-4 h-4 mr-2" />

                          Remove

                        </Button>

                      </div>

                    </div>

                  </div>

                </CardContent>

              </Card>

            ))}

          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">

            <Card className="sticky top-20">

              <CardContent className="p-6">

                <h2 className="text-2xl mb-6">

                  Order Summary

                </h2>

                {/* Summary */}
                <div className="space-y-4 mb-6">

                  {/* Subtotal */}
                  <div className="flex justify-between">

                    <span className="text-gray-600">

                      Subtotal

                    </span>

                    <span>

                      ₹{subtotal}

                    </span>

                  </div>

                  {/* Delivery */}
                  <div className="flex justify-between">

                    <span className="text-gray-600">

                      Delivery Fee

                    </span>

                    <span>

                      {deliveryFee === 0
                        ? "FREE"
                        : `₹${deliveryFee}`}

                    </span>

                  </div>

                  {/* Free Delivery Note */}
                  {deliveryFee !== 0 && (

                    <p className="text-sm text-orange-600">

                      💡 Add ₹{800 - subtotal}
                      more for free delivery!

                    </p>

                  )}

                  {/* GST */}
                  <div className="flex justify-between">

                    <span className="text-gray-600">

                      GST (5%)

                    </span>

                    <span>

                      ₹{gst}

                    </span>

                  </div>

                  <hr />

                  {/* Total */}
                  <div className="flex justify-between text-xl font-bold">

                    <span>

                      Total

                    </span>

                    <span className="text-orange-600">

                      ₹{total}

                    </span>

                  </div>

                </div>

                {/* Checkout */}
                <Link to="/checkout">

                  <Button
                    className="w-full"
                    size="lg"
                  >

                    Proceed to Checkout

                  </Button>

                </Link>

                {/* Continue Shopping */}
                <Link to="/menu">

                  <Button
                    variant="outline"
                    className="w-full mt-3"
                  >

                    Continue Shopping

                  </Button>

                </Link>

              </CardContent>

            </Card>

          </div>

        </div>

      </div>

    </div>

  );
}