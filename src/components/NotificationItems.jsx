import React from "react";
import { Link } from "react-router-dom";

export default function NotificationItems({ id, title, information, date }) {
  return (
    <li className="mb-4">
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-gray-600">{date}</p>
      <p>
        {information.slice(0, 100)}...{" "}
        <Link to={`/notification/${id}`} className="text-blue-600">
          Read More
        </Link>
      </p>
      <hr className="mt-2" />
    </li>
  );
}
