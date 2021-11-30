<template>
  <div class="container m-auto">
    <div class="w-full flex justify-between items-center border-b-2 pb-4">
      <span>Mosse: {{ totalClicks }}</span>
      <div class="flex items-center">
        Record: {{ record }} Mosse
        <button
          v-on:click="startGame()"
          class="ml-8 shadow bg-green-400 px-8 py-4"
        >
          Nuova partita
        </button>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-8 mt-8">
      <div
        v-for="(card, index) in grid"
        :key="index"
        class="h-24 w-full bg-gray-100 cursor-pointer"
        v-bind:class="{
          ['bg-' + card + '-500']:
            visibleCards.includes(index) || selectedCards.includes(index),
        }"
        v-on:click="selectCard(index)"
      ></div>
    </div>

    <div
      v-if="visibleCards.length === grid.length && grid.length !== 0"
      class="
        mt-8
        text-center
        bg-black
        text-white
        font-bold
        text-4xl
        p-4
        rounded-md
        shadow-md
      "
    >
      Gioco completato in {{ totalClicks }} Mosse
    </div>
  </div>
</template>

<script>
import '~/assets/css/home.scss';

export default {
  setup() {
    useMeta({
      title: 'Home',
    });
  },
  data() {
    return {
      cards: ['blue', 'green', 'red', 'yellow', 'purple', 'pink'],
      grid: [],
      visibleCards: [],
      selectedCards: [],
      timer: null,
      totalClicks: 0,
      record: 0,
    };
  },
  mounted() {
    this.startGame();
  },
  methods: {
    generateGrid() {
      const grid = [...this.cards, ...this.cards];
      this.grid = grid.sort((a, b) => 0.5 - Math.random());
    },
    selectCard(index) {
      if (
        this.visibleCards.includes(index) ||
        this.selectedCards.includes(index)
      ) {
        return;
      }

      if (this.selectedCards.length == 2) {
        clearTimeout(this.timer);
        this.selectedCards = [];
      }

      this.selectedCards.push(index);
      this.totalClicks++;

      if (this.selectedCards.length == 2) {
        if (
          this.grid[this.selectedCards[0]] === this.grid[this.selectedCards[1]]
        ) {
          this.visibleCards.push(...this.selectedCards);
        }

        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.selectedCards = [];
        }, 5000);
      }

      if (this.visibleCards.length === this.grid.length) {
        this.record =
          this.totalClicks > this.record && this.record !== 0
            ? this.record
            : this.totalClicks;
        setTimeout(() => {
          this.startGame();
        }, 2000);
      }
    },
    startGame() {
      clearTimeout(this.timer);
      this.totalClicks = 0;
      this.grid = [];
      this.visibleCards = [];
      this.selectedCards = [];
      this.generateGrid();
    },
  },
};
</script>
