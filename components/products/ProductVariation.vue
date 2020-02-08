<template>
    <div class="field" v-if="type == showingproduct">
        <label class="label">
            {{ type }} sizes
        </label>


        <div class="d-flex">
            <div class="checkbox-alphanumeric" v-for="variation in variations" :key="variation.id" @change="changed($event, type)">
                <input :id="'size-'+variation.id" name="size" type="radio" :value="variation.id" :disabled="!variation.in_stock">
                <el-tooltip :disabled="variation.in_stock" content="Out of stock" placement="top">
                    <label :class="[variation.in_stock == false ? 'bg-light text-white' : '']" :for="'size-'+variation.id">{{ variation.name }}</label>
                </el-tooltip>
            </div>
        </div>



    
    <!-- <div class="control">
      <div class="select is-fullwidth">
        <select class="form-control form-control-sm" :value="selectedVariationId" @change="changed($event, type)">
          <option value="">Please choose zise</option>
          <option
            v-for="variation in variations"
            :key="variation.id"
            :value="variation.id"
            :disabled="!variation.in_stock"
          >
            {{ variation.name }}

            <template v-if="variation.price_varies">
              ({{ variation.price }})
            </template>

            <template v-if="!variation.in_stock">
              (out of stock)
            </template>
          </option>
        </select>
      </div>
    </div> -->

    </div>
</template>

<script>
  export default {
    props: {
      type: {
        required: true,
        type: String
      },
      showingproduct: {
        required: false,
        type: String
      },
      variations: {
        required: true,
        type: Array
      },
      value: {
        required: false,
        default: ''
      }
    },

    computed: {
      selectedVariationId () {
        if (!this.findVariation(this.value.id)) {
          return ''
        }
        return this.value.id
      }
    },

    methods: {
      changed (event, type) {
        this.$emit('input', this.findVariation(event.target.value))
      },

      findVariation (id) {
        let variation = this.variations.find(v => v.id == id)

        if (typeof variation === 'undefined') {
          return null
        }

        return variation
      }
    }
  }
</script>
