import { useState, useEffect, useRef } from "react";
import NotificationItems from "./NotificationItems";

export default function Notifications() {
  const [notiItems, setNoti] = useState([
    {
      id: 3,
      title:
        "Update 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!",
      date: "Mar 1, 2023",
    },
    {
      id: 2,
      title:
        "Update 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!",
      date: "Feb 1, 2023",
    },
    {
      id: 1,
      title:
        "Update 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      information:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!",
      date: "Jan 1, 2023",
    },
  ]);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight
        ) {
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop += 1;
        }
      }, 50);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    scrollContainer.addEventListener("mouseenter", stopScrolling);
    scrollContainer.addEventListener("mouseleave", startScrolling);

    startScrolling();

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("mouseenter", stopScrolling);
      scrollContainer.removeEventListener("mouseleave", startScrolling);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 px-20 py-10 bg-gray-100">
      <div className="w-full md:w-1/2 p-5 bg-white shadow-md rounded-lg mr-5">
        <div className="bg-blue-800 text-white py-2 px-4 rounded-t-lg">
          <h2 className="text-xl font-bold">ABOUT GETFLY TECHNOLOGIES</h2>
        </div>
        <div className="p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, in! Tempore perspiciatis fuga unde facere debitis ex
            maxime vero itaque placeat consequuntur explicabo tenetur vel,
            pariatur natus officia cum illum labore at alias corrupti illo
            architecto dolor. Nesciunt, quod reiciendis.
          </p>
          <button className="bg-green-600 text-white mt-4 py-2 px-4 rounded-lg">
            READ MORE
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-5 bg-white shadow-md rounded-lg">
        <div className="bg-blue-800 text-white py-2 px-4 rounded-t-lg">
          <h2 className="text-xl font-bold">LATEST UPDATES</h2>
        </div>
        <div
          className="p-4 overflow-hidden relative"
          style={{ height: "300px" }}
        >
          <div
            className="absolute inset-0 overflow-y-scroll"
            ref={scrollContainerRef}
          >
            <ul className="list-disc pl-5">
              {notiItems.map((item) => (
                <NotificationItems
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  information={item.information}
                  date={item.date}
                />
              ))}
            </ul>
          </div>
          <button
            onClick={() => navigate("/archive")}
            className="bg-blue-600 text-white py-1 px-4 rounded-lg absolute bottom-3 right-4 opacity-75 hover:opacity-100"
          >
            Archive
          </button>
        </div>
      </div>
      <h1>usg</h1>
    </div>
  );
}

// import { useState } from "react";
// import NotificationItem from "./NotificationItems";

// export default function Notifications() {
//   const [notiItems, setNoti] = useState([
//     {
//       id: 3,
//       title:
//         "Update 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,in sit amet consectetur adipisicing elit. ",
//       information:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!",
//       date: "Mar 1, 2023",
//     },
//     {
//       id: 2,
//       title:
//         "Update 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,in consectetur adipisicing elit. Voluptatibus,in",
//       information:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!",
//       date: "Feb 1, 2023",
//     },
//     {
//       id: 1,
//       title:
//         "Update 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,in Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,in",
//       information:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo, iure fuga, quae consequatur voluptates suscipit esse iusto explicabo cumque laboriosam, delectus optio fugit. Ea quod nulla facere dignissimos! Velit cumque eum ad ea sit quisquam fuga maxime qui voluptatum!",
//       date: "Jan 1, 2023",
//     },
//   ]);
//   return (
//     <div>
//       <h1>Notifications</h1>
//       <div>
//         {Object.keys(notiItems).map((id) => (
//           <NotificationItem
//             key={id}
//             id={id}
//             title={notiItems[id].title}
//             information={notiItems[id].information}
//             date={notiItems[id].date}
//             // toggleOpen={toggleOpen}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
