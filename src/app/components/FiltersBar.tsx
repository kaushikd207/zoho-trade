export default function FiltersBar() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-between">
      <div className="flex items-center gap-2">
        <input
          className="border rounded p-1 px-2 w-[100px]"
          placeholder="AAA002"
        />
        <button className="border p-1 px-2 rounded bg-white hover:bg-gray-100">👥</button>
        <div className="bg-gray-200 rounded-full px-2 py-1 text-xs flex items-center">
          Lalit <button className="ml-1">✕</button>
        </div>
        <input
          type="text"
          placeholder="Search for a stock, future, option or index"
          className="border rounded p-1 px-2 w-[250px]"
        />
        <div className="bg-gray-200 rounded-full px-2 py-1 text-xs flex items-center">
          RELIANCE <button className="ml-1">✕</button>
        </div>
        <div className="bg-gray-200 rounded-full px-2 py-1 text-xs flex items-center">
          ASIANPAINT <button className="ml-1">✕</button>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-gray-200 px-4 py-1 rounded text-sm flex items-center gap-2">
          ⬇ Download
        </button>
        <button className="bg-red-600 text-white px-4 py-1 rounded text-sm flex items-center gap-2">
          🚫 Cancel all
        </button>
      </div>
    </div>
  );
}
