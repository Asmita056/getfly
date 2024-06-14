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
