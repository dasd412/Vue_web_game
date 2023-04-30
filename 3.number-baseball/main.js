//webpack으로 설치한 것 (package.json에 기술된 것)임포트
import Vue from 'vue';

import NumberBaseball from './NumberBaseball';

// vue 인스턴스를 만듬
new Vue(NumberBaseball).$mount('#root');



