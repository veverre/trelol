<template>
    <div class="w-full max-w-md p-4 bg-white rounded shadow">
        <h1 class="text-xl font-semibold text-highlighted">
            <slot name="heading"></slot>
        </h1>
        <h2 class="mt-1 text-base text-pretty text-muted">
            <slot name="subHeading"></slot>
        </h2>
        <slot></slot>
    </div>
</template>