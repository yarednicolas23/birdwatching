<template lang="html">
  <div class="row">
    <div class="col s12 m6 l3">
      <p class="digit">{{ days | two_digits }}</p>
      <p class="text">Días</p>
    </div>
    <div class="col s12 m6 l3">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">Horas</p>
    </div>
    <div class="col s12 m6 l3">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">Minutos</p>
    </div>
    <div class="col s12 m6 l3">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">Segundos</p>
    </div>
  </div>
</template>

<script>
export default {
    /* ready function will be here */
    props: {
      date: {
        type: String
      }
    },
    mounted() {
      window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
      },1000);
    },
    data() {
      return {
        now: Math.trunc((new Date()).getTime() / 1000)
      }
    },
    /* Computed properties will be here */
    ready() {
      window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
      },1000);
    },
    computed: {
      dateInMilliseconds() {
        return Math.trunc(Date.parse(this.date) / 1000)
      },
      seconds() {
          return (this.dateInMilliseconds - this.now) % 60;
      },

      minutes() {
          return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
      },

      hours() {
          return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
      },

      days() {
          return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
      }
    }
}

</script>

<style lang="css">
.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
}

.text {
    font-size: 20px;
    font-weight: 40;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    font-size: 80px;
    font-weight: 100;
    text-align: center;
}
</style>
