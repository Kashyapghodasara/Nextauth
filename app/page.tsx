// Date - 20-11-2024  -  Wednesday
// Date - 21-11-2024  -  Thursday
// Date - 24-11-2024  -  Sunday
// Date - 26-11-2024  -  Tuesday
// Date - 27-11-2024  -  Wednesday



export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to My Platform
          </h1>
          <p className="text-gray-400 text-lg mb-8">
           This is the Full Stack Authentication App.
          </p>
          <div className="flex gap-4 items-center justify-center">
          <a
            href="/login"
            className="flex  px-6 py-3 text-lg bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all mb-4"
          >
            Login
          </a>
          <a
            href="/login"
            className="flex px-6 py-3 text-lg bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all mb-4"
          >
            Profile
          </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Designed By <span className="text-indigo-400">Kashyap Ghodasara</span>
          </p>
        </div>
      </div>
    </>
  );
}

