<template>
	<div >
	<label  >Send message to your friends and family with your custome "Message"</label>
      <button @click="add()">ADD quote</button>
  </div>
</template>
<script type="text/javascript">
	export default{
		
		 methods:{
		 	add(){
		 		this.$emit('add');
		 	}
		 }
	}
</script>

<style type="text/css" scoped>
	
	
</style>