# 나의 스펙 정리 사이트

## 2021-08-12
### <활동>
- 사이트에 필요한 view들을 생성
- VueRouter 통해 MyProfile 부분만 view 교체
- Vuex를 이용하여 내 정보 변경 가능
- 수료증 부분에서 + 버튼 누르면 수료증을 추가할 수 있는 Modal 창 나오도록 함

### <막혔던 점>
- router-view로 나타내는 MyProfile.vue와 MyProfileModification.vue 사이에 데이터를 주고 받으려고 할 때 잘 되지 않았다. router-view에서 MyProfileModification.vue에서 emit으로 데이터를 실어서 넘겼는데 App.vue에서 v-on으로 받아지지가 않았다.
> 해결: Vuex의 store를 이용하여 해결하였다. 회원 정보 수정 페이지에서 제출을 누르면 commit으로 store의 mutation에 접근하여 입력한 값들을 store에 있는 user 객체에 저장하였다. 그리고 MyProfile.vue에 store의 state값을 뿌려주었더니 해결되었다.
___

## 2021-08-13
### <활동>
- 내 정보 입력 값을 localstorage에 저장하고 값을 가져오도록 리팩토링 함 (새로고침 해도 값 유지)
- 수료증 추가하는 기능 완료 (localstorage에 수료증들을 배열로 저장하여 화면에 뿌려줌)


### <막혔던 점>
- 수료증을 localstorage에 객체 형태의 배열로 잘 저장되지 않았다.
- MyCertificate.vue에서 commit으로 수료증을 추가하는 함수를 넘겼을 때 문제가 발생하였다. 모달 창에서 값을 변경하면 화면에 있는 값이 같이 변경되는 동시에 변경된 값들로 배열의 값들이 전부 바뀌어버렸다.

> 해결: 처음에 store의 mutations에서 수료증 받는 함수의 파라미터인 payload를 바로 state의 수료증 배열에 추가해서 문제가 생긴 것이었다. 그래서 JSON.stringfy(payload)로 JSON을 문자열로 변환하고 이를 JSON.parse(JSON.stringfy(payload))를 써서 다시 객체로 변환하여 배열에 추가해 주었다. payload는 Object인데 이 방법을 쓰면 객체로 변환하여 저장된다.


![비교](https://user-images.githubusercontent.com/52418706/129346415-4413898f-6150-474a-989d-c4287405826f.JPG)  
<**위(payload) vs 아래(JSON.parse(JSON.stringify(payload)))**>


![에러코드](https://user-images.githubusercontent.com/52418706/129344854-b9b32d19-be1c-4663-a6f3-ac716c4581eb.JPG)  
**<변경 이전 코드>**


![변경이후](https://user-images.githubusercontent.com/52418706/129345817-0fef881d-bf8c-4dc7-992a-a77fd0cd5197.JPG)  
**<변경 이후 코드>**
___

## 2021-08-15
### <활동>
- 수상 내역 추가하는 기능 완료
- 수료증 부분에서 리스트 뿌릴 때 발생한 오류 해결
- 수료증 추가할 때 리스트가 천천히 추가되도록 애니메이션 추가
- 수료증 추가 버튼 흔들기 애니메이션 적용


### <막혔던 점>
- 애니메이션 적용을 해본 적이 없어서 버튼 흔들기 부분에서 헤맸다.
- 모달 창이 나왔을 때 바깥의 스크롤을 막고 싶었지만 계속 스크롤이 적용이 되었다.

> 해결: 구글링을 통해 .fade-enter-active와 .fade-leave-active 등으로 리스트 출력 애니메이션을, @-webkit-keyframes shake을 이용하여 버튼 흔들기 애니메이션 적용을 성공하였다. 하지만 모달 창일 때 스크롤 방지는 overflow: hidden을 적용하면 되는 것 같은데 아직 해결되지 않았다.
___

## 2021-08-16
### <활동>
- 수료증 입력 부분에서 이름과 발행기관, 날짜에 공백이 있으면 안되도록 유효성 검사
- 수료증의 삭제 기능 추가


### <막혔던 점>
- 수료증을 삭제할 때 localstorage에서 객체들이 있는 배열에서 선택한 객체를 삭제하는 것에서 어려움을 겪었다.

> 해결: 먼저 storage에 있는 수료증 배열인 certifications에서 splice로 선택한 객체를 없앴다. 그리고 localstorage에서 key가 certifications인 것을 찾아 전부 지운 뒤 다시 certifications를 localstorage에 저장해주었다.

![removeOneCertification](https://user-images.githubusercontent.com/52418706/129534759-448dfedf-d3ab-45b5-8541-93b35e945dd6.JPG)

___

## 2021-08-17~18
### <활동>
- bootstrap-vue 적용
- 전체적인 디자인 구조 변경
- 개인 정보 수정 부분 bootstrap 적용 및 daum 주소 api 적용하여 주소 검색 기능 구현


### <막혔던 점>
- 처음으로 bootstrap-vue를 적용하였기 때문에 구조를 이해하고 적용하기 힘들었다.

> 해결: bootstrap-vue 공식 자료를 찾아보면서 하나씩 적용해 보았다.

[참고한 daum 우편번호 API](https://postcode.map.daum.net/guide)  
[참고한 Bootstrap-vue](https://bootstrap-vue.org/)

___

## 2021-08-19
### <활동>
- 수상내역 부분 및 수료증/자격증 부분 bootstrap-vue 적용하여 추가, 삭제 기능 완료
- 디자인 정리

### <막혔던 점>
- 수정하기 기능을 구현할 때 bootstrap-vue에서 선택한 객체의 값은 받아왔지만 index값을 받아오는 것이 어렵다. 수정하기 기능의 구현에서 시간을 많이 투자했지만 하지 못했다.

> 해결: 해결하진 못했지만 store에 있는 배열에 index를 추가해주고 이를 이용하여 객체를 호출한 뒤, 값을 수정한 후에 localStorage의 값을 index를 이용하여 변경하는 방법을 생각해보았다. 

___

## 2021-08-22
### <활동>
- 내 정보 수정 페이지에서 이름, 성별, 전화번호, 생년월일, 이메일에 대해서 유효성 검사를 실시하였다.
- 수상 내역 페이지에서 일정 개수가 넘어가면 페이지를 넘기는 방식을 추가하였다.

### <막혔던 점>
- 유효성 검사를 할 때 어떤 방식으로 할 지 고민되었다.

> 해결: 이메일은 정규식을 이용하여 입력값에 따라 정규식을 통과하는지 테스트하여 true와 false를 return해주었다. 이를 computed에 emailState라는 변수에 설정하여 상태를 계속 체크하였다. 다른 항목들의 유효성 검사도 비슷한 형식으로 진행하였다.