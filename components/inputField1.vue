<template>
	<div class="text_addname"   >
  
      <label >Send message to your friends and family with your custome "Message"</label><br>
      <textarea placeholder="enter qoute"  ref="quote" ></textarea>
     
      <input type="text" ref="name" placeholder="enter name">
           <button @click="send()">send quote</button>
      <!-- <button @click="send()">send quote</button> -->
    </div>
</template>
<script type="text/javascript">
	export default {
		  
		  methods:{
		  	send(){
		  	const send={
		  		name:this.$refs["name"].value,
	 		quote:this.$refs["quote"].value
	 	};
	 	
		  		 this.$emit('send',send);
		  	}
		  }
	}
</script>
<style type="text/css"  >
	



</style>