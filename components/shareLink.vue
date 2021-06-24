<template>
	 <div class="text_addname" v-bind:class="{'addname':showlink}" >
     
     
      <textarea placeholder="enter qoute"  v-model="link" ></textarea>
<button class="button" @click="edit">Edit</button>
       <a :href="`whatsapp://send?text=${link}`"

             data-action="share/whatsapp/share"
		target="_blank"> Share to WhatsApp </a> 
     
           
   
     
    </div>
</template>
<script type="text/javascript">
	 export default{
	 	 props:['link', 'showlink'],
	 
	 methods:{
	 	edit(){
	 		this.$emit('edit');
	 	}
	 }
	}

</script>
<style type="text/css" scoped>
	.text_addname{
visibility: hidden;
	position: absolute;
	
	min-height: 5rem;
	min-width: 20rem;
	
	
}
.addname{
	background-color: grey;
	visibility: visible;
}
</style>