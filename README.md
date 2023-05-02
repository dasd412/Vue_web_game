# Vue_web_game
Vue practice for swm project

***

## [Vue 공부 내용 정리]

[vscode 단축키]
전체 줄 맞춤 : 컨트롤 a -> 컨트롤 누른 상태에서 k -> 컨트롤은 떼지 않은 상태에서 f

[webpack 시작]
vue 담긴 디렉토리로 이동 -> npm init
-> npm install vue ->  npm install webpack webpack-cli -D -> webpack.config.js 생성 ->
npm i vue-loader -D 

[webpack으로 vue 빌드]
npm run build

***

## [Vue is not a constructor 오류 해결법]
다음 에러가 나온다면,
```
caught TypeError: vue__WEBPACK_IMPORTED_MODULE_0__ is not a constructor
```

뷰3과 뷰2의 버전 차이 문제이다.

만약 뷰2로 다음과 같이 코드가 되있다면,

```
import Vue from 'vue';
import NumberBaseball from './NumberBaseball';

new Vue(NumberBaseball).$mount('#root');
```

다음과 같이 바꿀 필요가 있다.

```
import { createApp } from 'vue';

import NumberBaseball from './NumberBaseball.vue';

createApp(NumberBaseball).mount("#root");

```

***


[webpack watch]

package.json script 내에 

```
  "scripts": {
    "build": "webpack --watch"
  },
```

라고 작성하면, npm run build를 매번 할 필요 없이 파일이 바뀔 때마다 자동 빌드 해준다.
