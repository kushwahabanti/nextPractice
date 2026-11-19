// import Image from "next/image";
// import Link from "next/link";

// const products = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     price: 1999,
//     description: "High-quality sound with comfortable design and long battery life.",
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//   },
//   {
//     id: 2,
//     name: "Smart Watch",
//     price: 2999,
//     description: "Track your fitness, monitor activities and stay connected.",
//     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="max-w-6xl mx-auto p-8">

//       <h1 className="text-4xl font-bold text-center mb-3">
//         Welcome to TechStore
//       </h1>

//       <p className="text-center text-gray-600 mb-10">
//         Explore our latest electronic products.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {products.map((product) => (
//           <div key={product.id} className="border rounded-xl p-5 shadow">

//             <Image
//               src={product.image}
//               alt={product.name}
//               width={500}
//               height={300}
//               className="w-full h-64 object-cover rounded-lg"
//             />

//             <h2 className="text-2xl font-bold mt-4">
//               {product.name}
//             </h2>

//             <p className="text-gray-600 mt-2">
//               {product.description}
//             </p>

//             <p className="text-green-700 text-xl font-bold mt-3">
//               ₹{product.price}
//             </p>

//             <Link href={`/products/product${product.id}`}>
//               View Product
//             </Link>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }


// code splitting

// "use client";

// import { useState } from "react";
// import dynamic from "next/dynamic";

// // Dynamic import
// const StudentDetails = dynamic(
//   () => import("./StudentDetails"),
//   {
//     loading: () => <p>Loading Student Details...</p>,
//   }
// );

// export default function Home() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <h1>Student Dashboard</h1>
//       <p>Welcome to the Student Dashboard</p>

//       <button onClick={() => setShow(true)}>
//         Load Student Details
//       </button>

//       {show && <StudentDetails />}
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import dynamic from "next/dynamic";

// // Dynamic import
// const HeavyComponent = dynamic(
//   () => import("./HeavyComponent"),
//   {
//     loading: () => <p>Loading the components Details...</p>,
//   }
// );

// export default function Home(){

//   const [show, setShow] = useState(false);

//   return(
//     <div style={
//       {
//       fontfamily: "Arial",
//       padding: "20px"
//     }
//   }>

//     <h1>next js Example</h1>
//     <p>
//       click the button to get Details
//     </p>

//     <button onClick={()=>setShow(true)}>
//       Load Component
//     </button>

//     {show && <HeavyComponent/>}
//   </div>
//   )
// }



// "use client"

// import {useState, useEffect} from "react";

// import dynamic from "next/dynamic";

// const product details = dynamic(
//   ()=> import("./product details"),
//   {
//     loading: ()=> <p>loading product Details</p>
//   }
// );

// export default function Home()
// {
//   const {show, setShow}= useState(false);

//   useEffect(()=> {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if(entry.isIntersecting)
//         {
//           setShow(true);
//           observer.disconnect();
//         }
//       }
//     )
//     const target = document.getElementById("product")

//     if(target)
//     {
//       observer.observe(target);
//     }
//     return() => observer.disconnect();
//   },[]);
// }

// "use client";

// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";

// const ProductDetails = dynamic(
//   () => import("./products/product/page"),
//   {
//     loading: () => <p>loading product Details</p>
//   }
// );

// export default function Home() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//           observer.disconnect();
//         }
//       }
//     );

//     const target = document.getElementById("product");

//     if (target) {
//       observer.observe(target);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div id="product">
//       {show && <ProductDetails />}
//     </div>
//   );
// }


"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const ProductDetails = dynamic(
    () => import("./productDetails"),
    {
        loading: () => <p>Loading ProductDetails...</p>
    }
)

export default function Home() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true)
                    observer.disconnect()
                }
            }
        )

        const target = document.getElementById("product")

        if (target) {
            observer.observe(target)
        }

        return () => observer.disconnect()

    }, [])

    return (
        <div>
            <h1>Online Shoping website</h1>
            <h2>welcome to our store</h2>
            <p>explore our latest product</p>

            <h3>our product</h3>
            <p>scroll down to show</p>

            <h3>our product</h3>
            <p>scroll down</p>
            <div id="product">
                {show && <ProductDetails />}
            </div>
        </div>
    )
}