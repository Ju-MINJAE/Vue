<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // inject(주입) : 하위 컴포넌트에서 제공된 props를 주입
  // 직계 부모보다 더 상위의 부모로부터도 데이터를 주입을 받을 수 있음
  inject: ['topics'],
};
</script>
