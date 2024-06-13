<template>
  <main>
    <h1 class="text-center text-lg font-semibold mb-3">Zoho Widget - Vue</h1>
    
    <!-- Card -->
    <div class="grid grid-cols-1 mb-3 bg-white rounded-md border border-base-normal shadow-sm px-8 py-5" v-if="deal != null">
      <div class="mb-6">
        <h2 class="text-md font-semibold">Deal Info</h2>
      </div>
      <div class="grid grid-cols-12 gap-6 items-center mb-4">
        <div class="col-span-3 text-right">
          <label class="text-sm text-gray-normal">Deal Name</label>
        </div>
        <div class="col-span-5">
          <input class="placeholder placeholder:text-slate-400 block border border-base-normal rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full bg-slate-50 text-slate-600 cursor-not-allowed" placeholder="deal Name" type="text" name="deal_name" :value="deal.Deal_Name"/>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-6 items-center mb-4">
        <div class="col-span-3 text-right">
          <label class="text-sm text-gray-normal">Deal Amount</label>
        </div>
        <div class="col-span-5">
          <input class="placeholder placeholder:text-slate-400 block border border-base-normal rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full" placeholder="deal Email" type="email" name="deal_email" :value="deal.Precio_Neto"/>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const deal = ref(null);
    
    onMounted(() => {

      window.ZOHO.embeddedApp.on("PageLoad", function (data) {

        if (data && data.Entity) {
          window.ZOHO.CRM.API.getRecord({ Entity: data.Entity, RecordID: data.EntityId })
            .then(function (response) {
              console.log(response.data[0]);
              if (deal.value == null) {
                deal.value = response.data.shift();
                console.log(deal.value)
              }
            });
        }
        

        ZOHO.CRM.UI.Resize({height:"950",width:"1500"}).then(function(data){
          console.log('Widget redimensionado');
        });

      });

      window.ZOHO.embeddedApp.init();
    })
    
    return {
      deal
    }
  }
}
</script>
