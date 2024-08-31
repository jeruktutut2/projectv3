export function RegiterPage() {
    let emailError: string = ""
    let passwordError: string = ""
    let messageError: string = ""
    let pending: boolean = false
    return (
        <div className="fixed top-1/2 left-1/2 max-w-[360px] w-full transform -translate-x-1/2 -translate-y-1/2 border-2">
            <div className="w-full p-[35px] border">
                    <h2 className="text-center mb-[10px]">LOGIN</h2>
                    {/* {result?.data && <p className="text-center text-green-800 text-[0.80rem] mb-[15px]">{result?.data.message}</p>} */}
                    {messageError && <p className="text-center text-red-800 text-[0.80rem] mb-[15px]">{messageError}</p>}
                    <div>
                        <input type="text" className={"h-[40px] w-full outline-none text-[0.80rem] text-stone-950 px-4 rounded-[3px] border-2 " + (emailError === "" ? " border-[#717171]" : " border-red-500 ") } id="email" name="email" placeholder="Email" disabled={pending}/>
                        {emailError && <p className="text-red-300 text-[0.60rem]">{emailError}</p>}
                    </div>
                    <div>
                        <input type="password" className={"h-[40px] w-full outline-none text-[0.80rem] text-stone-950 px-4 rounded-[3px] mt-2 border-2 " + (passwordError === "" ? " border-[#717171]" : " border-red-500 ")} id="password" name="password" placeholder="Password" disabled={pending}/>
                        {passwordError && <p className="text-red-300 text-[0.60rem]">{passwordError}</p>}
                    </div>
                    <a href="#" className="text-gray-500 no-underline hover:underline inline-flex mt-2 text-[0.70rem]">Forgot Password</a>
                    <button type="submit" className="h-[40px] w-full outline-none border-0 text-[0.80rem] font-semibold rounded-[3px] mt-1 text-white cursor-pointer bg-blue-500 hover:bg-blue-400 active:bg-blue-600 disabled:bg-blue-700" disabled={pending}>{pending ? "Logging in..." : "Login"}</button>
                    <div className="text-center text-[0.70rem] mt-2">
                        Don&apos;t have an account? &nbsp;
                        <a href="#" className="text-gray-500 no-underline hover:underline">Sign Up</a>
                    </div>
                </div>
        </div>
    )
}