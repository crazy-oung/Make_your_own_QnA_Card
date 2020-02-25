<template>
<section style="margin : 2%">
  
  <h1 class="title is-3 has-text-centered">
    플랜잇! 🦄 
    <span class="title is-7 has-text-right">ver 0.0.1</span>
  </h1>

  <p class="has-text-right" style="margin-bottom : 1%">
      <b-switch type="is-dark" size="is-small" v-model="displayMode">다크모드🌙 </b-switch>
  </p>
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
        <b-button type="is-primary" outlined @click="createTask(task)">추가</b-button>
      </p>
    </b-field>

  </section>
  
  
  <ul class="list-group">
    <li class="box" v-for="(todo, index) in todos" :key="index">
      <div>
        <b-tooltip label="완료했다면 체크!"
            :delay="1000"
            animated>
            <b-checkbox v-model="todos[index].checked"
              true-value="y"
            ></b-checkbox>
          <del class="title is-6" v-if="todos[index].checked == 'y'">{{todo.task}}</del>
          <span v-else>{{todo.task}}</span>
        </b-tooltip>
      </div>

      <b-tooltip label="더보기를 통해 수정/삭제 하기"
                :delay="1000"
                position="is-right"
                type="is-dark"
                animated>
        <b-dropdown aria-role="list">
          <span class="tag is-primary is-outlined"
              slot="trigger"
              role="button">
              더보기
              <b-icon icon="menu-down"></b-icon>
          </span>
          <b-dropdown-item aria-role="listitem">
            <a href="#" @click="deleteTask(index)">삭제 (할까말까?)</a>
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem">
            <a href="#" @click="modifyTask(index)">수정 (할까말까?)_</a>
          </b-dropdown-item>
        </b-dropdown>
      </b-tooltip>
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
  name: 'planit',
  computed: {
    indicators() {
        return this.bars ? 'bars' : 'dots'
    }
  },
  data () {
    return {
      todos: [
        {
          task:'할일을 적어 추가해보세요!',
        },
        {
          task:'왼쪽 체크상자를 클릭하면 할일 완료 ✔️',
          checked : 'y',
        },
        {
          task:'더보기 버튼을 통해 수정 및 추가가 가능합니다 😤',
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
		deleteTask(index){
      console.log(index,"<- index | todos[].task->", this.todos[index].task);
      this.todos.splice(index,1);
      console.log(this.todos)
    },
    taskDone(index){
      console.log(index,"<- index | todos[].task->", this.todos[index].task);
      this.todos[i].task = "<del>"+this.todos[i].task+"</del>";
    },
    modifyTask(index){
      alert("기능 준비중입니다.");
    },
		createTask(task){
      this.$buefy.notification.open('<span class="title is-6">'+task+'</span>을(를) 할일에 추가했습니다!')
			if(task != null){
        this.todos.push({task:task});
				this.task = null;
			}
		}
	}
}
</script>