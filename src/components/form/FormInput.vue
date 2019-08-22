<template>
  <main id="bookService">
    <h1 class="form-header">Book a bike service</h1>
    <div v-show="submitSuccessful" class="booking-thanks">
      <h2 class="thanks__header">Thank you for the booking!</h2>
      <p>
        You can return
        <router-link :to="{ name: 'home' }" class="link" title="Return home"
          >home</router-link
        >
        or
        <a class="link" @click="bookAnother" title="Book another service"
          >book</a
        >
        another bike in.
      </p>
    </div>

    <form
      action
      name="serviceForm"
      class="form"
      @submit.prevent="submitServiceBooking"
    >
      <!-- START personal info -->
      <fieldset class="field" v-show="!submitSuccessful">
        <legend class="legend">Personal Information</legend>
        <div class="formQandA">
          <label for="firstName" class="form__label">First name</label>

          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter first name"
            class="form__input form__input--text"
            required
            v-model.lazy="userFirstName"
          />
        </div>
        <transition-group name="fade">
          <div v-show="userFirstName" key="personal">
            <div class="formQandA">
              <label for="lastName" class="form__label">Last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                class="form__input form__input--text"
                v-model="userLastName"
                required
              />
            </div>
            <div class="formQandA">
              <label for="userPhone" class="form__label">Phone number</label>
              <input
                type="tel"
                name="userPhone"
                id="userPhone"
                placeholder="Enter phone number"
                class="form__input form__input--text"
                required
                v-model.number="userPhone"
              />
            </div>
            <div class="formQandA">
              <label for="userEmail" class="form__label">Email</label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter email"
                class="form__input form__input--text"
                required
                v-model="userEmail"
              />
            </div>
          </div>
        </transition-group>
      </fieldset>
      <!-- END personal info -->
      <!-- START bike details -->

      <fieldset class="field" v-show="!submitSuccessful">
        <legend class="legend">Bike Details</legend>

        <div class="formQandA">
          <label for="bikeModel" class="form__label"
            >Bike Make &amp; model</label
          >
          <input
            type="text"
            name="bikeModel"
            id="bikeModel"
            placeholder="Enter bike make and model"
            class="form__input form__input--text"
            required
            v-model.lazy="bikeModel"
          />
        </div>
        <transition-group name="fade">
          <div v-show="bikeModel" key="bike">
            <div class="formQandA">
              <label for="bikeManufactured" class="form__label"
                >Approximate year of manufacture</label
              >
              <input
                type="number"
                name="bikeManufactured"
                id="bikeManufactured"
                placeholder="Enter manufacture year"
                class="form__input form__input--text"
                min="1900"
                max="2020"
                required
                v-model.number="bikeManufactured"
              />
            </div>
            <div class="formQandA">
              <label
                for="bikeHistory"
                class="form__label form__label--bike-history"
                >Bike history</label
              >
              <br />
              <input
                type="radio"
                name="bikeHistory"
                value="Original owner"
                id="historyOrginalOwner"
                v-model="bikeHistory"
                class="form__input--radio"
                required
              />
              <label for="historyOrginalOwner" class="form__label--radio"
                >Owned bike since new</label
              >
              <br />
              <input
                type="radio"
                name="bikeHistory"
                value="Previous owners"
                id="historyPreviousOwners"
                v-model="bikeHistory"
                class="form__input--radio"
              />
              <label for="historyPreviousOwners" class="form__label--radio"
                >This bike has had previous owners</label
              >
            </div>
          </div>
        </transition-group>
      </fieldset>
      <!-- END bike details -->
      <!-- START service details -->

      <fieldset class="field" v-show="!submitSuccessful">
        <legend class="legend">Service Details</legend>
        <div>
          <label
            for="serviceLevel"
            class="form__label form__label--service-header"
            >Select a service level
          </label>
          <a href="#serviceOptions" v-scroll-to="'#serviceOptions'">
            <i
              class="fa fa-question-circle icon"
              title="View the services available"
            ></i>
          </a>

          <br />
          <select
            name="serviceLevel"
            id="serviceLevel"
            v-model="serviceLevel"
            required
            class="form__input form__input--select"
          >
            <option value="" disabled selected hidden class="disabled-option"
              >Open to select a Service</option
            >
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
          </select>
        </div>

        <div class="checkbox" v-show="serviceLevel">
          <label
            for="specificAreasToAddress"
            class="form__label form__label--checkbox-header"
            >Specific areas of <strong>{{ serviceLevel }} </strong>service to
            address</label
          >
          <!-- START bronze -->

          <transition-group name="fade">
            <div
              v-show="
                serviceLevel === 'bronze' ||
                  serviceLevel === 'silver' ||
                  serviceLevel === 'gold'
              "
              key="bronze"
              class="service service__bronze"
            >
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="frameAlignment"
                  value="frameAlignment"
                  v-model="bronzeFocus"
                  class="form__input--checkbox"
                />
                <label for="frameAlignment" class="form__label--checkbox"
                  >Visual check of frame and forks for wear &amp; checked for
                  alignment
                </label>
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="gearAdjust"
                  value="gearAdjust"
                  v-model="bronzeFocus"
                  class="form__input--checkbox"
                />
                <label for="gearAdjust" class="form__label--checkbox"
                  >Gears inspected &amp; adjusted</label
                >
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="brakeAdjust"
                  value="brakeAdjust"
                  v-model="bronzeFocus"
                  class="form__input--checkbox"
                />
                <label for="brakeAdjust" class="form__label--checkbox"
                  >Brakes inspected &amp; adjusted</label
                >
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="drivetrainInspect"
                  value="drivetrainInspect"
                  v-model="bronzeFocus"
                  class="form__input--checkbox"
                />
                <label for="drivetrainInspect" class="form__label--checkbox"
                  >Drivetrain inspected for wear</label
                >
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="wheelsTyresInspect"
                  value="wheelsTyresInspect"
                  v-model="bronzeFocus"
                  class="form__input--checkbox"
                />
                <label for="wheelsTyresInspect" class="form__label--checkbox"
                  >Wheels &amp; tyres inspected for wear</label
                >
              </div>
            </div>
          </transition-group>

          <!-- END bronze -->
          <!-- START silver -->
          <transition-group name="fade">
            <div
              v-show="serviceLevel === 'silver' || serviceLevel === 'gold'"
              class="service service__silver"
              key="silver"
            >
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="drivetrainService"
                  value="drivetrainService"
                  v-model="silverFocus"
                  class="form__input--checkbox"
                />
                <label for="drivetrainService" class="form__label--checkbox"
                  >Drivetrain removed, cleaned and worn components
                  replaced</label
                >
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="bottomBracketCheck"
                  value="bottomBracketCheck"
                  v-model="silverFocus"
                  class="form__input--checkbox"
                />
                <label for="bottomBracketCheck" class="form__label--checkbox"
                  >Bottom bracket checked for wear, adjusted as required</label
                >
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="headsetCheck"
                  value="headsetCheck"
                  v-model="silverFocus"
                  class="form__input--checkbox"
                />
                <label for="headsetCheck" class="form__label--checkbox"
                  >Headset checked for wear, adjusted as required</label
                >
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="wheelTrue"
                  value="wheelTrue"
                  v-model="silverFocus"
                  class="form__input--checkbox"
                />
                <label for="wheelTrue" class="form__label--checkbox"
                  >Wheels trued and spokes tensioned as required</label
                >
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="wheelHubAdjust"
                  value="wheelHubAdjust"
                  v-model="silverFocus"
                  class="form__input--checkbox"
                />
                <label for="wheelHubAdjust" class="form__label--checkbox"
                  >Wheel bearings checked, adjusted if necessary</label
                >
              </div>
            </div>
          </transition-group>

          <!-- END silver -->
          <!-- START gold -->
          <transition-group name="fade">
            <div
              v-show="serviceLevel === 'gold'"
              class="service service__gold"
              key="gold"
            >
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="frameThreadService"
                  value="frameThreadService"
                  v-model="goldFocus"
                  class="form__input--checkbox"
                />
                <label for="frameThreadService" class="form__label--checkbox"
                  >Frame threads checked, tapped if necessary</label
                >
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="headsetService"
                  value="headsetService"
                  v-model="goldFocus"
                  class="form__input--checkbox"
                />
                <label for="headsetService" class="form__label--checkbox"
                  >Headset removed, cleaned and refitted, with worn components
                  replaced
                </label>
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="bottomBracketService"
                  value="bottomBracketService"
                  v-model="goldFocus"
                  class="form__input--checkbox"
                />
                <label for="bottomBracketService" class="form__label--checkbox"
                  >Bottom bracket removed, cleaned and refitted, with worn
                  components replaced
                </label>
              </div>
              <div class="checkboxPairs">
                <input
                  type="checkbox"
                  name="specificAreasToAddress"
                  id="wheelHubService"
                  value="wheelHubService"
                  v-model="goldFocus"
                  class="form__input--checkbox"
                />
                <label for="wheelHubService" class="form__label--checkbox"
                  >Wheel hubs removed, cleaned and refitted, with worn
                  components replaced
                </label>
              </div>
            </div>
          </transition-group>

          <!-- END gold -->
          <!-- START notes -->

          <div class="textarea">
            <label for="notesForMechanic" class="form__label--textarea"
              >Notes for the mechanic</label
            >
            <textarea
              name="notesForMechanic"
              id="notesForMechanic"
              cols="30"
              rows="5"
              placeholder="Enter any notes for the mechanic"
              v-model="notesForMechanic"
              class="form__input--textarea"
            ></textarea>
          </div>
          <!-- END notes -->
        </div>
      </fieldset>
      <!-- END service details -->
      <button
        type="submit"
        value="Submit"
        class="form__button--submit"
        ref="buttonSubmit"
        :disabled="submitSuccessful"
        :class="{
          'button--loading': isLoading,
          'button--success': submitSuccessful
        }"
      >
        Submit
      </button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      userFirstName: '',
      userLastName: '',
      userPhone: '',
      userEmail: '',
      bikeModel: '',
      bikeManufactured: '',
      bikeHistory: '',
      serviceLevel: '',
      bronzeFocus: [],
      silverFocus: [],
      goldFocus: [],
      notesForMechanic: '',
      isLoading: false,
      submitSuccessful: false
    }
  },
  methods: {
    bookAnother() {
      this.submitSuccessful = false
      this.$refs.buttonSubmit.innerHTML = 'Submit'
    },
    submitServiceBooking() {
      let focusOn = []
      if (this.serviceLevel === 'bronze') {
        focusOn = this.bronzeFocus
      } else if (this.serviceLevel === 'silver') {
        focusOn = this.bronzeFocus.concat(this.silverFocus)
      } else if (this.serviceLevel === 'gold') {
        focusOn = this.bronzeFocus.concat(this.silverFocus, this.goldFocus)
      }
      let booking = {
        first_name: this.userFirstName,
        last_name: this.userLastName,
        phone: this.userPhone,
        email: this.userEmail,
        bike: this.bikeModel,
        bike_manufactured: this.bikeManufactured,
        bike_history: this.bikeHistory,
        service: this.serviceLevel,
        areas_to_address: focusOn,
        notes: this.notesForMechanic
      }
      console.log('Submitting...', booking)
      this.$refs.buttonSubmit.innerHTML =
        '<i v-if="isLoading" class="fa fa-spinner fa-spin"></i>'
      this.isLoading = true
      setTimeout(() => {
        this.$refs.buttonSubmit.innerHTML = '&#10004; Success'
        this.isLoading = false
        this.submitSuccessful = true
        this.userFirstName = ''
        this.userLastName = ''
        this.userPhone = ''
        this.userEmail = ''
        this.bikeModel = ''
        this.bikeManufactured = ''
        this.bikeHistory = ''
        this.serviceLevel = ''
        this.bronzeFocus = []
        this.silverFocus = []
        this.goldFocus = []
        this.notesForMechanic = ''
        console.log('Submitted', booking)
      }, 2500)
    }
  },
  destroyed() {
    clearTimeout(this.submitServiceBooking)
  }
}
</script>

