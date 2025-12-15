<script lang="ts">
    // let props = $props();
    const props = [
        {
            "link": "/",
            "name": "Home"
        },
        {
            "link": "/dashboard",
            "name": "Dashboard"
        },
        {
            "link": "/RRSP", 
            "name": "RRSP"
        }
    ];

    import home from '$lib/assets/home.png'
</script>

<div class="sidebar">
    <div class="header">
        <h1>NAV HEADER</h1>
    </div>
    <div class="divider">
        <br>
    </div>
    <div class="options">
        <nav>
            <ul>
                {#each props as option}
                <li class="flex-row flex">
                    <img src={home} alt="home logo" width="24" height="24"/>
                    <a href={option.link}>{option.name}</a>
                </li>
                {/each}
            </ul>
        </nav>
    </div>
</div>

<style>
    .sidebar{
        background-color: gray;
        flex-direction: column;
        flex: auto;
        min-height: 100vh;
        max-width: 480px;
        min-width: auto;
        margin-right: .2em;
        padding-right: .4em;
    }
    li, li > *{
        padding: .2em;
    }
</style>