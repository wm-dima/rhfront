<template>
    <div class="md-layout" :label="label"
              :required="required"
              :name="name"
              v-bind:value="svalue"
              >
        <el-upload :action="'/custapi/rest/file/upload'"
                    ref="fileUploader"
                    :file-list="fileList"
                    :show-file-list="true"
                    :multiple="true"
                    :thumbnail-mode="false"
                    :headers="headerInfo"
                    :on-success="successUpload"
                    :on-remove="removeFile"
                    :on-error="uploadError"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.dwg"
                    :auto-upload="true">
              <md-button class="md-success md-just-icon md-round"><md-icon >attach_file</md-icon></md-button>
        </el-upload>
    </div>
</template>
<script>
  import { Upload, Button } from 'element-ui'
  import { getAccessToken } from '@/utils/auth-fn'
  export default {
    props: [ 'label', 'value', 'name', 'placeholder', 'required', 'error' ],
    components: {
      [Upload.name]: Upload,
      [Button.name]: Button
    },
    data () {
      return {
        fileList: [],
        svalue: this.value,
        headerInfo: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }
    },
    methods: {
      clearFiles () {
        this.fileList = []
        this.svalue = ''
      },
      uploadError () {
        console.log('File Upload error')
        alert('Ошибка загрузки файла')
      },
      successUpload (response, file, fileList) {
        console.log('upload success')
        console.log(response)
        if (this.svalue) {
          this.svalue = this.svalue + ','
        }
        this.svalue = this.svalue + response.id
      },
      removeFile (file) {
        let s = '' + file.response.id
        let n = this.svalue.indexOf(s)
        if (n >= 0) {
          let b = this.svalue.substring(0, n - 1)
          let r = this.svalue.substring(n + s.length + 1, this.svalue.length)
          if (b.length > 0 && r.length > 0) {
            this.svalue = b + ',' + r
          } else {
            this.svalue = b + r
          }
          console.log('s="' + s + '", b="' + b + '", r="' + r + '", n=' + n + ', result: ' + this.svalue)
        }
      }
    },
    watch: {
      svalue () {
        console.log('watch.svalue' + this.svalue)
        this.$emit('input', this.svalue)
      }
    }
  }
</script>
<style lang="scss">
</style>
