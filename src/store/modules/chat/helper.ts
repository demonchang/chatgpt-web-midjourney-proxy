import { ss } from '@/utils/storage'
import { gptConfigStore, homeStore,useChatStore } from '@/store';
import { useRoute } from 'vue-router' 

const route = useRoute() 
const chatStore = useChatStore()
const { uuid } = route.params as { uuid: string }
chatStore.active = uuid;

const LOCAL_NAME = 'chatStorage'

export function defaultState(): Chat.ChatState {
  const uuid = chatStore.active
  return {
    active: uuid,
    usingContext: true,
    history: [{ uuid, title: 'New Chat', isEdit: false }],
    chat: [{ uuid, data: [] }],
  }
}

export function getLocalState(): Chat.ChatState {
  const localState = ss.get(LOCAL_NAME)
  return { ...defaultState(), ...localState }
}

export function setLocalState(state: Chat.ChatState) {
  ss.set(LOCAL_NAME, state)
}
