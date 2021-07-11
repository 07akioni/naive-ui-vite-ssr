<template>
  <n-space vertical style="padding: 16px; max-width: 360px">
    <n-button>Naive UI SSR</n-button>
    <n-cascader :options="cascaderOptions" />
    <n-select :options="selectOptions" />
    <n-input-number />
  </n-space>
</template>

<script lang="ts">
import { h, defineComponent } from 'vue'
import {
  NButton,
  NSpace,
  NInputNumber,
  NCascader,
  NSelect
} from 'naive-ui'

/**
 * A Vue app with naive ui
 */
export default defineComponent({
  components: {
    NButton,
    NSpace,
    NInputNumber,
    NCascader,
    NSelect
  },
  setup () {
    return {
      cascaderOptions: [
        {
          label: '0',
          value: '0',
          children: [
            {
              label: '0-0',
              value: '0-0',
            },
            {
              label: '0-1',
              value: '0-1',
            }
          ]
        }
      ],
      selectOptions: [
      {
          label: '0',
          value: '0',
        },
        {
          label: '1',
          value: '1',
        }
      ]
    }
  }
})
</script>