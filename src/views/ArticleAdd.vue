<template>
  <div>
    <Header style="margin-bottom:20px;"></Header>
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form
          :form="form"
          @submit="handleSubmit"
      >
        <!--      email,url,platform,platformHash,comment-->
        <a-form-item
            :label='titleName'
            :labelCol="{span: 7}"
            :wrapperCol="{span: 10}"
        >
          <a-input :placeholder="titleName" v-decorator="[
          'title',
          { rules: [{ required: true, message: 'title' }] },
        ]"
          />
        </a-form-item>
        <a-form-item
            :label='contentName'
            :labelCol="{span: 7}"
            :wrapperCol="{span: 10}"
        >
          <a-input :placeholder="contentName" v-decorator="[
          'content',
          { rules: [{ required: true, message: 'content' }] },
        ]"
          />
        </a-form-item>

        <a-form-item style="margin-top: 24px" :wrapperCol="{span: 10, offset: 7}">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>

</template>

<script>
import Header from "@/base/Header";
import {addArticle} from "@/api/ArticleService";

export default {
  name: 'ArticleAdd',
  components:{
    Header
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'ArticleEditForm'});
  },
  data () {
    return {
      title:"",
      content:"",
      version:"",

      titleName:"标题",
      contentName:"内容",
      versionName:"版本",
    }
  },
  mounted() {

  },
  methods:{
    async handleSubmit(e) {
      e.preventDefault();

      this.form.validateFields(async (err, values) => {
        if (!err) {
          let {data}=await addArticle(values.title,values.content);
          console.log(data);
          if(data!=null){
            this.$message.info(data.data.message);
          }
        }
      });

    },
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
