<template>
<div  class="content">
<img src="~/assets/envi.jpg" class="img">
<div class="text" v-bind:class="{'addname_img':wanttoshare}" >
<h1 >{{quote}} </h1>
<p>~{{name}}</p>
</div>

	<wantToShare @add="add"    class=' basic wantToShare' :class="[wanttoshare?'hide':'show']" ></wantToShare>


<inputField1  @send='send' class="basic inputfield" :class="[wanttoshare?'inputfieldin':'inputfieldout',showlink?'hide':'show']" > </inputField1>

<shareLink :link="link" :showlink='showlink' @edit="edit" class="basic inputfield" :class="[showlink?'inputfieldin':'inputfieldout']">
	
</shareLink>

</div>
</template>
<script type="text/javascript">

export default{
mounted(){
console.log(this.$route.query.q);
const  q= this.$route.query.q;
var ar = q.split(',');

var name =ar[0];
var quote =ar[1];

// comment this part start of ever festival
name = atob(name);
quote = atob(quote);

//
this.name= name;

this.quote=quote;
this.$store.dispatch('quote/setname',name);
this.$store.dispatch('quote/setquote',quote);


},
data(){
return {
name: this.$store.getters.["quote/getname"],
quote:this.$store.getters.["quote/getquote"],
showlink:false,

wanttoshare:false,
link:""
}
},







methods:{
add(){
console.log(this.wanttoshare);
this.wanttoshare=!this.wanttoshare;


},
send(value){

this.name=value.name;
this.quote=value.quote;
this.addname=false;
this.showlink=true;
var name = btoa(this.name);
var quote = btoa(this.quote);
this.link=window.location.origin+"/?q="+[name , quote].join()

},
 edit(){
 	this.showlink=false;
 	this.wanttoshare=true;
 	console.log(this.showlink);
 }
}


}
</script>
<style type="text/css" >


.hide{
	opacity: 0;
}
.show{ visibility: 1; }


.content{
position: relative;
width: 100%;
height: 100%;

}
.text_addname{
position: absolute;

background-color: grey;
}


.text{

position: absolute;

min-height: 5rem;
min-width: 20rem;


}
h1{
font-size: 1.3rem;
position: absolute;
top: 1rem;
left: 0;
}

p{font-size: 1rem;
position: absolute;
bottom: 0rem;
right: 0rem;
}
.img{position:absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
object-fit: cover;
}


.addname_img{
opacity: 0.5;
}

.basic{
position: absolute;
top: 2rem;
max-width:20rem; 
min-height: 5rem;
min-width: 20rem;

}

/*     wanntto share     */
.wantToShare{
transform: translateY(-10rem);
animation:startWantToShare  4s   forwards ;  /*change time of first animation*/
animation-delay: 3s;
transition: all 1s ease;
}
@keyframes startWantToShare{
	0%{
transform: translateY(-10rem);
	}
	100%{
		transform: translateY(0rem);
	}
}

           /*inpput fiels in out */
.inputfield{
	transform: translateY(-30rem);
	transition: all 1s ease;
}
.inputfieldin{
	transform: translateY(0);
}
.inputfieldout{
	transform: translateY(-30rem);
}

</style>