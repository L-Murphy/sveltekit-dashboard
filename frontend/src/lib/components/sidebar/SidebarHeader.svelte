<script lang="ts">
    let {toggleSidebar, isOpen} = $props();
</script>


<div class="flex flex-row p-4">
    <h1 hidden={!isOpen} class="text-2xl">Sidebar</h1>
    <button 
        onclick={ () => toggleSidebar()}
        class="px-1 hover:bg-gray-300 rounded-2xl"
        >
        {isOpen ? "Close": "Open"}
    </button>
</div>

