<template>
    <div class="row row-grid align-items-center">
        <div class="col-lg-8">
            <div class="media align-items-center">
                <span class="avatar avatar-lg rounded-circle mr-3">
                    <img v-if="user.avatar != null" alt="Image placeholder" :src="user.imagelink+'users/'+user.avatar">
                    <img v-else alt="Image placeholder" src="/img/prv/team-1-800x800.jpg">
                </span>
                <div class="media-body">
                    <h5 class="text-white mb-0">{{ user.name }}</h5>
                    <div>
                        <form>
                            <input style="visibility: hidden; height: 0; position: absolute;" v-on:change="fileChange" :name="sendAs" type="file" ref="fileInput"/>
                            <label for="file-1">
                                <span class="text-white" v-if="uploading">Uploading the file, please wait.</span>
                                <span class="text-white" v-else>Change avatar</span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-auto flex-fill mt-4 mt-sm-0 text-sm-right d-none d-lg-block">
            <button @click="trigger" :disabled="uploading" class="btn btn-sm btn-white btn-circle btn-icon shadow">
                <span class="btn-inner--icon"><i class="far fa-fire"></i></span>
                <span class="btn-inner--text">Change photo</span>
            </button>
        </div>
    </div>
</template>

<script>
    // import upload from '../mixins/upload'
    // import Bus from '../bus'

    export default {
        props: [
            'user',
        ],
        data () {
            return {
                // errors: [],
                avatar: null,
                uploading: false,
            	sendAs: {
		            type: String,
		            default: 'file'
		        },
                // avatar: {
                //     id: null,
                //     path: this.currentAvatar
                // }
            }
        },
        // mixins: [
        //     upload
        // ],
        methods: {
            trigger () {
                this.$refs.fileInput.click()
            },
            fileChange (e) {
            	// this.errors = []
                this.upload(e).then((response) => {
                    // console.log(response)
                    // Bus.$emit(this.buss, response.data.data.path)
                }).catch((error) => {
                    // console.log(error)
                    // if (error.response.status === 422) {
                    //     this.errors = error.response.data
                    //     return
                    // }
                    // this.errors = 'Something went wrong. Try again.'
                })
            },
            async upload (e) {
                var vm = this;
                vm.uploading = true
                vm.sendAs = "image"
                await this.$axios.$post('auth/imageupload', this.packageUploads(e))
                .then(res => {
                    vm.uploading = false
                    vm.avatar = res.data
                    this.user.avatar = res.data
                    this.$emit('created', res.data)
                    return Promise.resolve(res)
                })
                .catch(error => {
                    vm.uploading = false
                    return Promise.reject(error)
                })
            },
            packageUploads (e) {
                let fileData = new FormData()
                fileData.append(this.sendAs, e.target.files[0])
                return fileData
            }
        }
    }
</script>
<style scoped>
    .newHidden {
        display: none !important;
    }
</style>