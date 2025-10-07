<template>
    <div class="w-full max-w-md p-4 bg-white rounded shadow">
        <h1 class="text-xl font-semibold">
            <slot name="heading"></slot>
        </h1>
        <h2 class="mt-1 text-base text-pretty">
            <slot name="subHeading"></slot>
        </h2>
        <slot></slot>
        <div class="flex justify-end gap-2">
            <slot name="actions"></slot>
        </div>
    </div>
</template>