<script setup>
import MyBotton from './MyBotton.vue'

const items = [
  {
    title: 'Разработчик интерфейсов/ Frontend-разработчик',
    description: 'Разработка интерфейсных компонентов (инфраструктура и веб-интерфейсы)',
    knowledge: [
      'React',
      'Typescript',
      'NextJS',
      'NodeJS',
      'GraphQL',
      'Cypress',
    ]
  },
  {
    title: 'JavaScript-разработчик',
    description: 'Участие в создании и развитии  веб-приложения на React JS, позволяющего управлять офисным пространством посредством интерактивных 2d планов',
    knowledge: [
      'ОРМ',
      'spring-data',
      'spring-security',
      'spring-boot,',
      'queryDSL',
    ]
  },
  {
    title: 'Frontend-разработчик ',
    description: 'Разработка нового функционала приложения (собственных компонентов, хуков/утилитарных библиотек)',
    knowledge: [
      'React with Hooks',
      'Redux',
      'JavaScript Core',
    ]
  },
  {
    title: 'Frontend-разработчик ',
    description: 'Разработка прикладных web-приложений для массового пользования',
    knowledge: [
      'JavaScript',
      'TypeScript',
      'React',
      'Redux'
    ]
  },
  {
    title: 'Java-разработчик',
    description: 'Развитие и разработка почти с нуля масштабируемой, высокодоступной Cloud Native-платформы по управлению рекомендациями',
    knowledge: [
      'Java 11-17',
      'Gradle',
      'Spring',
      'Camel',
      'Netty',
      'Junit 5',
      'Mockito',
      'AssertJ',
      'Testcontainers',
      'Docker',
      'Docker Compose',
      'OpenShift',
      'Kafka',
      'PostgreSQL',
      'Apache Ignite',
      'ClickHouse',
      'ELK/EFK',
      'Jaeger',
      'Grafana',
      'Prometheus'
    ]
  },
  {
    title: 'Java-разработчик (внутренняя безопасность)',
    description: 'Участие в разработке автоматизированных технический решений, направленных на выявление и предотвращение событий, связанных с девиантным поведением, мошенническими действиями, утечкой данных со стороны сотрудников Банка',
    knowledge: [
      'Java',
      'Sprinf',
      'Hadoop',
      'Spark',
      'Kafka',
      'Elasticsearch'
    ]
  },
]
</script>

<template>
  <div class="sixth-section">
    <div class="container">
      <div class="title">
        <h1>Вакансии Сбера</h1>
        <a href="">
          <span>Узнай больше об IT-командах Сбера</span>
        </a>
      </div>
      <div class="items">
        <div class="item" v-for="item in items">
          <div class="cub"></div>
          <!-- <div class="line"></div> -->
          <h2>{{ item.title }}</h2>
          <h3>{{ item.description }}</h3>
          <div class="knowledge">
            <div class="knowledge-item" v-for="k in item.knowledge">
              <p>{{ k }}</p>
            </div>
          </div>
          <div class="buttons">
            <a href="">
              <MyBotton
                name="green"
              >
                Откликнуться
              </MyBotton>
            </a>
            <a href="">
              <MyBotton
                name="white"
              >
                Задать вопрос
              </MyBotton>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin clip($value) {
  clip-path: polygon(100% 0, 100% calc(100% - $value), calc(100% - $value) 100%, 0 100%, 0 0);
}
.sixth-section {
  @apply flex flex-col items-center w-full pt-80px;
  .container {
    @apply flex flex-col items-center w-full max-w-1143px;
    .title {
      @apply flex flex-row items-end w-full justify-between;
      h1 {
        @apply text-48px font-600;
        color: #E7E7F0;
        text-shadow: 0px 0px 5px rgba(117, 223, 184, 0.6);
      }
      a {

        span {
          @apply text-20px font-400;
          text-decoration-line: underline;
          color: #75DFB8;
        }
      }
    }
    .items {
      @apply flex flex-row flex-wrap items-start w-full mt-63px;
      --clip-value: 20px;
      .cub {
        @apply -z-1;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        left: 2px;
        top: 2px;
        position: absolute;
        // background: #2CB352;
        background: url('/images/sber/fourth-section/bg.png')center center/cover no-repeat;
        @include clip(var(--clip-value));
      }
      .item {
        @apply flex flex-col items-start mx-25px py-44px pl-36px mt-30px relative;
        background: #2CB352;
        
        // background: linear-gradient(-45deg, transparent 15px, #58a 0), linear-gradient(45deg, transparent 15px, #655 0);
        width: calc(50% - 50px);
        // border: 2px solid #2CB352;
        // box-shadow: 0px 0px 5px rgba(117, 223, 184, 0.6), inset 0px 0px 20px rgba(117, 223, 184, 0.2);
        @include clip(var(--clip-value));


        h2 {
          @apply text-28px font-400 text-left;
          line-height: 120%;
          color: #2B9A4A;
          font-family: 'SB Sans Interface';

        }
        h3 {
          @apply text-18px font-400 text-left mt-12px leading-28px;
          color: #E7E7F0;
          opacity: 0.8;
          font-family: 'SB Sans Interface';
        }
        .knowledge {
          @apply flex flex-row flex-wrap items-start mt-24px w-full max-w-459px;
          &-item {
            @apply py-6px px-8px mr-8px mt-8px;
            opacity: 0.7;
            border: 1px solid #FFFFFF;
            border-radius: 4px;
            p {
              @apply text-12px font-400;
              color: #FFFFFF;
            }
          }
        }
        .buttons {
          @apply flex flex-row mt-48px;
        }
      }
    }
  }
}

</style>

