<script context="module" lang="js">
    import "../../styles/globals.css";
</script>

<div class="fixed top-1/2 left-1/2 max-w-[720px] w-full transform -translate-x-1/2 -translate-y-1/2 border-2">
    <div class="flex flex-wrap md:flex-nowrap flex-col md:flex-row w-full">
        <div class="flex text-center flex-col items-center justify-center w-full p-[35px]
                    border">
            <h2 class="text-center mb-[20px]">Welcome Back</h2>
            <p>Please login using your personal information to stay connected with us.</p>
        </div>
        <div class="w-full p-[35px]
                    border">
            <h2 class="text-center mb-[10px]">LOGIN</h2>
            <form method="POST">
                <div>
                    <input type="text" id="email" name="email" placeholder="Email"
                            class="h-[40px] w-full outline-none text-[0.80rem] text-stone-950 px-4 rounded-[3px] border-2 border-[#717171]"/>
                    <!-- <p class="text-red-300 text-[0.60rem]" v-if="emailErrorMessage !== ''">{{ emailErrorMessage }}</p> -->
                </div>
                <div>
                    <input type="password" id="password" name="password" placeholder="Password" 
                            class="h-[40px] w-full outline-none text-[0.80rem] text-stone-950 px-4 rounded-[3px] mt-2 border-2 border-[#717171]"/>
                            <!-- <p class="text-red-300 text-[0.60rem]" v-if="passwordErrorMessage !== ''">{{ passwordErrorMessage }}</p> -->
                </div>
                <a href="#" class="text-gray-500 no-underline hover:underline inline-flex mt-2 text-[0.70rem]">Forgot Password</a>
                <button type="submit"
                        class="h-[40px] w-full outline-none border-0 text-[0.80rem] font-semibold rounded-[3px] mt-1 text-white cursor-pointer bg-blue-500 hover:bg-blue-400 active:bg-blue-600 disabled:bg-blue-700">Login</button>
            </form>
            <div class="text-center text-[0.70rem] mt-2">
                Don&apos;t have an account? &nbsp;
                <a href="#" class="text-gray-500 no-underline hover:underline">Sign Up</a>
            </div>
        </div>
    </div>
</div>