import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">NRLA Demo</h1>
      <div className="flex space-x-6">
        <Link
          href="/enquiry-form"
          className="text-xl text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md shadow-md transition duration-300"
        >
          Enquiry Form
        </Link>
        <Link
          href="/product-form"
          className="text-xl text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md shadow-md transition duration-300"
        >
          Product Form
        </Link>
      </div>
    </div>
  );
}