<style lang="scss" scoped>
.icon {
  color: rgb(124, 124, 235);
  margin-left: 0.25rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(100px);
  background: red;
  opacity: 0.1;
}
.service {
  border-left: 5px solid transparent;
  padding-left: 0.25rem;
  margin: 0.25rem 0;
}
.service__bronze {
  border-color: #cd7f32;
}
.service__silver {
  border-color: #c0c0c0;
}
.service__gold {
  border-color: #cfb53b;
}
.link {
  text-decoration: underline;
}
.booking-thanks {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  color: #413c3c;
}
.thanks__header {
  font-size: 2rem;
  padding: 1rem 1rem 1rem 0rem;
}
.form {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  color: #413c3c;
}
.form-header {
  padding: 2rem;
  font-size: 2.5rem;
  text-align: center;
  text-transform: capitalize;
  background: whitesmoke;
  color: #413c3c;
}
.field {
  margin: 1rem 0;
  background-color: whitesmoke;
}
.legend {
  font-size: 1.4rem;
  text-transform: capitalize;
  font-variant: small-caps;
}
.formQandA {
  margin: 1rem 0.5rem;
}
.asterisk {
  color: red;
}
.checkboxPairs {
  padding: 0.25rem 0;
}
.form__label {
  display: inline-block;
  margin-top: 0.25rem;
  &::after {
    content: ' *';
    color: red;
  }
  &:hover {
    cursor: pointer;
  }
}
.form__label--radio {
  display: inline;
  font-size: 0.9rem;
  line-height: 1.1rem;
  padding-left: 0.25rem;
  &:hover {
    cursor: pointer;
  }
}
.form__label--service-header {
  margin-top: 1rem;
}
.form__label--bike-history,
.form__label--service-header {
  &:hover {
    cursor: default;
  }
}
.form__label--checkbox-header {
  &:hover {
    cursor: default;
  }
  &::after {
    content: none;
  }
}
.form__label--checkbox {
  font-size: 0.9rem;
  line-height: 1.1rem;
  padding-left: 0.25rem;
  &:hover {
    cursor: pointer;
  }
}
.textarea,
.checkbox {
  margin-top: 0.25rem;
}
.textarea {
  margin: 1rem 0;
}
textarea {
  resize: none;
}

