'use client';
import React from 'react';
import { Table } from '../../components/ui/table';
import { TableBody } from '../../components/ui/table';
import { TableCell } from '../../components/ui/table';
import { TableHead } from '../../components/ui/table';
import { TableHeader } from '../../components/ui/table';
import { TableRow } from '../../components/ui/table';


const OrdersPage: React.FC = () => {
  const orders = [
    {
      id: '1',
      date: '2024-03-15',
      total: '$150.00',
      status: 'Pending',
    },
    {
      id: '2',
      date: '2024-03-10',
      total: '$250.00',
      status: 'Shipped',
    },
    {
      id: '3',
      date: '2024-03-05',
      total: '$75.00',
      status: 'Delivered',
    },
    {
      id: '4',
      date: '2024-02-28',
      total: '$320.00',
      status: 'Delivered',
    },
    {
      id: '5',
      date: '2024-02-15',
      total: '$100.00',
      status: 'Pending',
    },
  ];

  return (
    <div className="container p-6">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersPage;