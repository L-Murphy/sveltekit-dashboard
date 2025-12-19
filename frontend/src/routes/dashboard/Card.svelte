<script lang="ts">
    
    let hidden = $state(false)
    let props = $props();

    const toggleHidden = () => {
        hidden = !hidden
    }
</script>

<div class="container flex">

    <div class="">
        <button onclick={toggleHidden}>{hidden ? "Show" : "Hide"}</button>
    </div>
    
    <br>
    
    <div class={hidden ? "hidden" : ""} >
        <h3>{props.cardTitle || "Untitled"}</h3>
        <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
    </div>
</div>
    

<style>
    button{
        color: red;
        border: black;
        border-radius: 1em;
        background-color: bisque;
        padding: 5px;
    }

    button:hover {
        cursor: pointer;
    }

    .container{
        border-width: 1px;
        border-radius: 1em;
        padding: .2em;
        margin: .2em;
    }   
</style>