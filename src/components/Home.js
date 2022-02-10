import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (url === "") {
      setError(true);
    } else {
      setError(false);
      //   var res = url.split("=");
      //   var videoId = res[1];
      var res = url.slice(-11);
      var videoId = res;
      const options = {
        method: "GET",
        url: "https://youtube-mp36.p.rapidapi.com/dl",
        params: { id: videoId },
        headers: {
          "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
          "x-rapidapi-key":
            "dec42165c5msh6a1e4968fb703dfp18a6dfjsnf800accb40db",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          var res = response.data;
          var downloadLink = res.link;
          setLink(downloadLink);
          setUrl("");
          setLoading(false);
          console.log(response.data, link);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="text-center">
          <div className=" w-full py-6 px-10 bg-white rounded-md border drop-shadow-2xl">
            <div className="my-2">
              <form onSubmit={handleSubmit}>
                <div className="flex items-start ">
                  <input
                    type="text"
                    placeholder="Enter Youtube URL"
                    className="w-full px-6 py-1 border-2 rounded-md"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="ml-3 border rounded-md border-blue-700 px-3 py-1 font-medium hover:bg-blue-700 hover:underline hover:text-white"
                  >
                    Convert
                  </button>
                </div>
                <div>
                  {error && url !== null && (
                    <p className="text-red-500 font-semibold">
                      Please enter valid url
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        {loading && (
          <div className="mt-16 font-medium text-3xl text-blue-700">
            <svg
              role="status"
              className="inline mr-2 w-10 h-10 text-white animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            Loading...
          </div>
        )}
        <div>
          {link.length > 0 && (
            <a
              href={link}
              download
              className="relative top-24 border rounded-md bg-blue-600 hover:bg-blue-800 font-medium text-white py-2 px-3"
            >
              Download MP3
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
