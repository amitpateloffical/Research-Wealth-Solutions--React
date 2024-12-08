const OurBranches = () => {
  return(
   <>
<div>
            <h2 className="text-3xl text-gray-600 font-semibold pt-5 uppercase py-1 border-b border-gray-300">
              Multibagger Stocks
            </h2>
            <div className="w-[20rem] lg:w-[40rem] min-h-[20rem] bg-gray-200 p-6 rounded-lg shadow-lg mt-5">
              <img src="public\images\logo.png" className="h-20" alt="" />
              <h2 className="text-2xl text-gray-600 text-center font-semibold pt-5">
                Short Term Multibagger Stocks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
                <div className="py-7 mx-7 bg-blue-500 rounded-lg shadow-lg text-center text-white text-3xl">
                  <h3>Buy</h3>
                </div>

                <div className="py-7 mx-7 bg-blue-500 rounded-lg shadow-lg text-center text-white text-3xl">
                  <h3>Target</h3>
                </div>

                <div className="py-7 mx-7 bg-blue-500 rounded-lg shadow-lg text-center text-white text-3xl">
                  <h3>Duration</h3>
                </div>
              </div>
            </div>

         
            <div className="text-center lg:text-left mt-10">
              <button
                type="submit"
                className="bg-blue-500  mt-4 hover:bg-blue-600 text-white font-light py-3 px-4 rounded"
              >
                Subscribe For More
              </button>
            </div>
          </div>
  </>
  );
};

export default OurBranches;
