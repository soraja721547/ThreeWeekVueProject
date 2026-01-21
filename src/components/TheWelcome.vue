<script setup>
import { RouterLink, RouterView } from 'vue-router'

import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'

// const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Vue基礎-計數器</template>

    <RouterLink to="/basic">Vue基礎-計數器</RouterLink>
    <p v-pre>
      建立 Vue 專案（Vite）模板語法（ {{ }} ）v-if, v-show, v-model。
    事件綁定 @click綁定 class、style, 做出一個「按鈕＋計數器」。
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>簡易計算機</template>

    <RouterLink to="/calculator">簡易計算機</RouterLink>
    <p v-pre>
      認識ref, reactive, computed, watch, 做出一個簡易計算機。
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Todo-List</template>

    <RouterLink to="/todolist">Todo-List</RouterLink>
    <p v-pre>
      component 分拆 props emit 傳遞事件修飾符（v-model）做一個 Todo List（Vue 版本、可分組件）。
    </p>
  </WelcomeItem>
</template>
