<template>
    <div class="login-container">
        <img
            :src="loginBg"
            class="login-bg"
            alt="login background"
        />
        <div class="login-form-wrapper">
            <div class="login-header">
                <h1 class="login-title">系统登录</h1>
                <p class="login-subtitle">欢迎回来，请登录您的账号</p>
            </div>

            <el-form
                ref="loginFormRef"
                style="max-width: 600px"
                :model="loginForm"
                :rules="loginRules"
                label-width="auto"
            >
                <el-form-item label="账号名称" prop="username" >
                    <el-input v-model="loginForm.username" />
                </el-form-item>
                <el-form-item label="账号口令" prop="password" >
                    <el-input type="password" show-password v-model="loginForm.password" />
                </el-form-item>

                <div>
                    <el-button 
                        class="login-btn"
                        type="primary" 
                        @click="submitForm(loginFormRef)"
                    >
                        {{'登 录'}}
                    </el-button>
                </div>
                    
            </el-form>
        </div>

    </div>
</template>


<script setup>
import { reactive, ref } from 'vue';
import loginBg from "../../assets/img/login-bg2.jpg";


    const loginFormRef = ref()
    const loginForm = reactive({
        username: 'admin',
        password: 'password'
    })

    const validateUser = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入账号名称'));
        } else {
            callback()
        }
    }
    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入账号口令'));
        } else {
            callback()
        }
    }

    const loginRules = reactive({
        username: [{
            validator: validateUser,
            trigger: 'blur',
        }],
        password: [{
            validator: validatePass,
            trigger: 'blur',
        }],
    })

    const submitForm = async (formEl) => {
        if (!formEl) return;
        await formEl.validate((valid, fields) => {
            if (valid) {
                console.log('submit!')
            } else {
                console.log('error submit!', fields)
            }
        })
    }

</script>


<style lang="less" scoped>

.login-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
    z-index: 1;
}

.login-title {
    font-size: 28px;
    color: #ecedf6;
    font-weight: 600;
    margin-bottom: 8px;
    letter-spacing: 1px;
}
        
.login-subtitle {
    color: #deedee;
    font-size: 14px;
}

.login-form-wrapper {
    position: relative;
    z-index: 2;
    width: 420px;
    background: rgba(255, 255, 255, 0.225);
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    padding: 40px 30px;
    animation: fadeIn 0.8s ease-out;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
}

::v-deep .el-form-item__label {
    color: rgb(255, 255, 255);
}

.login-btn {
    height: 46px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    background: linear-gradient(135deg, #3498db, #2980b9);
    border: none;
    transition: all 0.3s ease;
    border-radius: 8px;
    
}

.login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}
</style>