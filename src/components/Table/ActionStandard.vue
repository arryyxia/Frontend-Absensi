<template>
	<div class="flex gap-2 bg-white">
		<Button 
			icon="pi pi-pencil" 
			severity="info" 
			aria-label="Notification" 
			@click="emitEdit(id)" 
		/>
		<Button 
			icon="pi pi-trash" 
			severity="danger" 
			aria-label="Notification" 
			@click="emitDelete(id)"
		/>
	</div>
</template>

<script>
export default {
	name:'TableActionStandard',
	inject:['default'],
	props: {
		onEdit: {
			type: Function,
			required: true
		},
		onDelete: {
			type: Function,
			required: true
		},
		id:{
			type: Number,
			required: true
		}
	},
	methods: {
		emitEdit(id) {
			this.onEdit(id);
		},
		emitDelete(id) {
			this.onDelete(id);
		}
	}
}
</script>