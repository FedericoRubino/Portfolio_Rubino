<template>
    <div>
      <Landing/>
        <div class="modal fade bd-example-modal-lg" tabindex="-1"
          role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <Contact/>
                    </div>
              </div>
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import Landing from './Landing.vue'
import Contact from '../components/contact.vue'

export default {
  name: 'Home',
  components: {
    Landing,
    Contact
  }
}
</script>
