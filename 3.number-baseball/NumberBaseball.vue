<!-- 뷰 컴포넌트의 template-->
<template>
    <div>
        <h1>{{ result }}</h1>

        <form v-on:submit="onSubmitForm">
            <input ref="answer" minlength="4" maxlength="4" v-model="value" /> <!-- 최소 입력 4, 최대 입력 4-->
            <button type="submit">입력</button>
        </form>

        <div>시도 :{{ tries.length }}</div>

        <ul>
            <li v-for="t in tries" :key="t.try"><!-- 반복문 -->
                <div>{{ t.try }}</div>
                <div>{{ t.result }}</div>
            </li>
        </ul>

    </div>
</template>

<script>

const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

export default {
    data() {// 변수 중에 화면에 보이는 변수는 data() 안에 선언
        return {
            answer: getNumbers(), // ex) [1,5,3,4]
            tries: [],
            value: '',
            result: '',
        }
    },
    methods: {
        onSubmitForm(e) {
            e.preventDefault();

            // 문자열 value와 배열 answer를 비교
            if (this.value === this.answer.join('')) {// 정답 맞췄으면

                this.tries.push({
                    try: this.value,
                    result: 'homerun',
                });
                this.result = 'homerun';
                this.value = '';
                this.answer = getNumbers();
                this.tries = [];
                this.$refs.answer.focus();
            }
            else {

                if (this.tries.length >= 9) { // 10번째 시도
                    this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(',')}였습니다!`;
                    alert('게임을 다시 시작합니다.');
                    this.value = '';
                    this.answer = getNumbers();
                    this.tries = [];
                    this.$refs.answer.focus();
                }
                
                // 화면에 안보이는 변수는 그냥 변수로 선언
                let strike = 0;
                let ball = 0;

                const answerArray = this.value.split('').map(v => parseInt(v));

                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.answer[i]) { // 숫자 자릿수 모두 정답
                        strike++;
                    } else if (this.answer.includes(answerArray[i])) { // 숫자만 정답
                        ball++;
                    }
                }

                this.tries.push({
                    try: this.value,
                    result: `${strike} strike, ${ball} ball.`,
                });

                this.value = '';
                this.$refs.answer.focus();
            }
        }
    }
};
</script>

<style></style>