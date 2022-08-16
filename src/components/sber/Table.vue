<script setup>

const rows = [
  {
    number: '1',
    name: 'Герой',
    answers: '9',
    time: '2:20',
    color: 'linear-gradient(180deg, #FFCD1D 0%, #F5DEA3 57.28%, #DCB141 57.29%)',
  },
    {
    number: '2',
    name: 'Герой',
    answers: '9',
    color: 'linear-gradient(180deg, #FFFFFF 57.8%, #B0ACAC 57.81%, #FFFFFF 100%)',
  },
    {
    number: '3',
    name: 'Герой',
    answers: '9',
    time: '2:20',
    color: 'linear-gradient(180deg, #985D33 9.38%, #B18208 56.24%, #7A4616 56.25%, #8D5827 69.79%)',
  },
    {
    number: '4',
    name: 'Герой',
    answers: '9',
    time: '2:20',
    color: '#fff'
  },
    {
    number: '5',
    name: 'Герой',
    answers: '9',
    time: '2:20',
    color: '#fff'
  },
    {
    number: '6',
    name: 'Герой',
    answers: '9',
    time: '2:20',
    color: '#fff'
  },
    {
    number: '7',
    name: 'Герой',
    answers: '9',
    time: '2:20',
    color: '#fff'
  },
    {
    number: '8',
    name: 'Герой',
    answers: '9',
    time: '2:20',
    color: '#fff'
  },
    {
    number: '9',
    name: 'Герой',
    answers: '9',
    time: '2:20',
    color: '#fff'
  },
    {
    number: '10',
    name: 'Герой',
    answers: '9',
    time: '2:20',
    color: '#fff'
  },
]
</script>

<template>
  <div class="wrapper">
    <table>
      <caption>Награждение победителей состоится 15.06 в 18:00</caption>
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Герои</th>
          <th scope="col">Верных ответов</th>
          <th scope="col">Время</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <th scope="row">{{ row.number }}</th>
          <td :style="{ 'background': row.color, '-webkit-background-clip': 'text',  }">{{ row.name }}</td>
          <td>{{ row.answers }}</td>
          <td>{{ row.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  @apply flex flex-col items-start w-full max-w-488px py-35px;
  table {
    @apply w-full ;
    caption {
      @apply text-18px font-400 w-full;
      color: #E7E7F0;
      font-family: 'SB Sans Interface';
    }
    // thead {
    //   @apply mt-32px;
    // }
    thead th {
      @apply text-20px font-400 pt-32px pb-20px;
      font-family: 'SB Sans Interface';
      opacity: 0.6;
      color: #E7E7F0;
    }
    thead th:nth-child(1) {
      width: 10%;
    }
     thead th:nth-child(2) {
      width: 40%;
      text-align: left;
    }
    thead th:nth-child(4) {
      text-align: left;
    }
    tbody {
      @apply;
    }
    tbody tr {
      @apply;
      background: #111316 ;
      // margin-top: 1px !important;
      // border-radius: 10px;
      // letter-spacing: 2px;
      // border-spacing: 5px;
      // &:nth-child(n) {
      //   padding-top: 2px; 
      // }

    }
    tbody td {
      @apply text-20px font-400 ;
      color: #FFFFFF;
    }
    tbody th {
      @apply text-20px font-400 py-14px;
      color: #FFFFFF;
      &:nth-child(1){
        border-radius: 4px 0px 0px 0px;
      }
    }
    tbody td:nth-child(2) {
      text-align: left;
    }
    tbody td:nth-child(4) {
      text-align: left;
      border-radius: 0px 4px 0px 0px;
    }
  }
}
</style>
