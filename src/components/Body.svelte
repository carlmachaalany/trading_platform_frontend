<div class="wrapper">
    <slot></slot>
</div>

<style>
    .wrapper {
        max-height: calc(100vh - 140px);
        position: relative;
        overflow-y: auto;
        top: 10px;
        width: 100%;
    }
</style>