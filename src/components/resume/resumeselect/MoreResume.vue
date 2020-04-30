<template>
  <div id="resume1">
    <HeadResume></HeadResume>

    <ResumeBody1></ResumeBody1>
    <ResumeFoot></ResumeFoot>
  </div>

</template>

<script>
import HeadResume from '../HeadResume'
import ResumeFoot from '../ResumeFoot'
import ResumeBody1 from "./ResumeBody1";
export default {
  name: 'MoreResume',
  components: {HeadResume, ResumeFoot,ResumeBody1},
}
</script>
