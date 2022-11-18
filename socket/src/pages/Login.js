import React, { useState } from "react";
import {Link} from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 space-y-1 px-2 mb-4">
              Group Chat Here
            </h1>
            <form>
              <div className="mb-6">
                <select
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Select Room"
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option value="volvo">Select Room</option>
                  <option value="Room1">Room 1</option>
                  <option value="Room2">Room 2</option>
                </select>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>

              <Link
                onClick={(e) => (!user || !room ? e.preventDefault() : null)}
                to={`/chat?name=${user}&room=${room}`}
              >
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Chat Here
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
