<template>
<section style="max-width: 92%; margin-left : 4%">
  <br>
  <h1 class="title is-3 has-text-centered">플랜잇! 🦄</h1>
  <b-feild class="has-text-right">
      <b-switch type="is-dark" class="is-small" v-model="displayMode">다크모드</b-switch>
  </b-feild>
  <br><br>
  <section class="box">
    <b-field grouped group-multiline>
      <b-field>
        <b-datetimepicker v-model="datetime"
            icon="calendar-today"
            placeholder="시간을 선택하세요">
            <template slot="left">
                <button class="button is-primary"
                    @click="datetime = new Date()">
                    <b-icon icon="clock"></b-icon>
                    <span>현재시간</span>
                </button>
            </template>
            <template slot="right">
                <button class="button is-danger"
                    @click="datetime = null">
                    <b-icon icon="close"></b-icon>
                    <span>초기화</span>
                </button>
            </template>
        </b-datetimepicker>
      </b-field>
      <b-field>
        <b-taginput
            v-model="tag"
            icon="label"
            placeholder="태그를 추가해보세요"
            :maxtags="maxs"
            :disabled="score">
            중요도
        </b-taginput>
      </b-field>
      <b-field>
          <b-rate icon-pack="fas" @change="success"></b-rate>
      </b-field>
    </b-field>

     <b-field>
      <b-input
        placeholder="할일을 입력하세요" 
        v-model="task" 
        expanded
        @keyup.enter="createTodo(task)">
      </b-input>
      <p class="control">
        <b-button type="is-primary" outlined @click="createTodo(task)">추가</b-button>
      </p>
    </b-field>

  </section>
  
  
  <ul class="list-group">
    <li class="box" v-for="(todo, index) in todos" :key="index">
    {{todo.task}}
    <b-checkbox size="is-small" @click="done(index)" is-light></b-checkbox>

    <b-button type="is-success" class="is-small" outlined  @click="deleteTodo(index)">완료</b-button>
    <b-dropdown aria-role="list">
        <span class="tag is-primary is-outlined"
            slot="trigger"
            role="button">
            더보기
            <b-icon icon="menu-down"></b-icon>
        </span>
        <b-dropdown-item aria-role="listitem">
          <a href="#" @click="deleteTodo(index)">삭제</a>
        </b-dropdown-item>
    </b-dropdown>
    </li>
  </ul>
  <hr>
  <p class="has-text-centered">
      <b-field>
          <b-switch size="is-small" v-model="bars">Bars</b-switch>
      </b-field>
      <b-datepicker
          inline
          v-model="date"
          :events="events"
          :indicators="indicators"
          >
      </b-datepicker>
  </p>

</section>

  
</template>
<style scoped>
    .tag {
        cursor: pointer;
    }
</style>
<script>
const thisMonth = new Date().getMonth()
export default {
  name: 'TodoPage',
  computed: {
    indicators() {
        return this.bars ? 'bars' : 'dots'
    }
  },
  data () {
    return {
      todos: [
        {
          task:'청소',
        },
        {
          task:'블로그 쓰기'
        },
        {
          task:'밥먹기'
        },
      ],
      datetime: new Date(),
      date: new Date(2017, thisMonth, 1),
      events: [
          new Date(2017, thisMonth, 2),
          new Date(2017, thisMonth, 6),
          {
              date: new Date(2017, thisMonth, 6),
              type: 'is-info'
          },
          {
              date: new Date(2017, thisMonth, 8),
              type: 'is-danger'
          },
          {
              date: new Date(2017, thisMonth, 10),
              type: 'is-success'
          },
          {
              date: new Date(2017, thisMonth, 10),
              type: 'is-link'
          },
          new Date(2017, thisMonth, 12),
          {
              date: new Date(2017, thisMonth, 12),
              type: 'is-warning'
          },
          {
              date: new Date(2017, thisMonth, 16),
              type: 'is-danger'
          },
          new Date(2017, thisMonth, 20),
          {
              date: new Date(2017, thisMonth, 29),
              type: 'is-success'
          },
          {
              date: new Date(2017, thisMonth, 29),
              type: 'is-warning'
          },
          {
              date: new Date(2017, thisMonth, 29),
              type: 'is-info'
          }
      ],
      bars: false,
      displayMode : false,
    }
  },
  methods:{
		deleteTodo(i){
			this.todos.splice(0,1);
    },
    done(index){
      
    },
		createTodo(task){
      this.$buefy.notification.open('<span class="title is-6">'+task+'</span>을(를) 할일에 추가했습니다!')
			if(task != null){
				this.todos.push({task:task});
				this.task = null;
			}
		}
	}
}
</script>