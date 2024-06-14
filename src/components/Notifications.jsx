import { useState, useEffect, useRef } from "react";
import NotificationItems from "./NotificationItems";
import NavBar from "./Navbar";
import Footer from "./Footer";

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
    <>
      <NavBar />
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
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              dolore corrupti ad quasi, officiis voluptate impedit ea ipsa sit
              deserunt! Fugit, repellendus fuga possimus ad quaerat cupiditate
              laudantium quibusdam, tempore, veritatis minima quis eum suscipit
              optio blanditiis quae. Laborum numquam eaque debitis velit error
              tenetur incidunt rem quasi consequuntur odio officia libero vitae,
              animi dicta nesciunt delectus molestiae magni autem. Ab rerum
              porro provident velit ipsa distinctio quas quidem molestias.
            </p>
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
      </div>
      <Footer />
    </>
  );
}
