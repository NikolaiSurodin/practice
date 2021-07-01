<template>
  <div>
    <div class="popup_wrapper">
      <div class='popup'>
        <div class="popup__content">
          <div>
            <slot></slot>
            <p style="align-items: center">Ошибка, неверное количество игроков</p>
          </div>
        </div>
        <div class="popup__footer">
          <b-button  @click="closePopup"
          > OK
          </b-button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageError",
  data() {
    return {}
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
}
</script>

<style scoped>
.popup_wrapper {
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.popup {
  padding: 150px;
  position: center;
  top: 500px;
  width: 700px;
  background: #ffffff;
  z-index: 50;
}
.popup__footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>