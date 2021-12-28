import React from "react";

function App() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 bg-gray-100 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-20"
              src="https://www.seekpng.com/png/detail/4-46391_mountain-png-mountain-logo-transparent-background.png"
              alt="Workcation" />
            <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="https://media.istockphoto.com/photos/man-reading-email-on-laptop-while-relaxing-on-beach-picture-id1049721644?k=20&m=1049721644&s=612x612&w=0&h=8UsosygUoFfnLalIWeRO8N_H4EU_SMF-KLHJXaXNFtE="
              alt="Woman Workactioning on the beach" />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">You can
              work from
              anywhere. <br className="hidden lg:inline" /><span className="text-indigo-500">Take
                advantage of
                it.</span></h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">Workaction helps you find work-friendly rentals in
              beautiful
              locations so you can
              enjoy some
              nice weather
              even when
              you're not on vacation.</p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a className="btn btn-primary" href="#">Book your escape</a>
              <a className="btn btn-secondary" href="#">Learn more</a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://media.istockphoto.com/photos/man-reading-email-on-laptop-while-relaxing-on-beach-picture-id1049721644?k=20&m=1049721644&s=612x612&w=0&h=8UsosygUoFfnLalIWeRO8N_H4EU_SMF-KLHJXaXNFtE="
            alt="Woman Workactioning on the beach" />

        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular Destinations</h2>
      </div>
    </div>
  );
}

export default App;
