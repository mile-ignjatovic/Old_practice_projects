<template>
    <div class="container">
        <div class="row">
            <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
                <h1>Animations</h1>
                <hr />
                <select v-model="alertAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <hr />
                <button @click="show = !show" class="btn btn-primary">
                    Show Alert
                </button>
                <br />
                <transition
                    :name="alertAnimation"
                    :type="
                        alertAnimation == 'slide' ? 'animation' : 'transition'
                    "
                >
                    <div v-if="show" class="alert alert-info">Info alert</div>
                </transition>
                <transition name="slide" type="animation">
                    <div v-if="show" class="alert alert-info">Info alert</div>
                </transition>
                <transition
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                >
                    <div v-if="show" class="alert alert-info">Info alert</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            alertAnimation: 'fade'
        }
    },

}
</script>

<style>
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 1s;
}
.fade-leave {
    /* opacity: 1; */
}
.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}

.slide-enter {
    opacity: 0;
}
.slide-enter-active {
    transition: opacity 0.5s;
    animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
    transition: opacity 3s;
    opacity: 0;
    animation: slide-out 1s ease-in forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}
</style>
