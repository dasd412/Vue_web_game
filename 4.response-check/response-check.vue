<template>
  <div>
    <div id="screen" v-bind:class="state" @click="onClickScreen">{{ message }}</div>
    <div v-show="result.length"> <!-- v-show 안의 값이 false면 display none, true면 display가 보여진다. -->
      <div>average time:{{average}}ms</div> <!-- computed의 average()와 대응된다. -->
      <button @click="onReset">reset</button> <!-- v-on:을 @로 바꿀 수 있다.-->
    </div>
  </div>
</template>

<script>
//바로 아래 3개는 화면에 관련 없는 데이터 
let startTime = 0;
let endTime = 0;
let timeout = null;

export default {
  data() {//화면에 관련 있는 데이터 (계산이나 가공이 딱히 필요 없는 데이터)
    return {
      result: [],
      state: 'waiting', // v-bind:class="state" 와 매핑되는 데이터
      message: 'click and start.',
    };
  },
  computed:{// <template> 내에 계산이 필요한 경우 이 computed 속성에서 처리한다. 데이터 가공이 필요할 때 씀. 그리고 캐싱 기능이 있기 때문에 성능 향상이 가능하다.
    average(){
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;  // 배열의 값 다 더한 것 / 배열의 길이 
    }
  },
  methods: {
    onReset() {
      this.result = [];
      this.state='waiting';
    },
    onClickScreen() {

      if (this.state === 'waiting') {
        this.state = 'ready';
        this.message = 'if it is green, then click!';

        timeout = setTimeout(() => {
          this.state = 'now';
          this.message = 'click now!!!';
          startTime = new Date();
        }, Math.floor(Math.random() * 1000 + 2000));

      }
      else if (this.state === 'ready') {

        clearTimeout(timeout);

        this.state = 'waiting';
        this.message = 'you are so hurry! lets click after it is green';
      }
      else if (this.state === 'now') {
        endTime = new Date();
        this.state = 'waiting';
        this.message = "click and start";
        this.result.push(endTime - startTime);
      }
    }
  }
};
</script>

// css 스타일 
// scoped를 해놓으면, 이 컴포넌트에서만 아래 css가 적용된다. 전역 스타일로 쓰고 싶으면 scoped를 빼면 됨.
<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}

#screen.waiting {
  background-color: aqua;
}

#screen.ready {
  background-color: red;
  color: white;
}

#screen.now {
  background-color: greenyellow;
}
</style>