<template>
  <div @click="setBox" class="box">
    <XMark v-if="X"/>
    <OMark v-if="O"/>
  </div>
</template>

<script>
import XMark from './X'
import OMark from './O'
export default {
  name: 'BoxDiv',
  props: ['currentPlayer', 'modelValue', 'validClick', 'clear'],
  computed: {
    mark: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  data () {
    return {
      X: false,
      O: false
    }
  },
  components: {
    XMark,
    OMark
  },
  methods: {
    setBox () {
      if (this.X === false && this.O === false) {
        if (this.currentPlayer === 'x') {
          this.X = true
          this.mark = 'x'
        } else {
          this.O = true
          this.mark = 'o'
        }
        this.validClick()
      }
    }
  }
}
</script>
