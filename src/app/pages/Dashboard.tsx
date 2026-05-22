import { useState } from "react";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import { Textarea } from "../components/ui/textarea";

import { Badge } from "../components/ui/badge";

import {
  DollarSign,
  ShoppingBag,
  TrendingUp,
  Users,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";

import { toast } from "sonner";

export function Dashboard() {

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  // Dashboard Statistics
  const stats = {
    totalOrders: 1247,
    revenue: 452300,
    popularItems: 156,
    customers: 892,
  };

  // Recent Orders
  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Rahul Sharma",
      items: "2 items",
      total: 4599,
      status: "Completed",
      date: "2026-05-15",
    },
    {
      id: "ORD-002",
      customer: "Priya Verma",
      items: "3 items",
      total: 6250,
      status: "Pending",
      date: "2026-05-15",
    },
    {
      id: "ORD-003",
      customer: "Arjun Kumar",
      items: "1 item",
      total: 2899,
      status: "Processing",
      date: "2026-05-14",
    },
    {
      id: "ORD-004",
      customer: "Sneha Reddy",
      items: "4 items",
      total: 8999,
      status: "Completed",
      date: "2026-05-14",
    },
    {
      id: "ORD-005",
      customer: "Karan Patel",
      items: "2 items",
      total: 5200,
      status: "Cancelled",
      date: "2026-05-13",
    },
  ];

  // Popular Dishes
  const popularItems = [
    {
      name: "Paneer Tikka",
      orders: 234,
      revenue: 67816,
    },
    {
      name: "Butter Chicken",
      orders: 198,
      revenue: 69280,
    },
    {
      name: "Veg Biryani",
      orders: 187,
      revenue: 28031,
    },
    {
      name: "Masala Dosa",
      orders: 145,
      revenue: 47835,
    },
  ];

  // Add Menu Item
  const handleAddItem = () => {

    toast.success(
      "Menu item added successfully!"
    );

    setIsAddDialogOpen(false);

    setNewItem({
      name: "",
      description: "",
      price: "",
      category: "",
    });
  };

  // Status Badge Colors
  const getStatusColor = (status: string) => {

    switch (status) {

      case "Completed":
        return "bg-green-100 text-green-800";

      case "Pending":
        return "bg-yellow-100 text-yellow-800";

      case "Processing":
        return "bg-blue-100 text-blue-800";

      case "Cancelled":
        return "bg-red-100 text-red-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (

    <div className="min-h-screen bg-[#F5E6D3] py-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold mb-2 text-[#5C4033]">

            CraveNest Dashboard

          </h1>

          <p className="text-[#7A5C4D]">

            Manage orders, revenue, customers,
            and menu items.

          </p>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          {/* Total Orders */}
          <Card className="bg-[#FFF8F0] shadow-md border-0">

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-600 mb-1">
                    Total Orders
                  </p>

                  <p className="text-3xl font-bold text-[#5C4033]">
                    {stats.totalOrders}
                  </p>

                </div>

                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">

                  <ShoppingBag className="w-6 h-6 text-orange-600" />

                </div>

              </div>

              <p className="text-sm text-green-600 mt-2">
                ↑ 12% from last month
              </p>

            </CardContent>

          </Card>

          {/* Revenue */}
          <Card className="bg-[#FFF8F0] shadow-md border-0">

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-600 mb-1">
                    Revenue
                  </p>

                  <p className="text-3xl font-bold text-[#5C4033]">
                    ₹{stats.revenue.toLocaleString()}
                  </p>

                </div>

                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">

                  <DollarSign className="w-6 h-6 text-green-600" />

                </div>

              </div>

              <p className="text-sm text-green-600 mt-2">
                ↑ 18% from last month
              </p>

            </CardContent>

          </Card>

          {/* Popular Items */}
          <Card className="bg-[#FFF8F0] shadow-md border-0">

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-600 mb-1">
                    Popular Items
                  </p>

                  <p className="text-3xl font-bold text-[#5C4033]">
                    {stats.popularItems}
                  </p>

                </div>

                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">

                  <TrendingUp className="w-6 h-6 text-blue-600" />

                </div>

              </div>

              <p className="text-sm text-green-600 mt-2">
                ↑ 5% from last month
              </p>

            </CardContent>

          </Card>

          {/* Customers */}
          <Card className="bg-[#FFF8F0] shadow-md border-0">

            <CardContent className="p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-600 mb-1">
                    Customers
                  </p>

                  <p className="text-3xl font-bold text-[#5C4033]">
                    {stats.customers}
                  </p>

                </div>

                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">

                  <Users className="w-6 h-6 text-purple-600" />

                </div>

              </div>

              <p className="text-sm text-green-600 mt-2">
                ↑ 8% from last month
              </p>

            </CardContent>

          </Card>

        </div>

        {/* Popular Menu Items */}
        <Card className="mb-8 bg-[#FFF8F0] shadow-md border-0">

          <CardHeader>

            <CardTitle className="text-[#5C4033]">
              Popular Menu Items
            </CardTitle>

          </CardHeader>

          <CardContent>

            <Table>

              <TableHeader>

                <TableRow>

                  <TableHead>
                    Dish Name
                  </TableHead>

                  <TableHead className="text-right">
                    Orders
                  </TableHead>

                  <TableHead className="text-right">
                    Revenue
                  </TableHead>

                </TableRow>

              </TableHeader>

              <TableBody>

                {popularItems.map((item, index) => (

                  <TableRow key={index}>

                    <TableCell>
                      {item.name}
                    </TableCell>

                    <TableCell className="text-right">
                      {item.orders}
                    </TableCell>

                    <TableCell className="text-right">
                      ₹{item.revenue.toLocaleString()}
                    </TableCell>

                  </TableRow>

                ))}

              </TableBody>

            </Table>

          </CardContent>

        </Card>

        {/* Recent Orders */}
        <Card className="mb-8 bg-[#FFF8F0] shadow-md border-0">

          <CardHeader>

            <CardTitle className="text-[#5C4033]">
              Recent Orders
            </CardTitle>

          </CardHeader>

          <CardContent>

            <Table>

              <TableHeader>

                <TableRow>

                  <TableHead>Order ID</TableHead>

                  <TableHead>Customer</TableHead>

                  <TableHead>Items</TableHead>

                  <TableHead>Total</TableHead>

                  <TableHead>Status</TableHead>

                  <TableHead>Date</TableHead>

                </TableRow>

              </TableHeader>

              <TableBody>

                {recentOrders.map((order) => (

                  <TableRow key={order.id}>

                    <TableCell className="font-medium">
                      {order.id}
                    </TableCell>

                    <TableCell>
                      {order.customer}
                    </TableCell>

                    <TableCell>
                      {order.items}
                    </TableCell>

                    <TableCell>
                      ₹{order.total.toLocaleString()}
                    </TableCell>

                    <TableCell>

                      <Badge
                        className={getStatusColor(order.status)}
                        variant="secondary"
                      >
                        {order.status}
                      </Badge>

                    </TableCell>

                    <TableCell>
                      {order.date}
                    </TableCell>

                  </TableRow>

                ))}

              </TableBody>

            </Table>

          </CardContent>

        </Card>

        {/* Menu Management */}
        <Card className="bg-[#FFF8F0] shadow-md border-0">

          <CardHeader className="flex flex-row items-center justify-between">

            <CardTitle className="text-[#5C4033]">
              Menu Management
            </CardTitle>

            <Dialog
              open={isAddDialogOpen}
              onOpenChange={setIsAddDialogOpen}
            >

              <DialogTrigger asChild>

                <Button className="bg-[#FF7A3D] hover:bg-[#E8682C]">

                  <Plus className="w-4 h-4 mr-2" />

                  Add Item

                </Button>

              </DialogTrigger>

              <DialogContent className="max-w-md bg-[#FFF8F0]">

                <DialogHeader>

                  <DialogTitle className="text-[#5C4033]">

                    Add New Menu Item

                  </DialogTitle>

                </DialogHeader>

                <div className="space-y-4">

                  <div>

                    <Label htmlFor="name">
                      Item Name
                    </Label>

                    <Input
                      id="name"
                      value={newItem.name}
                      onChange={(e) =>
                        setNewItem({
                          ...newItem,
                          name: e.target.value,
                        })
                      }
                    />

                  </div>

                  <div>

                    <Label htmlFor="description">
                      Description
                    </Label>

                    <Textarea
                      id="description"
                      value={newItem.description}
                      onChange={(e) =>
                        setNewItem({
                          ...newItem,
                          description: e.target.value,
                        })
                      }
                    />

                  </div>

                  <div>

                    <Label htmlFor="price">
                      Price
                    </Label>

                    <Input
                      id="price"
                      type="number"
                      value={newItem.price}
                      onChange={(e) =>
                        setNewItem({
                          ...newItem,
                          price: e.target.value,
                        })
                      }
                    />

                  </div>

                  <div>

                    <Label htmlFor="category">
                      Category
                    </Label>

                    <Input
                      id="category"
                      value={newItem.category}
                      onChange={(e) =>
                        setNewItem({
                          ...newItem,
                          category: e.target.value,
                        })
                      }
                    />

                  </div>

                  <Button
                    onClick={handleAddItem}
                    className="w-full bg-[#FF7A3D] hover:bg-[#E8682C]"
                  >

                    Add Item

                  </Button>

                </div>

              </DialogContent>

            </Dialog>

          </CardHeader>

          <CardContent>

            <p className="text-[#7A5C4D]">

              Manage your menu items,
              update prices, and track
              popular dishes.

            </p>

            <div className="mt-4 flex gap-2">

              <Button variant="outline" size="sm">

                <Edit className="w-4 h-4 mr-2" />

                Edit Items

              </Button>

              <Button variant="outline" size="sm">

                <Trash2 className="w-4 h-4 mr-2" />

                Delete Items

              </Button>

            </div>

          </CardContent>

        </Card>

      </div>

    </div>
  );
}