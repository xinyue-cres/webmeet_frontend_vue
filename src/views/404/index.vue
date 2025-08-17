<template>
  <div class="notfound-container">
    <el-result title="404" sub-title="Sorry, request error" class="result-box">
      <template #icon>
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        />
      </template>
      <template #extra>
        <el-button type="primary" @click="goback">Back</el-button>
      </template>
    </el-result>
  </div>
</template>


<script setup>

  const goback = () => {
      
  }


</script>


<style scoped lang="less">
.notfound-container {
  width: 100%;
  height: 100%;
}
.result-box {
  width: 100%;
  height: 100%;
}

::v-deep .el-result__subtitle p {
  color: rgb(233, 230, 230);
}
::v-deep .el-result__title  p {
  color: rgb(223, 221, 221);
}

</style>