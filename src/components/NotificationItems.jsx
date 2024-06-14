import React from "react";

export default function NotificationItems({ id, title, information, date }) {
  return (
    <li className="mb-4">
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-gray-600">{date}</p>
      <p>
        {information.slice(0, 100)}...{" "}
        <a href="#" className="text-blue-600">
          Read More
        </a>
      </p>
      <hr className="mt-2" />
    </li>
  );
}

// export default function NotificationItem({ id, title, information, date }) {
//   return (
//     <div>
//       {/* aboout getfly */}
//       {/* <div>
//         <h1>About Getfly Technologies</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
//           in! Tempore perspiciatis fuga unde facere debitis ex maxime vero
//           itaque placeat consequuntur explicabo tenetur vel, pariatur natus
//           officia cum illum labore at alias corrupti illo architecto dolor.
//           Nesciunt, quod reiciendis.
//         </p>
//       </div> */}
//       {/* <hr /> */}
//       {/* notification */}
//       <div className="w-1/2 float-end bg-white">
//         <h4>{title}</h4>
//         <p>Read More</p>
//         <hr />
//       </div>
//     </div>
//   );
// }
