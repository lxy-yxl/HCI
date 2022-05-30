<template>
  <div>
    <model-obj src="../../static/model/tree.obj"></model-obj>
  </div>
</template>
<script>
import {
  ModelObj,
  ModelThree,
  ModelFbx,
  ModelCollada,
  ModelStl,
  ModelPly,
  ModelGltf
} from "vue-3d-model";
export default {
  components: {
    ModelObj,
    ModelThree,
    ModelFbx,
    ModelCollada,
    ModelStl,
    ModelPly,
    ModelGltf
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
  }
};
</script>

<style scoped>
</style>

<!-- <template>
<div class="demo-block-preview">
    <model-fbx
    :backgroundAlpha="0" 
    @on-load="onLoad"
        src="@/assets/models/023.fbx" ></model-fbx>
</div>
</template>

<script>
    import { ModelFbx } from 'vue-3d-model'

    export default {
        components: {
            ModelFbx
        },
          methods: {
    onLoad() {
      this.loading = false;
    },

  },
    }
</script>

<style scoped>

.demo-block-preview{
background:pink;
}
</style> -->


<!-- template>
    <model-obj src="../assets/model/023.fbx"></model-obj>
</template>

<script>
    import { modelFbx } from 'vue-3d-model'

    export default {
        components: {
            ModelFbx
        }
    }
</script> -->