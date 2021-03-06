<template>
  <div v-bind:class='[`about about-${themeState}`]'>
    <div class="about__container">
      <h1>Why ESFiddle?</h1>
      <p>
        ES6 - or ECMAScript 2015 - is the latest JavaScript specification. It
        includes exciting features like arrow functions and a new class syntax.
        With ESFiddle, trying out these awesome features in the browser couldn't
        be easier. Our vision is to help programmers transition to ES6 by
        providing a reliable testing environment, along with a rich library of
        example code.
      </p>
      <p class="tip">
        Learn more about
        <a href="http://es6-features.org/#ExpressionBodies" target="_blank">ES6</a
        >, or read this
        <a href="https://webapplog.com/es6/" target="_blank">article</a> if you're
        not sure where to start.
      </p>
      <h1>Contributing</h1>
      <p>
        Let's work together towards a better ES6 environment on the web. Whether
        you're a beginner or a programming guru, we welcome your help. Follow the
        steps
        <a
          href="https://github.com/esfiddle/esfiddle/blob/develop/docs/CONTRIBUTE.md"
          target="_blank"
          >here</a
        >
        to get setup.
      </p>
      <p class="tip">
        View the project on
        <a href="https://github.com/esfiddle/esfiddle" target="_blank">GitHub</a>.
      </p>
      <h1>Found a bug?</h1>
      <p>
        We're always working on improving ESFiddle. Please read the
        <a
          href="https://github.com/esfiddle/esfiddle/blob/develop/docs/REPORTBUG.md"
          target="_blank"
          >How to Report a Bug</a
        >
        article and follow the guidelines.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  computed: {
    themeState() {
      return this.$store.state.theme;
    },
  },
};
</script>

<style scoped>
.about__container {
  width: 70%;
  padding: 60px 0;
  margin: auto;
  max-width: 800px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  min-height: 100vh;

  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1 0 auto;
          flex: 1 0 auto;
}

.about-dark {
  background: var(--dark);
  color: #fff;
}

.about-dark a {
  color: #fff;
}
</style>
