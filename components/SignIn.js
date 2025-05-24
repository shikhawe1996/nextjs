const SignIn = () => {
    return (
        <div className=" bg-white rounded-lg p-4  mx-auto mt-[20px] shadow-lg mb-[20px]">
          <h1 className="text-5xl font-bold text-orange text-center mt-[40px]">Sign In</h1>
          <form className="max-w-[500px] mx-auto"> 
          <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-orange " htmlFor="name">Name</label>
              <input type="name" className="rounded-lg p-2 mb-4 text-black bg-transparent border border-orange focus:outline-none focus:ring-2 focus:ring-orange" />
            </div>   
            <div className="flex flex-col gap-2">
              <label className="text-[20px] font-medium text-orange " htmlFor="email">Email</label>
              <input type="email"  className="rounded-lg p-2 text-black bg-transparent border border-orange focus:outline-none focus:ring-2 focus:ring-orange" />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-[20px] font-medium text-orange" htmlFor="password">Password</label>
              <input type="password"  className="rounded-lg p-2 text-black bg-transparent border border-orange focus:outline-none focus:ring-2 focus:ring-orange" />
            </div>
            <br/>
            <div className="flex justify-center mb-[40px]">
            <button type="submit" className="bg-orange text-white rounded-[25px] px-[70px] py-[10px] font-bold">Sign In</button>
            </div>
          </form>
        </div>
    )
}

export default SignIn;