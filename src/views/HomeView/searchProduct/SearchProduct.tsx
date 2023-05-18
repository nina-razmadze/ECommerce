export function SearchProduct() {
  return (
    <div className='container h-[100vh] mx-auto px-4 flex justify-center items-center'>
      <div className='w-[1000px] border border-black bg-purple-700 flex justify-between text-white p-3'>
        <h1 className='font-bold text-4xl '>Orders</h1>
        <button className=' border  hover:bg-zinc-800 p-3 rounded'>
          Create New Order
        </button>
      </div>
    </div>
  );
}
