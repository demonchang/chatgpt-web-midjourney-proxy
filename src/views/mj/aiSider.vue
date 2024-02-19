<script setup lang="ts">
import { computed,defineAsyncComponent ,ref} from "vue";
import { SvgIcon ,HoverButton} from '@/components/common'
import { useBasicLayout } from '@/hooks/useBasicLayout'
const { isMobile } = useBasicLayout()
import { NAvatar,NTooltip } from 'naive-ui'
import { homeStore, useUserStore,useChatStore } from '@/store'
const chatStore = useChatStore()
//import gallery from '@/views/gallery/index.vue'

const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))
const userStore = useUserStore()

const st= ref({'show':false,showImg:false, menu:[],active:'chat'})


const userInfo = computed(() => userStore.userInfo)
import { router } from '@/router'
import { mlog } from "@/api";

const goHome =computed(  () => {
  //router.push('/')
  return router.currentRoute.value.name
});
// const go=(n:string)=>{
//   if('chat'==n){
//         router.push('/chat/'+ chatStore.active??'1002')
//     }
//     if('draw'==n){
//         router.push('/draw/'+ chatStore.active??'1002')
//         st.value.show=true;
//     }
// }
//mlog('g', goHome() );
const chatId= computed(()=>chatStore.active??'1002' );
</script>
<template>

</template>

 