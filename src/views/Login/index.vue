<template>
  <div class="login-contanier">
    <div class="title-contanier">
      <h3>用户登录</h3>
    </div>
    <el-form
      :model="form"
      ref="formRef"
      :rules="formRules"
      class="form-contanier"
    >
      <el-form-item prop="uname">
        <el-icon class="icon-contanier">
          <User />
        </el-icon>
        <el-input v-model="form.uname" />
      </el-form-item>
      <el-form-item prop="upwd">
        <el-icon class="icon-contanier">
          <Unlock />
        </el-icon>
        <el-input v-model="form.upwd" :type="passwordType" />
        <el-icon class="eye-contanier" @click="handleIcon">
          <Watermelon v-show="passwordType === 'password' ? true : false" />
          <View v-show="passwordType === 'text' ? true : false" />
        </el-icon>
      </el-form-item>
      <el-button type="primary" class="btnSubmit" @click="handleLogin"
        >确认</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { User, Unlock, Watermelon, View } from "@element-plus/icons-vue";
import { login } from "@/api/login";
const form = ref({
  uname: "doudou",
  upwd: "123456",
});

const formRules = ref({
  uname: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 12, message: "Length should be 3 to 12", trigger: "blur" },
  ],
  upwd: [
    {
      required: true,
      message: "Please input Activity password",
      trigger: "blur",
    },
    { min: 3, max: 12, message: "Length should be 3 to 12", trigger: "blur" },
  ],
});

const formRef = ref(null);
// 点击确认
const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      console.log("submit!");
      const { data: res } = await login(form.value);
      console.log(res);
    } else {
      console.log("error submit!");
    }
  });
};

const passwordType = ref("password");
// 点击眼睛
const handleIcon = () => {
  if (passwordType.value === "password") {
    passwordType.value = "text";
  } else {
    passwordType.value = "password";
  }
};
</script>
<style lang="scss" scoped>
.login-contanier {
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 50px;
  box-sizing: border-box;
  .title-contanier {
    height: 50px;
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translate(-50%, -50%);
    font-size: 26px;
  }
  .form-contanier {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .icon-contanier {
      position: absolute;
      color: #fff;
      left: 10px;
      z-index: 666;
    }
    .eye-contanier {
      position: absolute;
      color: #fff;
      right: 10px;
      z-index: 666;
    }
    .btnSubmit {
      width: 100%;
    }
  }
}

::v-deep .el-input__wrapper {
  background: #4e4141;
  height: 30px;
  width: 200px;
  padding: 0 25px;
  box-sizing: border-box;
  input {
    color: #fff;
  }
}
</style>
