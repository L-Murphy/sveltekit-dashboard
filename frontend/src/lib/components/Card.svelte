<script lang="ts">
    let { cardTitle } = $props();
</script>

<div class="card card-border bg-base-100 object-fill m-1">
  <div class="card-body">
    <h2 class="card-title">{cardTitle}</h2>
    <hr>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>