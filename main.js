import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import SemesterTable from './components/SemesterTable.vue'
import ContactForm from './components/ContactForm.vue'

const app = createApp(App);

console.log(SemesterTable)
app.component('semester-table', SemesterTable);
app.component('contact-form', ContactForm);
app.use(router).mount('#app')