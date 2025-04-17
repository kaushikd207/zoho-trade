"use client"
import Header from "./components/Header";
import FiltersBar from "./components/FiltersBar";
import OrdersTable from "./components/OrdersTable";
import Pagination from "./components/Pagination";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <main className="p-6">
      <Header />
      <h1 className="text-xl font-semibold mt-6 mb-4">Open Orders</h1>
      <div className="bg-white shadow rounded-xl p-4 space-y-4">
        <FiltersBar />
        <OrdersTable />
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
