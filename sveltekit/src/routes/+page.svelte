<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<script context="module" lang="ts">
    import "../styles/globals.css";
</script>

<!-- <h1 class="underline text-green-800">
    Hello world!
</h1> -->

<div>
    <header class="fixed w-full top-0 left-0 px-2.5">
        <nav class="flex items-center justify-between mx-auto max-w-full py-[22px] px-0">
            <a href="#" class="hover:text-gray-500">
                <span>E-COMMERSE</span>
            </a>
            <ul class="flex list-none gap-[35px]">
                <li><a href="menu1" class="no-underline text-[1.1rem] font-medium hover:text-gray-500">MENU 1</a></li>
                <li><a href="menu2" class="no-underline text-[1.1rem] font-medium hover:text-gray-500">MENU 2</a></li>
                <li><a href="menu3" class="no-underline text-[1.1rem] font-medium hover:text-gray-500">MENU 3</a></li>
            </ul>
            <a href="/login"><button class="hover:text-black border border-gray px-4 py-2 rounded hover:bg-gray-200 active:bg-gray-300 active:border-gray-500">LOGIN</button></a>
        </nav>
    </header>
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>