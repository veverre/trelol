<template>
    <div class="flex justify-end gap-2">
        <Button @click="$emits('cancel')" variant="secondary" type-btn="outlined">Cancel</Button>
        <Button type="submit" variant="success">Valider</Button>
    </div>
</template>