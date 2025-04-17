const orders = [
  {
    time: "08:14:31",
    client: "AAA001",
    ticker: "RELIANCE",
    side: "Buy",
    product: "CNC",
    qty: "50/100",
    price: "250.50",
  },
  {
    time: "08:14:31",
    client: "AAA003",
    ticker: "MRF",
    side: "Buy",
    product: "NRML",
    qty: "10/20",
    price: "2,700.00",
  },
  {
    time: "08:14:31",
    client: "AAA002",
    ticker: "ASIANPAINT",
    side: "Buy",
    product: "NRML",
    qty: "10/30",
    price: "1,500.60",
  },
  {
    time: "08:14:31",
    client: "AAA002",
    ticker: "TATAINVEST",
    side: "Sell",
    product: "INTRADAY",
    qty: "10/10",
    price: "2,300.10",
  },
];

export default function OrdersTable() {
  return (
    <table className="w-full text-left border-t">
      <thead className="text-xs text-gray-600">
        <tr>
          <th className="py-2 px-2">Time ⬍</th>
          <th className="py-2 px-2">Client ⬍</th>
          <th className="py-2 px-2">Ticker</th>
          <th className="py-2 px-2">Side ⬍</th>
          <th className="py-2 px-2">Product ⬍</th>
          <th className="py-2 px-2">Qty (Executed/Total) ⬍</th>
          <th className="py-2 px-2">Price ⬍</th>
          <th className="py-2 px-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, idx) => (
          <tr key={idx} className="border-t text-sm">
            <td className="py-2 px-2">{order.time}</td>
            <td className="py-2 px-2">{order.client}</td>
            <td className="py-2 px-2 text-blue-700 cursor-pointer">
              {order.ticker} 📶
            </td>
            <td className="py-2 px-2">{order.side}</td>
            <td className="py-2 px-2">{order.product}</td>
            <td className="py-2 px-2">{order.qty}</td>
            <td className="py-2 px-2">{order.price}</td>
            <td className="py-2 px-2 text-lg">⋯</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
