import Vue from "vue";
import { getTime } from "@tsc-vue/core";

export const TimeButton = Vue.extend({
  render(h) {
    return (
      <button onClick={this.printTime}>Click to print current time</button>
    );
  },
  methods: {
    printTime() {
      debugger;
      alert(getTime());
    },
  },
});
