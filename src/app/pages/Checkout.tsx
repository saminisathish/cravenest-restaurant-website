import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent } from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Textarea } from "../components/ui/textarea";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";
import { CreditCard, Wallet, MapPin } from "lucide-react";

export function Checkout() {

  const navigate = useNavigate();

  const { items, getTotalPrice, clearCart } = useCart();

  const { user, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: "",
    city: "",
    zipCode: "",
    notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [loading, setLoading] = useState(false);

  const totalPrice = getTotalPrice();

  const deliveryFee = totalPrice > 799 ? 0 : 79;

  const tax = totalPrice * 0.05;

  const finalTotal = totalPrice + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">

        <div className="text-center">

          <h2 className="text-2xl mb-4">
            Your cart is empty
          </h2>

          <Button onClick={() => navigate("/menu")}>
            Explore Menu
          </Button>

        </div>

      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">

        <div className="text-center">

          <h2 className="text-2xl mb-4">
            Please login to continue
          </h2>

          <Button onClick={() => navigate("/login")}>
            Go to Login
          </Button>

        </div>

      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    clearCart();

    toast.success("Your CraveNest order has been placed successfully! 🎉");

    navigate("/");

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-4xl mb-8">
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">

              {/* Delivery Address */}
              <Card>

                <CardContent className="p-6">

                  <div className="flex items-center mb-4">

                    <MapPin className="w-5 h-5 mr-2" />

                    <h2 className="text-xl">
                      Delivery Address
                    </h2>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="md:col-span-2">

                      <Label htmlFor="fullName">
                        Full Name
                      </Label>

                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fullName: e.target.value
                          })
                        }
                        required
                      />

                    </div>

                    <div>

                      <Label htmlFor="email">
                        Email
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

                    <div>

                      <Label htmlFor="phone">
                        Phone
                      </Label>

                      <Input
                        id="phone"
                        type="tel"
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

                    <div className="md:col-span-2">

                      <Label htmlFor="address">
                        Street Address
                      </Label>

                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: e.target.value
                          })
                        }
                        required
                      />

                    </div>

                    <div>

                      <Label htmlFor="city">
                        City
                      </Label>

                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            city: e.target.value
                          })
                        }
                        required
                      />

                    </div>

                    <div>

                      <Label htmlFor="zipCode">
                        PIN Code
                      </Label>

                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            zipCode: e.target.value
                          })
                        }
                        required
                      />

                    </div>

                    <div className="md:col-span-2">

                      <Label htmlFor="notes">
                        Delivery Notes (Optional)
                      </Label>

                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            notes: e.target.value
                          })
                        }
                        placeholder="Any special instructions for delivery..."
                        rows={3}
                      />

                    </div>

                  </div>

                </CardContent>

              </Card>

              {/* Payment Method */}
              <Card>

                <CardContent className="p-6">

                  <div className="flex items-center mb-4">

                    <CreditCard className="w-5 h-5 mr-2" />

                    <h2 className="text-xl">
                      Payment Method
                    </h2>

                  </div>

                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >

                    <div className="flex items-center space-x-2 p-4 border rounded-lg mb-3 cursor-pointer hover:bg-gray-50">

                      <RadioGroupItem value="card" id="card" />

                      <Label
                        htmlFor="card"
                        className="flex-1 cursor-pointer"
                      >

                        <div className="flex items-center">

                          <CreditCard className="w-5 h-5 mr-2" />

                          <span>
                            Credit / Debit Card
                          </span>

                        </div>

                      </Label>

                    </div>

                    <div className="flex items-center space-x-2 p-4 border rounded-lg mb-3 cursor-pointer hover:bg-gray-50">

                      <RadioGroupItem value="wallet" id="wallet" />

                      <Label
                        htmlFor="wallet"
                        className="flex-1 cursor-pointer"
                      >

                        <div className="flex items-center">

                          <Wallet className="w-5 h-5 mr-2" />

                          <span>
                            UPI / Digital Wallet
                          </span>

                        </div>

                      </Label>

                    </div>

                    <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">

                      <RadioGroupItem value="cod" id="cod" />

                      <Label
                        htmlFor="cod"
                        className="flex-1 cursor-pointer"
                      >

                        <span>
                          Cash on Delivery
                        </span>

                      </Label>

                    </div>

                  </RadioGroup>

                  {paymentMethod === "card" && (

                    <div className="mt-4 space-y-4">

                      <div>

                        <Label htmlFor="cardNumber">
                          Card Number
                        </Label>

                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                        />

                      </div>

                      <div className="grid grid-cols-2 gap-4">

                        <div>

                          <Label htmlFor="expiry">
                            Expiry Date
                          </Label>

                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                          />

                        </div>

                        <div>

                          <Label htmlFor="cvv">
                            CVV
                          </Label>

                          <Input
                            id="cvv"
                            placeholder="123"
                          />

                        </div>

                      </div>

                    </div>

                  )}

                </CardContent>

              </Card>

            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">

              <Card className="sticky top-20">

                <CardContent className="p-6">

                  <h2 className="text-2xl mb-6">
                    Order Summary
                  </h2>

                  {/* Items */}
                  <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">

                    {items.map((item, index) => (

                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >

                        <span className="text-gray-600">

                          {item.quantity}× {item.name}

                        </span>

                        <span>

                          ₹{
                            [299, 399, 549, 699, 799][index % 5]
                          }

                        </span>

                      </div>

                    ))}

                  </div>

                  <div className="border-t pt-4 space-y-3">

                    <div className="flex justify-between">

                      <span className="text-gray-600">
                        Subtotal
                      </span>

                      <span>
                        ₹{totalPrice.toFixed(0)}
                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-gray-600">
                        Delivery Fee
                      </span>

                      <span>
                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-gray-600">
                        GST (5%)
                      </span>

                      <span>
                        ₹{tax.toFixed(0)}
                      </span>

                    </div>

                    <div className="border-t pt-3">

                      <div className="flex justify-between text-lg">

                        <span>
                          Total
                        </span>

                        <span className="text-orange-600">
                          ₹{finalTotal.toFixed(0)}
                        </span>

                      </div>

                    </div>

                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-6"
                    size="lg"
                    disabled={loading}
                  >

                    {loading
                      ? "Processing..."
                      : "Place Order"}

                  </Button>

                </CardContent>

              </Card>

            </div>

          </div>

        </form>

      </div>


    </div>
  );
}