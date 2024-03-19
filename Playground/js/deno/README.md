> Deno는 Ryan Dahl이 개발한 JavaScript 및 TypeScript 런타임 환경입니다. Deno는 Node.js의 창시자인 Ryan Dahl이 Node.js의 한계와 개선할 점을 고려하여 만들었습니다.

## 느낀점

아래 2개만 해도 node보다 쓸만한 것 같다.

ts 파일이 실행되고, es 모듈이 되는 점이 너무 편리하다. 다만 프로덕션 레벨로 사용했을 경우, 기존 프로젝트가 잘 돌아가는지와 다양한 라이브러리와의 호환이 이뤄지는 확인이 필요하다.

* ES 모듈 지원
* TypeScript

## deno 설치

```bash
brew install deno
```

## deno package manager
nvm처럼 deno 버전 관리 매니저가 존재한다.

[asdf](https://asdf-vm.com/)란 매니저이다.

```bash
brew install asdf
```