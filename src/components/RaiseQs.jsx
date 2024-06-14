import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

export default function RaiseQs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ques, setQues] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setQues("");
    alert("Question submitted.");
  }

  return (
    <div className="flex flex-row mt-10 px-20 py-10 bg-gray-300">
      <div className="w-1/2 flex flex-col justify-center items-center text-center p-5 mr-5 rounded-lg shadow-lg">
        <FaQuestionCircle className="text-6xl text-blue-500 mb-4" />
        <h5 className="text-3xl font-bold mb-2">Still have a question?</h5>
        <p className="text-lg mb-4">Ask Us</p>
        <p className="text-sm text-gray-500">
          We're here to help! Feel free to ask any questions you may have.
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center ">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex mb-4">
            <label className="block w-1/3 my-auto text-gray-700">
              Your name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your name"
              required
              className="w-2/3 p-2 rounded-lg mx-2 border border-gray-400"
            />
          </div>
          <div className="flex mb-4">
            <label className="block w-1/3 my-auto text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              required
              className="w-2/3 p-2 rounded-lg mx-2 border border-gray-400"
            />
          </div>
          <div className="flex mb-4">
            <label className="block w-1/3 my-auto text-gray-700">
              Question
            </label>
            <textarea
              onChange={(e) => setQues(e.target.value)}
              value={ques}
              placeholder="Ask a question..."
              required
              className="w-2/3 p-2 rounded-lg mx-2 border border-gray-400"
              rows="4"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 mt-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
