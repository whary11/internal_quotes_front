import { createApp } from "vue";
import { createPinia } from "pinia";
// import { quillEditor } from 'vue3-quill'
import { Tooltip } from "bootstrap";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "@/router/clean";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { initKtIcon } from "@/core/plugins/keenthemes";
import { translate } from "@/core/mixins/translate";
import { formatCurrency } from "@/core/mixins/formatCurrency";
import { permission } from "@/core/directives/permission";

// Import the method.
import Loading from 'vue3-loading-overlay';
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import "@/core/plugins/prismjs";

const app = createApp(App);

app.use(Loading,{
  color:"red"
})
app.use(createPinia());
app.use(router);
app.use(ElementPlus);

// app.use(quillEditor)


// ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initKtIcon(app);
initVeeValidate();

app.use(i18n);

app.mixin(translate)
app.mixin(formatCurrency)
app.directive("permission",permission)

app.directive("tooltip", (el) => {
  new Tooltip(el);
});

app.mount("#app");
