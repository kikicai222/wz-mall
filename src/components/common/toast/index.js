import Toast from "./Toast";
import {createApp} from "vue";
// import {app} from '@/main'

const obj = {
  install(app){
    app.component('toast',Toast)

  }
}

export default obj
