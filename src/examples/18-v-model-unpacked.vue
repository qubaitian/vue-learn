<!-- v-model 拆开看：在每种元素上它到底绑了什么 -->
<script setup>
import { ref } from 'vue'

// 每一行：左边用 v-model，右边是手写的等价代码，两边绑同一个变量，所以会同步
const text = ref('')
const agreed = ref(false)
const hobbies = ref([])
const gender = ref('男')
const city = ref('北京')

// 多选框手写版：选中就加进数组，取消就从数组删掉
function toggleHobby(e) {
  const v = e.target.value
  if (e.target.checked) hobbies.value.push(v)
  else hobbies.value = hobbies.value.filter((h) => h !== v)
}

// 坑：同样是 checkbox，绑的变量初始是布尔还是数组，行为完全不同
const asBool = ref(false)
const asArray = ref([])

// 坑：中文输入法拼音还没选字时，v-model 不会更新，@input 会
const imeA = ref('')
const imeB = ref('')
</script>

<template>
  <table>
    <tr><th>元素</th><th>v-model</th><th>手写等价</th><th>值</th></tr>

    <!-- 文本框 = :value + @input -->
    <tr>
      <td>文本框</td>
      <td><input v-model="text" /></td>
      <td><input :value="text" @input="text = $event.target.value" /></td>
      <td>{{ text }}</td>
    </tr>

    <!-- 单个复选框 = :checked + @change，值是 true/false -->
    <tr>
      <td>单个复选框</td>
      <td><input type="checkbox" v-model="agreed" /></td>
      <td><input type="checkbox" :checked="agreed" @change="agreed = $event.target.checked" /></td>
      <td>{{ agreed }}</td>
    </tr>

    <!-- 多个复选框 = :checked 判断"在不在数组里" + @change 往数组加/删 -->
    <tr>
      <td>多个复选框</td>
      <td>
        <label><input type="checkbox" value="读书" v-model="hobbies" />读书</label>
        <label><input type="checkbox" value="跑步" v-model="hobbies" />跑步</label>
      </td>
      <td>
        <label><input type="checkbox" value="读书" :checked="hobbies.includes('读书')" @change="toggleHobby" />读书</label>
        <label><input type="checkbox" value="跑步" :checked="hobbies.includes('跑步')" @change="toggleHobby" />跑步</label>
      </td>
      <td>{{ hobbies }}</td>
    </tr>

    <!-- 单选框 = :checked 判断"是不是等于我的 value" + @change 把自己的 value 赋过去 -->
    <tr>
      <td>单选框</td>
      <td>
        <label><input type="radio" value="男" v-model="gender" />男</label>
        <label><input type="radio" value="女" v-model="gender" />女</label>
      </td>
      <td>
        <label><input type="radio" value="男" :checked="gender === '男'" @change="gender = '男'" />男</label>
        <label><input type="radio" value="女" :checked="gender === '女'" @change="gender = '女'" />女</label>
      </td>
      <td>{{ gender }}</td>
    </tr>

    <!-- 下拉框 = :value + @change -->
    <tr>
      <td>下拉框</td>
      <td>
        <select v-model="city"><option>北京</option><option>上海</option></select>
      </td>
      <td>
        <select :value="city" @change="city = $event.target.value"><option>北京</option><option>上海</option></select>
      </td>
      <td>{{ city }}</td>
    </tr>
  </table>

  <h4>坑 1：checkbox 的行为由「变量的初始类型」决定</h4>
  <p>
    <label><input type="checkbox" value="A" v-model="asBool" /> 绑 ref(false)</label> → {{ asBool }}
    &nbsp;
    <label><input type="checkbox" value="A" v-model="asArray" /> 绑 ref([])</label> → {{ asArray }}
  </p>

  <h4>坑 2：中文输入法打拼音时（还没选字），v-model 不更新</h4>
  <p><input v-model="imeA" placeholder="v-model：用拼音打字" /> → {{ imeA }}</p>
  <p><input :value="imeB" @input="imeB = $event.target.value" placeholder=":value + @input" /> → {{ imeB }}</p>
</template>

<style scoped>
table {
  border-collapse: collapse;
  font-size: 13px;
}
th,
td {
  border: 1px solid #e3e6ea;
  padding: 4px 6px;
  text-align: left;
}
input:not([type]) {
  width: 90px;
}
h4 {
  margin: 14px 0 4px;
}
</style>
