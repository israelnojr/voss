<template>
  <div>
    <TopChart />
    <Section />
    <MainRow />
  </div>
</template>

<script>
import Section from "./section";
import TopChart from "./topchart";
import MainRow from "./mainrow";

export default {
  components: {
    TopChart,
    Section,
    MainRow
  }
};
</script>

<style></style>
