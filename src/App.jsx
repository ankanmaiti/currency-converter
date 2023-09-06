import InputBox from "./components/InputBox";

export default function App() {
  return (
    <>
      <div className="grid h-screen w-screen place-items-center">
        <div className="w-8/12 max-w-md rounded-md bg-white/30 p-5 backdrop-blur-sm">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* inputs container */}
            <div className="relative">
              <InputBox label="from" />
              <InputBox label="to" />

              <button className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-blue-600 px-2 py-1 font-semibold lowercase text-white">
                Swap
              </button>
            </div>

            {/* convert button */}
            <button
              type="submit"
              className="mt-3 w-full rounded-md bg-blue-600 py-1 text-white shadow-md outline-none hover:bg-blue-700"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
