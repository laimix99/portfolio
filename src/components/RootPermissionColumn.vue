<template>
  <div
    :style="{
      minWidth: '200px',
      minHeight: '400px',
      borderRight: '1px solid #eee',
      borderTop: '1px solid #eee',
      borderBottom: '1px solid #eee',
      borderLeft: isFirst ? '1px solid #eee' : 'none',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap'
    }"
  >
    <div
      :style="{
        minWidth: '200px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
      }"
    >
      <!-- заголовок -->
      <div :style="{padding: '16px', fontWeight: 'bold'}">
        <span>{{ data.title }}</span>
      </div>
      <!-- вложенные элементы -->
      <div v-if="data.items">
        <!-- элемент при нажатии открывает/закрывает вложенный элемент -->
        <div
          v-for="(i,ikey) in data.items" :key="ikey"
          @click="item?.id === ikey ? item = null : item = {id: ikey, item: i}"
          :style="{
            padding: '8px 16px',
            background: ikey == item?.id ? 'black' : 'none',
            color: ikey === item?.id ? 'white' : 'black',
            cursor: 'pointer'
          }"
        >
          {{i.title}}
        </div>
      </div>
      <!-- действия -->
      <div v-if="actions[id]">
        <div v-for="(a,akey) in actions[id]"
          :style="{padding: '8px 16px'}"
        >
          <input type="checkbox" :checked="a" @change="$event => onInput($event, akey)">
          {{akey}}
        </div>
      </div>
    </div>
  </div>
  <!-- рекурсивный элемент если выбран item -->
  <RootPermissionColumn
    v-if="item?.id"
    :id="item.id"
    :data="item.item"
    :actions="actions"
  ></RootPermissionColumn>
</template>

<script>
export default {
  name: 'RootPermissionColumn',
  props: {
    isFirst: { type: Boolean },
    id: { type: String },
    data: { type: Object },
    // пронизывают все эти рекурсивные элементы, можно убрать в стор потом
    actions: { type: Object },
  },
  data () {
    return {
      item: null
    }
  },
  methods: {
    onInput(e, actionKey) {
      console.log(':onInput', e.target.checked, actionKey)
      // в глобальный плоский объект действий записываем значения
      this.actions[this.id][actionKey] = e.target.checked ? 1 : 0
    }
  }
}
</script>
