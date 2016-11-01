<template id="child-template">
	<span>{{ message }}</span>
</template>

<script>
	module.exporst = {
		props: ['message'],
  		template: '#child-template'
	}
</script>