<template>
  <div>Name</div>
  <div>Pass</div>
</template>

<script>
import axiosClient from "@/axios/axios";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("mounted");
    this.loginRequest();
  },
  created() {
    console.log(import.meta.env.VITE_APP_API_BASE_URL);
  },
  methods: {
    loginRequest() {
      axiosClient
        .post("login", {
          email: "abir@gmail.com",
          password: "12345678",
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
