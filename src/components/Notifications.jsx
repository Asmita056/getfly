import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NotificationItems from "./NotificationItems";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Notifications() {
  const [notiItems, setNoti] = useState([
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
  ]);

  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

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
      <Navbar />
      <h1 className="text-4xl text-center mt-5 font-bold">Notifications</h1>

      <div className="flex flex-col md:flex-row justify-between px-20 py-10 bg-gray-100">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
