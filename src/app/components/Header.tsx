export default function Header() {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <div className="flex space-x-6 text-sm">
        <span>SIGNORIA <span className="text-green-500">0.00</span></span>
        <span>NIFTY BANK <span className="text-green-500">52,323.30</span></span>
        <span>NIFTY FIN SERVICE <span className="text-green-500">25,255.75</span></span>
        <span>RELCHEMQ <span className="text-green-500">162.73</span></span>
      </div>
      <div className="flex items-center space-x-6">
        <span className="cursor-pointer">MARKETWATCH</span>
        <span className="cursor-pointer">EXCHANGE FILES</span>
        <span className="cursor-pointer font-semibold">PORTFOLIO ▾</span>
        <span className="cursor-pointer">FUNDS ▾</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold">LK</div>
      </div>
    </div>
  );
}
