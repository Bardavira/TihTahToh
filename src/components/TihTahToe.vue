<template>
<body>
    <h1>TIH TAH TOH</h1>
    <div id="container" class="">
        <BoxDiv
         v-for="(box, i) in boxes"
         :key="i"
         :currentPlayer="currentPlayer"
         v-model="box.value"
         :id="box.id"
         :validClick="validClick"
        />
    </div>
    <div id="message" :class="hide">
        <p>{{ message }}</p>
    </div>
</body>
</template>

<script>
import BoxDiv from './Box'

export default {
  name: 'TihTahToh',
  components: {
    BoxDiv
  },
  data () {
    return {
      currentPlayer: 'x',
      currentPlay: 0,
      boxes: [
        {
          id: 'block-1',
          value: ''
        },
        {
          id: 'block-2',
          value: ''
        },
        {
          id: 'block-3',
          value: ''
        },
        {
          id: 'block-4',
          value: ''
        },
        {
          id: 'block-5',
          value: ''
        },
        {
          id: 'block-6',
          value: ''
        },
        {
          id: 'block-7',
          value: ''
        },
        {
          id: 'block-8',
          value: ''
        },
        {
          id: 'block-9',
          value: ''
        }
      ],
      message: '',
      hide: 'hide'
    }
  },
  methods: {
    validClick () {
      this.currentPlayer === 'o' ? this.currentPlayer = 'x' : this.currentPlayer = 'o'
      this.currentPlay++
      this.computeResults()
    },
    computeResults () {
      if (this.currentPlay >= 5) {
        if (this.boxes[0].value === this.boxes[1].value && this.boxes[0].value === this.boxes[2].value && this.boxes[0].value !== '') {
          this.declareWinner(this.currentPlayer)
        }
        if (this.boxes[3].value === this.boxes[4].value && this.boxes[3].value === this.boxes[5].value && this.boxes[3].value !== '') {
          this.declareWinner(this.currentPlayer)
        }
        if (this.boxes[6].value === this.boxes[7].value && this.boxes[6].value === this.boxes[8].value && this.boxes[6].value !== '') {
          this.declareWinner(this.currentPlayer)
        }
        if (this.boxes[0].value === this.boxes[3].value && this.boxes[0].value === this.boxes[6].value && this.boxes[0].value !== '') {
          this.declareWinner(this.currentPlayer)
        }
        if (this.boxes[1].value === this.boxes[4].value && this.boxes[1].value === this.boxes[7].value && this.boxes[1].value !== '') {
          this.declareWinner(this.currentPlayer)
        }
        if (this.boxes[2].value === this.boxes[5].value && this.boxes[2].value === this.boxes[8].value && this.boxes[2].value !== '') {
          this.declareWinner(this.currentPlayer)
        }
        if (this.boxes[0].value === this.boxes[4].value && this.boxes[0].value === this.boxes[8].value && this.boxes[0].value !== '') {
          this.declareWinner(this.currentPlayer)
        }
        if (this.boxes[2].value === this.boxes[4].value && this.boxes[2].value === this.boxes[6].value && this.boxes[2].value !== '') {
          this.declareWinner(this.currentPlayer)
        }
        if (this.currentPlay === 9) {
          this.declareWinner('')
        }
      }
    },
    declareWinner (vencedor) {
      if (vencedor === 'o') {
        this.message = 'X ganhou'
      }
      if (vencedor === 'x') {
        this.message = 'O ganhou'
      }
      if (vencedor === '') {
        this.message = 'Deu Velha'
      }
      this.hide = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    text-align: center;
    font-family: Helvetica, sans-serif;
}

h1 {
    font-size: 42px;
}

#container {
    display: flex;
    width: 300px;
    margin: 0;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    margin-left: auto;
    margin-right: auto;
}

.box {
    height: 100px;
    border: 5px solid;
    box-sizing: border-box;
    flex: 1 1 33%;
}

#block-1, #block-2, #block-3 {
    border-top: none ;
}
#block-1, #block-4, #block-7 {
    border-left: none ;
}
#block-7, #block-8, #block-9 {
    border-bottom: none ;
}
#block-3, #block-6, #block-9 {
    border-right: none ;
}

.hide {
    display: none !important;
}

#scoreboard-container {
    font-weight: bold;
    margin-top: 30px;
    font-size: 25px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
}

.score-box{
    margin: 0 20px;
}

#x-scoreboard {
    margin-right: 3px;
}

#o-scoreboard {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 50%;
    margin-right: 3px;
}

#message p {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
    top: 150px;
    width: 500px;
    font-size: 50px;
    background-color: black;
    color: white;
    padding: 20px;
}
</style>
