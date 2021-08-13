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

