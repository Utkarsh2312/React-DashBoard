import Form from "./components/Form";
function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden lg:flex h-full  bg-black  items-center justify-center lg:w-2/3 text-white text-7xl">
          <div className="text-white non-italic font-bold font-Montserrat ml-10">Board.</div>
      </div>
      <div className="flex items-center justify-center  w-full">
      <Form></Form>
      </div>
       
    </div>
  );
}

export default App;
