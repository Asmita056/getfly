import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NotificationDetails = () => {
  const { id } = useParams();
  const notiItems = [
    {
      id: 6,
      title:
        "Update 6: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus facilis, enim facere possimus necessitatibus ducimus vel fuga dignissimos eos, assumenda quod corrupti eveniet quibusdam repudiandae! Excepturi sit illum consectetur eum dolore adipisci inventore deserunt optio dolorum distinctio natus asperiores repellendus rem sunt recusandae, ipsa quaerat suscipit odit doloremque laudantium soluta, accusamus ea sint. Excepturi dignissimos culpa praesentium fuga iusto dolorum perspiciatis dolor a. Nemo minima natus odio exercitationem quod vitae eius quos incidunt libero repudiandae. Dolores incidunt a esse aliquid sed et nihil ipsum beatae in totam reprehenderit, eveniet assumenda ullam distinctio voluptas dolor nam optio, molestiae minus repellendus!",
      date: "Jun 1, 2023",
    },
    {
      id: 5,
      title:
        "Update 5: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus facilis, enim facere possimus necessitatibus ducimus vel fuga dignissimos eos, assumenda quod corrupti eveniet quibusdam repudiandae! Excepturi sit illum consectetur eum dolore adipisci inventore deserunt optio dolorum distinctio natus asperiores repellendus rem sunt recusandae, ipsa quaerat suscipit odit doloremque laudantium soluta, accusamus ea sint. Excepturi dignissimos culpa praesentium fuga iusto dolorum perspiciatis dolor a. Nemo minima natus odio exercitationem quod vitae eius quos incidunt libero repudiandae. Dolores incidunt a esse aliquid sed et nihil ipsum beatae in totam reprehenderit, eveniet assumenda ullam distinctio voluptas dolor nam optio, molestiae minus repellendus!",
      date: "May 1, 2023",
    },
    {
      id: 4,
      title:
        "Update 4: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus facilis, enim facere possimus necessitatibus ducimus vel fuga dignissimos eos, assumenda quod corrupti eveniet quibusdam repudiandae! Excepturi sit illum consectetur eum dolore adipisci inventore deserunt optio dolorum distinctio natus asperiores repellendus rem sunt recusandae, ipsa quaerat suscipit odit doloremque laudantium soluta, accusamus ea sint. Excepturi dignissimos culpa praesentium fuga iusto dolorum perspiciatis dolor a. Nemo minima natus odio exercitationem quod vitae eius quos incidunt libero repudiandae. Dolores incidunt a esse aliquid sed et nihil ipsum beatae in totam reprehenderit, eveniet assumenda ullam distinctio voluptas dolor nam optio, molestiae minus repellendus!",
      date: "Apr 1, 2023",
    },
    {
      id: 3,
      title:
        "Update 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus facilis, enim facere possimus necessitatibus ducimus vel fuga dignissimos eos, assumenda quod corrupti eveniet quibusdam repudiandae! Excepturi sit illum consectetur eum dolore adipisci inventore deserunt optio dolorum distinctio natus asperiores repellendus rem sunt recusandae, ipsa quaerat suscipit odit doloremque laudantium soluta, accusamus ea sint. Excepturi dignissimos culpa praesentium fuga iusto dolorum perspiciatis dolor a. Nemo minima natus odio exercitationem quod vitae eius quos incidunt libero repudiandae. Dolores incidunt a esse aliquid sed et nihil ipsum beatae in totam reprehenderit, eveniet assumenda ullam distinctio voluptas dolor nam optio, molestiae minus repellendus!",
      date: "Mar 1, 2023",
    },
    {
      id: 2,
      title:
        "Update 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus facilis, enim facere possimus necessitatibus ducimus vel fuga dignissimos eos, assumenda quod corrupti eveniet quibusdam repudiandae! Excepturi sit illum consectetur eum dolore adipisci inventore deserunt optio dolorum distinctio natus asperiores repellendus rem sunt recusandae, ipsa quaerat suscipit odit doloremque laudantium soluta, accusamus ea sint. Excepturi dignissimos culpa praesentium fuga iusto dolorum perspiciatis dolor a. Nemo minima natus odio exercitationem quod vitae eius quos incidunt libero repudiandae. Dolores incidunt a esse aliquid sed et nihil ipsum beatae in totam reprehenderit, eveniet assumenda ullam distinctio voluptas dolor nam optio, molestiae minus repellendus!",
      date: "Feb 1, 2023",
    },
    {
      id: 1,
      title:
        "Update 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus facilis, enim facere possimus necessitatibus ducimus vel fuga dignissimos eos, assumenda quod corrupti eveniet quibusdam repudiandae! Excepturi sit illum consectetur eum dolore adipisci inventore deserunt optio dolorum distinctio natus asperiores repellendus rem sunt recusandae, ipsa quaerat suscipit odit doloremque laudantium soluta, accusamus ea sint. Excepturi dignissimos culpa praesentium fuga iusto dolorum perspiciatis dolor a. Nemo minima natus odio exercitationem quod vitae eius quos incidunt libero repudiandae. Dolores incidunt a esse aliquid sed et nihil ipsum beatae in totam reprehenderit, eveniet assumenda ullam distinctio voluptas dolor nam optio, molestiae minus repellendus!",
      date: "Jan 1, 2023",
    },
  ];

  const notification = notiItems.find((item) => item.id === parseInt(id));

  if (!notification) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <p>Notification not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <h1 className="text-4xl text-center mt-5 font-bold">Notifications</h1>
      <div className="flex flex-col items-center justify-center min-h-[34rem] px-20 bg-gray-100 flex-grow">
        <div className="w-full md:w-2/3 p-5 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold">{notification.title}</h2>
          <p className="text-sm text-gray-600">{notification.date}</p>
          <p className="mt-4">{notification.information}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotificationDetails;
