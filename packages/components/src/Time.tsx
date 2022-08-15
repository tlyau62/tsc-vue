import Vue from "vue";
import { getTime } from "@tsc-vue/core";

export const Time = Vue.extend({
  render() {
    return <div>{getTime()}</div>;
  },
});
