import Vue from 'vue';

import App from './App.vue';

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;
        let delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 3000;
        }
        setTimeout(() => {
            if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);
    }, // desava se kada je direktiva zakacena na element

    inserted(el, binding, vnode) {}, // kada se ubaci u parent nod
    update(el, binding, vnode, oldVnode) {}, // kad se element updejtuje ali ne i njegova deca
    componentUpdated(el, binding, vnode, oldVnode) {}, // kad je cela komponenta updejtovana
    unbind(el, binding, vnode) {} // kad se direktiva skine sa elementa
});

new Vue({
    el: '#app',
    render: h => h(App)
});
