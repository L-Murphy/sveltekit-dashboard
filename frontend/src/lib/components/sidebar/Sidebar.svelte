<script lang="ts">
    import SidebarNavButton from "./SidebarNavButton.svelte";
    
    type SidebarBtn = {
        link: string,
        name: string, 
        icon: string
    }

    const content : SidebarBtn[] = [
        {
            "name": "Home",
            "icon": "bx:home",
            "link": "/"
        },
        {
            "link": "/dashboard",
            "name": "Dashboard",
            "icon": "bx:calculator"
        },
        {
            "link": "/RRSP", 
            "name": "RRSP",
            "icon": "bx:line-chart"
        }
    ];

    let { children } = $props();
</script>


<div class="drawer lg:drawer-open w-dvw">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Navbar -->
    <nav class="navbar w-full bg-base-300">
      <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost">
        <!-- Sidebar toggle icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div class="px-4">Navbar Title</div>
    </nav>
    <div class="p-4">{@render children()}</div>
  </div>

  <div class="drawer-side is-drawer-close:overflow-visible">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
      <!-- Sidebar content here -->
      <ul class="menu w-full grow">
        {#each content as btn}
            <SidebarNavButton sidebarBtn={btn} />
        {/each}
      </ul>
      <div class="justify-end align-center pb-4 pl-4 is-drawer-close:tooltip is-drawer-close:tooltip-right cursor-pointer">
        <p class="is-drawer-close:hidden">This is the footer</p>
      </div>
    </div>
  </div>
</div>
