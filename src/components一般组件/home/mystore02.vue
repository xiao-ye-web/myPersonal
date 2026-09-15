<template>
  <div class="store">
    <img :src="wenz01">
    <h3 @click="wenzhang">溯回的记忆</h3>
    <p>文章小天地！思考、热爱与日常。</p>
    <div class="bog">#热爱 #梦想</div>
  </div>
</template>

<script setup lang="ts" name="myStore">
import wenz01 from '@/assets/jpg/wenz01.jpg'
import { useRouter } from 'vue-router'
const router = useRouter()
function wenzhang() {
  router.push('/wenzhang')
}
</script>

<style scoped>
.store {
   width: 280px;
  height: 120px;
  background-color: rgba(33, 93, 244, 0.5);
  border-radius: 15px;
  margin-left: 3%;
  margin-top:19px ;
  position: relative;
  transition: 0.5s;
}
.store:hover{
  transform: translateY(-5px);
}
img {
  display: block;
  width: 280px;
  height: 120px;
  border-radius: 15px;
  object-fit: cover;
}
.store::after {
  content: '';
  border-radius: 15px;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.15);
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
}
h3 {
  position: absolute;
  bottom: 30px;
  left: 10px;
  color: aliceblue;
  z-index: 999;
}
p {
  position: absolute;
  bottom: 10px;
  color: aliceblue;
  left: 10px;
  font-size: 10px;
}
.bog {
    position: absolute;
  bottom: 8px;
  color: aliceblue;
  left: 200px;
  font-size: 12px;
}
</style>