import Image from "next/image";

// export const metadata = {
//   title: "Wireless Headphones | TechStore",
//   description: "Wireless headphones product details.",
// };

export default function ProductPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <Image
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          alt="Wireless Headphones"
          width={500}
          height={400}
          className="rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">
            Wireless Headphones
          </h1>

          <p className="text-green-700 text-2xl font-bold mt-4">
            ₹1999
          </p>

          <p className="text-gray-600 mt-5">
            Enjoy high-quality sound, comfortable ear cushions,
            wireless connectivity and long battery life.
          </p>

          <button className="bg-blue-700 text-white px-6 py-3 rounded mt-6">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
}