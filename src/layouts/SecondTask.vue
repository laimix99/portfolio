<template>
  <div style="display: flex; flex-direction: row; width: 100%; padding: 16px;">
      <button @click="createPermission">create</button>
  </div>
  <div
      v-if="templates"
      :style="{
          display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflow: 'scroll', maxWidth: '100%', minWidth: '100%', width: '100%',
          justifyContent: 'flex-start',
          padding: '8px 16px',
      }"
  >
      <RootPermissionColumn
          v-for="(c,ckey,ci) in templates.rootPermissionTitles" :key="ckey"
          :is-first="ci === 0"
          :data="c"
          :id="ckey"
          :actions="rootPermissionFlat"
      >
      </RootPermissionColumn>
  </div>
  <div style="display: flex; flex-direction: column; width: 100%; padding: 0 16px; max-width: 100%;">
      <span>Root permission flat:</span>
      <small style="font-size: 10px">{{ rootPermissionFlat }}</small>
      <span>Root permission from server:</span>
      <small style="font-size: 10px">{{ templates?.rootPermission }}</small>
      <span>Result:</span>
      <small style="font-size: 10px">{{ rootPermissionResult }}</small>
  </div>
</template>

<script>
  import API from "../api/api";
  import RootPermissionColumn from '../components/RootPermissionColumn.vue'
  export default {
      components: {
        RootPermissionColumn
      },
      name: 'SecondTask',
      data() {
          return {
              templates: {},
              rootPermissionFlat: {}
          }
      },
      computed: {
          rootPermissionResult() {
              if (!this.templates.rootPermission) return {}
              let keyPrev = null
              let rootPermissionCopy = JSON.parse(JSON.stringify(this.templates.rootPermission))
              // через итератор в JSON.stringify подменяем результаты действий из плоской структуры запоминая родительский/предедущий ключ
              return JSON.parse(JSON.stringify(rootPermissionCopy, (key, val) => {
                  if (key === 'action') {
                      return this.rootPermissionFlat[keyPrev]
                  }
                  else {
                      keyPrev = key
                      return val
                  }
                  
              }))
          }
      },
      methods: {
          async getTemplates() {
              const { data } = await API.getTemplates()
              this.templates = data
              let keyPrev = null
              let rootPermissionCopy = JSON.parse(JSON.stringify(data.rootPermission))
              // делаем плоскую структуру из rootPermissions чтобы потом прокинуть во все рекурсивные компоненты
              // через итератор в JSON.stringify выбираем нужные ключи запоминая родительский/предедущий ключ
              JSON.stringify(rootPermissionCopy, (key, val) => {
                  if (key === 'action') {
                      this.rootPermissionFlat[keyPrev] = val
                      keyPrev = null
                  } else {
                      keyPrev = key
                  }
                  return val
              })
          },
          createPermission() {
              let res = API.createPermission(this.rootPermissionResult)
              if (res === true) alert('Done!')
          }
      },
      mounted() {
          this.getTemplates()
      }
  }
</script>


