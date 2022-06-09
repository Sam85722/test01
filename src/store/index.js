import { createStore } from 'vuex'
import test from '@/store/modules/test.js'


//
import advertise from "@/store/modules/advertise.js"
//

export default createStore({
    

    modules:{
      test,

      //
      advertise,
      //
    }

    
  })