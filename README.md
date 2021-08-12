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