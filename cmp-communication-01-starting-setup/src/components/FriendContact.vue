<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      // 지원되는 프로퍼티 값 : String, Number, Boolean, Array, Object, Date, Function, Symbol
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === '1' || value === '0';
      // },
    },
  },

  emits: ['toggle-favorite', 'delete'],
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) return true;
  //     else return false;
  //   },
  // },

  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
      // friend: {
      //   id: 'manuel',
      //   name: 'Manuel Lorenz',
      //   phone: '0123 45678 90',
      //   email: 'manuel@localhost.com',
      // },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;

      // Custom Event - 부모 컴포넌트의 데이터를 수정(자식 -> 부모)
      // $emit()
      this.$emit('toggle-favorite', this.id);
    },
  },
};
</script>
