<template>
  <div class="xm01">
    <div class="xmstore">未破土</div>
    <div class="xmName">项目名字</div>
    <div class="xmtitle">此项目介绍</div>
    <div class="xmjishu">
      <div style="display: flex; gap: 10px;">
      <div class="style1">项目技术1</div>
      <div class="style2">项目技术2</div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="xiangmu01">

</script>

<style scoped>
.xm01{
  width: 450px;
  height: 230px;
  background-color: rgba(235, 229, 229, 0.7);
  border-radius: 10px;
  margin: 50px 20%;
  padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(82, 81, 81, 0.8);
  transition: 0.5s;
}
.xm01:hover{
  background-color: rgba(226, 228, 230,0.9);
}
.xmName{
  width: 250px;
  height: 45px;
  line-height: 45px;
  /* background-color: #d53636; */
  margin-left: 20px;
  font-size: 20px;
  margin-top: -10px;
}
.xmtitle{
  width: 250px;
  height: 25px;
  line-height: 25px;
  /* background-color: #d53636; */
  margin-left: 20px;
  font-size: 13px;
  margin-top: 10px;
}
.xmjishu{
  width: 450px;
  height: 130px;
  /* background-color: #d53636; */
  margin-top: 5px;
  margin-left: -30px;
  border-radius: 10px;
}
.xmstore{
  width: 50px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #ece3e3;
  margin-left: 360px;
  border-radius: 5px;
  font-size: 13px;
  margin-top: -20px;
}
.style1{
  width: 100px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: rgba(231, 224, 224, 0.5);
  margin-left: 20px;
  border-radius: 5px;
  font-size: 13px;
  margin-top: 80px;
}
.style2{
  width: 100px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: rgba(231, 224, 224, 0.5);
  margin-left: 20px;
  border-radius: 5px;
  font-size: 13px;
  margin-top: 80px;
}
</style>