.form__label--textarea {
  &:hover {
    cursor: pointer;
  }

  &::after {
    content: none;
  }
}

.form__input {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  color: #6c757d;
  background-color: white;
  border: 1px solid #ced4da;
  border-left: 3px solid;
  border-radius: 0.2rem;
  transition: border-color 0.2s ease-in-out;
  margin-left: 0.5rem;
  &:focus {
    border: 1px solid lightseagreen;
    border-left: 3px solid;
  }
}
.form__input--text {
  font-size: 0.9rem;
  line-height: 2rem;
  color: black;
}
::placeholder,
.disabled-option {
  color: #919ca0;
}
.form__input--radio {
  font-size: 2.9rem;
  line-height: 1rem;
  margin-left: 0.5rem;

  &:hover {
    cursor: pointer;
  }
}
.form__input--select {
  min-width: 50%;
  max-width: 500px;
  margin-bottom: 1rem;
  height: 2.5rem;

  &:hover {
    cursor: pointer;
  }
}
.form__input--checkbox {
  margin-left: 0.5rem;
  &:hover {
    cursor: pointer;
  }
}
.form__input--textarea {
  display: block;
  width: 98%;
  margin: 0 auto;
}
.form__input:optional {
  border-left-color: #999;
}
.form__input:required {
  border-left-color: lightgreen;
  font-size: 0.9rem;
  line-height: 2rem;
  color: black;
}
.form__input:invalid {
  border-left-color: #413c3c;
  color: #919ca0;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='radio']:checked {
  color: #3bafda;
  border-color: #3bafda;
  background-color: #3bafda;
}
input:checked ~ ::before {
  color: #3bafda;
  border-color: #3bafda;
  background-color: #3bafda;
  border-radius: 50%;
}
.form__button--submit {
  display: block;
  margin: 4rem auto 4rem auto;
  width: 8rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  background-color: lightseagreen;
  border: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
}
.button--loading {
  background-color: rgb(124, 124, 235);
  &:hover {
    cursor: wait;
  }
}
.button--success {
  background-color: rgb(39, 241, 66);
  &:hover {
    cursor: default;
  }
}
</style>
