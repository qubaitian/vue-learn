<!-- watch 进阶：能侦听什么、有哪些选项、怎么停止 -->
<script setup>
import { ref, reactive, watch } from 'vue'

const logs = ref([])
function log(msg) {
  logs.value.unshift(msg)
  if (logs.value.length > 8) logs.value.pop()
}

const a = ref(1)
const b = ref(1)
const user = reactive({ name: '小明', age: 18, address: { city: '北京' } })
const settings = ref({ theme: 'light' })

// ① 侦听 getter 函数：只关心对象里的某个属性，或者一个算出来的值
//    注意不能写 watch(user.age, ...)，那样传进去的只是数字 18，不是"会变的东西"
watch(
  () => user.age,
  (n, o) => log(`① user.age：${o} → ${n}`),
)
watch(
  () => a.value + b.value,
  (sum) => log(`① a + b 变成了 ${sum}`),
)

// ② 同时侦听多个来源：任意一个变了都会触发，新值旧值都是数组
watch([a, b], ([newA, newB], [oldA, oldB]) => log(`② [a, b]：[${oldA}, ${oldB}] → [${newA}, ${newB}]`))

// ③ 侦听 reactive 对象：默认就是深层的，改多深的属性都会触发
watch(user, () => log(`③ user 里有东西变了（city = ${user.address.city}）`))

// ④ deep：侦听 ref 包的对象时，默认只在整个对象被替换时触发，加 deep 才能侦听内部属性
watch(settings, () => log('④ settings（没加 deep）触发了'))
watch(settings, () => log('④ settings（加了 deep）触发了'), { deep: true })

// ⑤ immediate：创建时先立刻执行一次（默认要等第一次变化才执行）
watch(a, (n) => log(`⑤ immediate：a = ${n}`), { immediate: true })

// ⑥ once：只触发一次，之后自动停止
watch(b, (n) => log(`⑥ once：b 第一次变成 ${n}，以后不再触发`), { once: true })

// ⑦ watch 会返回一个停止函数，调用它就不再侦听
const stop = watch(a, (n) => log(`⑦ 可停止的 watch：a = ${n}`))
const stopped = ref(false)
function stopWatch() {
  stop()
  stopped.value = true
}
</script>

<template>
  <p>
    a = {{ a }} <button @click="a++">a+1</button> &nbsp; b = {{ b }} <button @click="b++">b+1</button>
  </p>
  <p>
    user.age = {{ user.age }} <button @click="user.age++">age+1</button>
    &nbsp; city = {{ user.address.city }}
    <button @click="user.address.city = user.address.city === '北京' ? '上海' : '北京'">换城市</button>
  </p>
  <p>
    settings.theme = {{ settings.theme }}
    <button @click="settings.theme = settings.theme === 'light' ? 'dark' : 'light'">改内部属性</button>
    <button @click="settings = { theme: 'blue' }">整个替换</button>
  </p>
  <p>
    <button @click="stopWatch" :disabled="stopped">{{ stopped ? '⑦ 已停止' : '⑦ 停止那个 watch' }}</button>
    <button @click="logs = []">清空日志</button>
  </p>
  <ul>
    <li v-for="(l, i) in logs" :key="i">{{ l }}</li>
  </ul>
</template>
