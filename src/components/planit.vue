<template>
<section>
  <br>
  <h1 class="title is-3 has-text-centered is-bold">플랜잇! 🦄</h1>
  <b-field class="has-text-right">
      <b-switch type="is-dark" v-model="displayMode">다크모드</b-switch>
  </b-field>

  <b-field class="box" grouped group-multiline>
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
      <input label="할일" type="text" class="form-control input" 
        placeholder="할일을 입력하세요" 
        v-model="name" 
        v-on:keyup.enter="createTodo(name)">
    </b-field>
    <b-field>
        <b-rate icon-pack="fas" @change="success"></b-rate>
    </b-field>
    <b-field>
      <b-taginput
          v-model="texts"
          :maxtags="maxs"
          :disabled="score">
      </b-taginput>
    </b-field>
    <b-field>
      <button class="button is-light" type="button" @click="createTodo(name)">추가</button>
    </b-field>
  </b-field>
       
  <br>
  
  <ul class="list-group">
    <li class="box" v-for="(todo, index) in todos" :key="index">
    {{todo.name}}
      <div class="btn-group pull-right" 
        style="font-size: 12px; line-height: 1;">
        <b-dropdown aria-role="list">
            <p class="tag is-success"
                slot="trigger"
                role="button">
                더보기
                <b-icon icon="menu-down"></b-icon>
            </p>
            <b-dropdown-item aria-role="listitem">
              <a href="#" @click="deleteTodo(index)">삭제</a>
            </b-dropdown-item>
        </b-dropdown>
        <ul class="dropdown-menu">
          <li><a href="#" @click="deleteTodo(index)">삭제</a></li>
        </ul>
      </div>
    </li>
  </ul>
  <hr>
  <span>
      <b-field>
          <b-switch v-model="bars">Bars</b-switch>
      </b-field>
      <b-datepicker
          inline
          v-model="date"
          :events="events"
          :indicators="indicators"
          >
      </b-datepicker>
  </span>

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
          name:'청소'
        },
        {
          name:'블로그 쓰기'
        },
        {
          name:'밥먹기'
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
                bars: false
    }
  },
  methods:{
		deleteTodo(i){
			this.todos.splice(0,1);
		},
		createTodo(name){
			if(name != null){
				this.todos.push({name:name});
				this.name = null
			}
		}
	}
}
</script>