//webpack으로 설치한 것 (package.json에 기술된 것)임포트
import { createApp } from 'vue';

import NumberBaseball from './NumberBaseball.vue';

// vue 인스턴스를 만듬
createApp(NumberBaseball).mount("#root");

