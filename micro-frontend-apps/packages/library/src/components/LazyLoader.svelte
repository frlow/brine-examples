<script lang='ts'>
  export let mode: 'rendered' | 'hover' = 'rendered'
  export let name: string
  const lazyLoad = async (changedMode: any) => {
    if (changedMode === mode && name) import(name)
  }
  $:{
    if (name) lazyLoad('rendered')
  }
</script>

<div on:mouseover={()=>lazyLoad('hover')} class='lazy'>
  <slot></slot>
</div>

<style>
    .lazy {
        width: 100%;
    }
</style>