# ✔️ 원티드 프리 온보딩 - 견적 요청 페이지 구현

## 에이팀벤처스

![에이팀벤처스ᅳ](https://user-images.githubusercontent.com/53133662/153177356-da26b823-1757-4287-80f9-46c8cba92e90.png)


## 프로젝트 소개

- 에이팀벤처스의 파트너스 견적요청을 확인하는 페이지 구현

- typescript로 안정적인 개발 환경 구현

- json-server & mock rest-api server 연동 및 배포

- 파트너 요청 페이지, 필터 같은 옵션에 따라 해당하는 아이템만 받아올 수 있는 페이지 구현

- UI 라이브러리를 사용하지 않고 직접 구현

- 미디어 쿼리로 모바일에서도 가독성이 높은 반응형 페이지 구현

## 팀원 소개

🏃‍ [민지연](https://github.com/ichbinmin2)(팀장)<br/>
🏃‍ [박서윤](https://github.com/seoyuuun)<br/>
🏃‍ [양다혜](https://github.com/dahye-program)<br/>
🏃‍ [박서영](https://github.com/ongddree)<br/>

## 배포 주소

[배포 사이트 바로가기](https://ateamventures.herokuapp.com/)

## 과제 구현 목록

### (박서윤)

☑️ checkbox filter UI 구현

☑️ checkbox filter 카테고리별로 교차 선택 및 메뉴 구성 확장 가능하도록 구성

☑️ [가공] 방식 필터가 선택되면, 해당 방식 조건이 포함된 카드를 모두 노출함

☑️ [재료] 필터가 선택되면, 해당 재료 조건이 포함된 카드를 모두 노출함.

☑️ 가봉 방식과 재료 필터가 둘 다 선택되면, 두 조건의 교집합 노출함

☑️ 선택된 필터의 합계를 자동으로 계산하여 노출

### (박서영)

☑️ '상담 중인 요청만 보기' 토글을 활성화하면 대시보드에 '상담중' 뱃지가 달려있는 카드만 노출함

☑️ checkbox filter UI 구현

☑️ hover 이벤트 발생 시 checkbox filter 스타일링 적용

☑️ checkbox filter 클릭 시 옵션 리스트가 화면에 노출됨

☑️ 옵션 선택 시 옵션 합계가 노출됨

☑️ 옵션을 선택했을 경우 셀렉트박스 스타일 적용(선택된 옵션이 없을 경우 디폴트 스타일 적용)

### (민지연)

☑️ json-server&dev-server 세팅(concurrently)하여 가상의 데이터 서버 구성

☑️ json-server로 mock rest-api server 연동

☑️ mock rest-api로 data 호출 및 type 지정

☑️ theme, global style 지정

☑️ 대시보드 메인보드 UI 스타일링

☑️ 대시보드 카드 UI 스타일링

☑️ 대시보드 Modal UI 및 기능 구현

☑️ 대시보드 메인 반응형 UI 스타일링

☑️ heroku를 이용한 json-server 배포

### (양다혜)

☑️ header UI 스타일링

☑️ Toggle UI 스타일링

☑️ Toggle 컴포넌트 생성 및 기능 추가

☑️ filtering reset 버튼 UI 스타일링

☑️ theme style 지정

☑️ assets의 image export 설정

<br/>

## 기능 구현 영상

☑️ 셀렉트박스 카테고리별 액션

![셀렉트박스 카테고리별 액션](https://user-images.githubusercontent.com/84560867/153098729-6d8813c6-80c6-4b5c-8c92-2f110f74da35.gif)

☑️ 필터링 리셋

![필터링 리셋](https://user-images.githubusercontent.com/84560867/153098741-fa813733-bcae-4d21-b01a-baf33db397a8.gif)

☑️ 상담중 토글

![상담중 토글](https://user-images.githubusercontent.com/84560867/153098751-fe488eee-27e8-4b51-81df-d6e1b6ceb789.gif)

☑️ 모바일 버전 모달

![모바일 버전 모달](https://user-images.githubusercontent.com/53133662/153101561-95d3fc9c-9b9a-4907-8f04-3d7273f4c820.gif)

## 과제 후기

### 🙋‍♀️ 박서윤

<br/>

### 🙋‍♀️ 양다혜

typescript를 처음 경험해본 프로젝트였다. 간단한 프로젝트였기 때문에 UI/기능 두 파트로 개발을 진행하였다. typescript에 익숙하지 않았지만, 팀원들의 코드를 보며 typescript의 기본, 구조와 사용 방법 등을 익힐 수 있었다. 기능 자체가 간단한 프로젝트 였지만 그 안에서 태스크를 분담하고 협업하는 방법을 배울 수 있었다.

<br/>

### 🙋‍♀️ 박서영

이번 프로젝트를 통해 json server 라이브러리를 이용해 정말 간단하게 REST API Mockserver를 구축하고 유의미한 데이터핸들링 시뮬레이션 할 수 있다는 것을 배우게 되었다. 그리고 사용자 이벤트(셀렉트 박스 클릭, 재료 및 메서드 선택 등)이 발생할 때마다 스타일링을 적용해야하는 미션을 수행하면서 props를 통한 조건부 스타일링을 깊게 이해하게 되었다.

<br/>

### 🙋‍♀️ 민지연

[✍🏻 프로젝트 회고 보러가기!](https://velog.io/@ichbinmin2/원티드-프리온보딩-프론트엔드-과정-3차-과제-견적-요청-페이지)

<br/>

## 설치 및 시작하는 법

**프로젝트 클론**

```
$ git clone https://github.com/On-Basic/Ateam-Ventures.git
```

**패키지 설치**

```
$ yarn
```

**서버 실행**

```
$ yarn dev // json-server 실행
$ yarn start:dev // localhost 실행
```
