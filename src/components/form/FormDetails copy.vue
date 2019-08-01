<template>
  <div id="form-page">
    <div id="form-details">
      <div id="details-form">
        <form
          action
          autocomplete="on"
          id="survey-form"
          class="form"
          @submit.prevent="submitServiceBooking"
        >
          <fieldset id="personal-details">
            <legend>Personal information:</legend>
            <div class="container">
              <label for="firstName" class="q">
                <span>*</span> First name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                v-model="service.user.firstName"
                placeholder="Enter your first name"
                class="a"
                :class="firstNameRequired"
              />

              <label for="lastName" class="q">
                <span>*</span> Last name:
              </label>

              <input
                type="text"
                name="lastName"
                id="lastName"
                v-model="service.user.lastName"
                placeholder="Enter your last name"
                class="a"
                :class="lastNameRequired"
              />

              <label for="contactNumber" class="q">
                <span>*</span> Contact number:
              </label>
              <input
                type="text"
                name="contactNumber"
                id="contactNumber"
                v-model="service.user.contactNumber"
                placeholder="Enter your contact number"
                class="a"
                :class="contactNumberRequired"
              />

              <label for="contactEmail" class="q">
                <span>*</span> Contact email:
              </label>

              <input
                type="email"
                name="contactEmail"
                id="contactEmail"
                v-model="service.user.contactEmail"
                placeholder="Enter your email address"
                class="a"
                :class="contactEmailRequired"
              />
            </div>
          </fieldset>
          <fieldset id="bike-details">
            <legend>bike details:</legend>
            <div class="container">
              <label for="bikeBrand" class="q">bike brand</label>
              <input
                type="text"
                name="bikeBrand"
                id="bikeBrand"
                v-model="service.bike.brand"
                placeholder="Enter the bike manufacturer"
                class="a"
              />
              <label for="bikeModel" class="q">bike model</label>

              <input
                type="text"
                name="bikeModel"
                id="bikeModel"
                v-model="service.bike.model"
                placeholder="Enter the bike model"
                class="a"
              />

              <label for="bikeAge" class="q"
                >approximate year of manufacture</label
              >
              <input
                type="number"
                name="bikeAge"
                id="bikeAge"
                v-model="service.bike.manufacture"
                placeholder="Enter the approximate year the bike was released"
                class="a"
                min="1990"
                max="2020"
              />
              <br />
              <p class="q">Bike History:</p>
              <div class="a">
                <input
                  type="radio"
                  name="bikeHistory"
                  value="historyOrginalOwner"
                  id="historyOrginalOwner"
                  v-model="service.bike.owner"
                />
                <label for="historyOrginalOwner">I bought this bike new</label>
                <br />
                <input
                  type="radio"
                  name="bikeHistory"
                  value="historyPreviousOwners"
                  id="historyPreviousOwners"
                  v-model="service.bike.owner"
                />
                <label for="historyPreviousOwners"
                  >This bike has had previous owners</label
                >
                <br />
                <input
                  type="radio"
                  name="bikeHistory"
                  value="historyOther"
                  id="historyOther"
                  v-model="service.bike.owner"
                />
                <label for="historyOther">Other</label>
              </div>
              <br />
              <br />
            </div>
          </fieldset>
          <fieldset id="service-details">
            <legend>service details:</legend>
            <div class="container">
              <p for="serviceType" class="q" id="service-type">
                <span>*</span> service type
              </p>

              <select
                name="serviceType"
                size="1"
                v-model="service.serviceType.level"
                class="a"
                :class="serviceTypeRequired"
                @change="onChange"
              >
                <option value disabled>Select a Service</option>
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
              </select>
              <br />
              <p class="q" id="service-issues">
                specific areas of the service to address:
              </p>
              <div class="a" :class="classObject">
                <div v-show="service.serviceType.level === ''">
                  Please select a service
                </div>
                <!-- start bronze options -->
                <div v-show="service.serviceType.level === 'bronze'">
                  <p>Bronze</p>
                  <p class="description">
                    Full safety check, frame and forks wiped down and checked
                    for alignment, gears and brakes adjusted, chain checked and
                    lubricated, wheels and tyres inspected for wear.
                  </p>
                </div>
                <div v-show="service.serviceType.level === 'silver'">
                  <p>
                    Silver
                    <span class="description"
                      >Includes Bronze service plus:</span
                    >
                  </p>
                  <p class="description">
                    Drivetrain (chain, cassette and chainset) removed, cleaned
                    and refitted, bottom bracket checked, headset checked and
                    adjusted, wheels trued and hub bearings adjusted.
                  </p>
                </div>
                <div v-show="service.serviceType.level === 'gold'">
                  <p>
                    Gold
                    <span class="description"
                      >Includes Silver service plus:</span
                    >
                  </p>

                  <p class="description">
                    Full strip down to the frame and forks, frame and thread
                    mounts tapped and faced (as necessary), headset and bottom
                    bracket removed and serviced, wheel hubs disassembled and
                    serviced.
                  </p>
                </div>

                <div class="bronze" v-if="service.serviceType.level">
                  <input
                    type="checkbox"
                    name="bronzeAddressAlignment"
                    id="bronzeAddressAlignment"
                    value="bronze - check alignment"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="bronzeAddressAlignment"
                    >Frame &amp; forks checked for alignment</label
                  >

                  <br />

                  <input
                    type="checkbox"
                    name="bronzeAddressGears"
                    id="bronzeAddressGears"
                    value="bronze - adjust gears"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="bronzeAddressGears">Gears adjusted</label>

                  <br />

                  <input
                    type="checkbox"
                    name="bronzeAddressBrakes"
                    id="bronzeAddressBrakes"
                    value="bronze - adjust brakes"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="bronzeAddressBrakes">Brakes adjusted</label>

                  <br />

                  <input
                    type="checkbox"
                    name="bronzeAddressChain"
                    id="bronzeAddressChain"
                    value="bronze - inspect drivetrain"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="bronzeAddressChain"
                    >Drivetrain checked for wear</label
                  >

                  <br />

                  <input
                    type="checkbox"
                    name="bronzeAddressWheels"
                    id="bronzeAddressWheels"
                    value="bronze - inspect wheels &amp; tyres"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="bronzeAddressWheels"
                    >Wheels and tyres inspected for wear</label
                  >
                </div>
                <!-- end bronze options -->
                <!-- start silver options -->
                <div
                  v-if="
                    service.serviceType.level === 'silver' ||
                      service.serviceType.level === 'gold'
                  "
                  class="silver"
                >
                  <p v-show="service.serviceType.level === 'silver'"></p>
                  <input
                    type="checkbox"
                    name="silverDriveTrain"
                    id="silverDriveTrain"
                    value="silver - service drivetrain"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="silverDriveTrain"
                    >Drivetrain removed, cleaned and checked for wear</label
                  >
                  <br />
                  <input
                    type="checkbox"
                    name="silverBottomBracket"
                    id="silverBottomBracket"
                    value="silver - adjust bottom bracket"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="silverBottomBracket">
                    Bottom bracket checked for free movement and adjusted as
                    necessary
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="silverHeadset"
                    id="silverHeadset"
                    value="silver - adjust headset"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="silverHeadset">
                    Headset checked for free movement and adjusted as necessary
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="silverTrueWheel"
                    id="silverTrueWheel"
                    value="silver - true wheels"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="silverTrueWheel"
                    >Wheels trued and spokes tensioned</label
                  >
                  <br />
                  <input
                    type="checkbox"
                    name="silverHubs"
                    id="silverHubs"
                    value="silver - adjust hubs"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="silverHubs">
                    Wheel Bearings checked for free movement and adjusted
                  </label>
                </div>
                <!-- end silver options -->
                <!-- start gold options -->
                <div v-if="service.serviceType.level === 'gold'" class="gold">
                  <p v-show="service.serviceType.level === 'gold'"></p>
                  <input
                    type="checkbox"
                    name="goldThreads"
                    id="goldThreads"
                    value="gold - check threads"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="goldThreads">
                    Frame threads checked for damage and tapped if necessary
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="goldHeadset"
                    id="goldHeadset"
                    value="gold - service headset"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="goldHeadset"
                    >Headset removed, cleaned and regreased as necessary</label
                  >
                  <br />
                  <input
                    type="checkbox"
                    name="goldBottomBracket"
                    id="goldBottomBracket"
                    value="gold - service bottom bracket"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="goldBottomBracket">
                    Bottom Bracket removed, cleaned and regreased as necessary
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="goldHubs"
                    id="goldHubs"
                    value="gold - service hubs"
                    v-model="service.serviceType.addressIssues"
                  />
                  <label for="goldHubs">
                    Wheel hubs disassembled, cleaned, inspected and reassembled
                  </label>
                </div>
                <!-- end gold options -->
              </div>

              <label for="notes" class="q" id="service-notes"
                >notes for the mechanic</label
              >
              <textarea
                v-show="service.serviceType.level === ''"
                class="a no-hover"
                name
                id
                cols="30"
                rows="10"
                placeholder="Please select a service"
                disabled
              ></textarea>
              <textarea
                v-show="service.serviceType.level !== ''"
                name="notes"
                rows="10"
                cols="30"
                placeholder="Enter any notes for the mechanic"
                v-model="service.serviceType.notes"
                class="a"
              ></textarea>
            </div>
          </fieldset>

          <fieldset id="confirm-and-submit">
            <legend>Confirm &amp; Submit:</legend>
            <!-- start confirm  -->
            <p class="title">Personal Details:</p>
            <ul>
              <li>
                Name:
                <span v-show="service.user.firstName && service.user.lastName">
                  <span>{{ service.user.firstName + '&nbsp;' }}</span>
                  <span>{{ service.user.lastName }}</span>
                </span>
                <span
                  v-show="!service.user.firstName || !service.user.lastName"
                >
                  <a href="#personal-details" class="input-required">
                    <span>*</span> Please enter a first and last name
                  </a>
                </span>
              </li>
              <li>
                Contact Number:
                <span>{{ service.user.contactNumber }}</span>
                <span v-show="!service.user.contactNumber">
                  <a href="#personal-details" class="input-required">
                    <span>*</span> Please enter a contact number
                  </a>
                </span>
              </li>
              <li>
                Contact Email:
                <span>{{ service.user.contactEmail }}</span>
                <span v-show="!service.user.contactEmail">
                  <a href="#personal-details" class="input-required">
                    <span>*</span> Please enter a contact email
                  </a>
                </span>
              </li>
            </ul>
            <p class="title">Bike Details:</p>
            <ul>
              <li>
                Bike Make &amp; Model:
                {{ service.bike.brand }} {{ service.bike.model }}
                {{ service.bike.manufacture }}
                <span
                  v-show="
                    !service.bike.brand &&
                      !service.bike.model &&
                      !service.bike.manufacture
                  "
                  class="form-optional-input"
                >
                  <a href="#bike-details">No bike details entered</a>
                </span>
              </li>
              <li>
                History:
                <span
                  v-if="history === 'No bike history entered'"
                  class="form-optional-input"
                >
                  <a href="#bike-details">{{ history }}</a>
                </span>
                <span v-else>{{ history }}</span>
              </li>
            </ul>
            <p class="title">Service Details:</p>
            <p>
              Service Type:
              <span style="text-transform:capitalize">
                {{ service.serviceType.level }}
              </span>
              <span v-show="!service.serviceType.level">
                <a href="#service-details" class="input-required">
                  <span>*</span> Please select a service
                </a>
              </span>
            </p>
            <p>
              Service Focus:
              <span
                v-if="service.serviceType.addressIssues.length === 0"
                class="form-optional-input"
              >
                <a href="#service-details">No particular issues selected</a>
              </span>
              <span
                v-for="(problem, index) in service.serviceType.addressIssues"
                :key="index"
                >{{ problem + ', &nbsp; ' }}</span
              >
            </p>
            <p>
              Notes: {{ service.serviceType.notes }}
              <span
                v-show="!service.serviceType.notes"
                class="form-optional-input"
              >
                <a href="#service-details">No notes entered</a>
              </span>
            </p>
            <!-- end confirm  -->
            <!-- start form error details -->
            <fieldset v-show="service.errors.length >= 1" id="show-errors">
              <legend>Please enter details:</legend>
              <div>
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="(error, index) in service.errors" :key="index">
                    &#10060; {{ error }}
                  </li>
                </ul>
              </div>
            </fieldset>
            <!-- end form error details -->

            <div id="submit">
              <input type="submit" value="submit" @blur="clearErrors" />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div id="form-submitted" v-show="form.submitted">
      <p>Thank you, your booking has been submitted</p>
      <span @click="form.submitted = false">&#10006;</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service: {
        user: {
          firstName: '',
          lastName: '',
          contactNumber: '',
          contactEmail: ''
        },
        bike: { brand: '', model: '', manufacture: '', owner: '' },
        serviceType: {
          level: '',
          addressIssues: [],
          notes: ''
        },
        errors: []
      },
      confirmValid: false,
      value: 150,
      form: { required: false, submitted: false }
    }
  },
  methods: {
    confirmDetails() {
      this.errorCheck()
      if (this.service.errors.length === 0) {
        this.confirmValid = true
      }
    },
    errorCheck() {
      let user = this.service.user
      let service = this.service.serviceType
      let errors = this.service.errors
      if (!user.firstName) errors.push('First name required.')
      if (!user.lastName) errors.push('Last name required.')
      if (!user.contactNumber) errors.push('Contact number required.')
      if (!user.contactEmail) errors.push('Contact email required.')
      if (!service.level) errors.push('Service level required.')
    },
    submitServiceBooking() {
      let user = this.service.user
      let bike = this.service.bike
      let service = this.service.serviceType
      let errors = this.service.errors
      if (
        user.firstName &&
        user.lastName &&
        user.contactNumber &&
        user.contactEmail &&
        service.level
      ) {
        this.service.errors = []

        let serviceBooking
        serviceBooking = {
          userBooking: this.service
        }
        console.log('submitting!', serviceBooking)
        user.firstName = ''
        user.lastName = ''
        user.contactNumber = ''
        user.contactEmail = ''
        bike.brand = ''
        bike.model = ''
        bike.manufacture = ''
        bike.owner = ''
        service.level = ''
        service.addressIssues = []
        service.notes = ''
        this.service.errors = [] // resets form errors
        this.form.required = false // resets css form error status
        this.form.submitted = true

        console.log('submitted!')
      } else {
        if (!user.firstName) errors.push('First name required.')
        if (!user.lastName) errors.push('Last name required.')
        if (!user.contactNumber) errors.push('Contact number required.')
        if (!user.contactEmail) errors.push('Contact email required.')
        if (!service.level) errors.push('Service level required.')
        this.form.required = true

        //   this.service.errors = []
      }
    },
    clearErrors() {
      this.service.errors = []
    },
    onChange(event) {
      let serviceValue = event.target.value
      if (serviceValue === 'bronze') {
        console.log('bronze!')
        this.service.serviceType.addressIssues = []
      } else if (serviceValue === 'silver') {
        console.log('silver!')
        this.service.serviceType.addressIssues = []
      } else if (serviceValue === 'gold') {
        console.log('gold!')
      }
    }
  },
  computed: {
    classObject() {
      return {
        'bg-bronze': this.service.serviceType.level === 'bronze',
        'bg-silver': this.service.serviceType.level === 'silver',
        'bg-gold': this.service.serviceType.level === 'gold'
      }
    },
    firstNameRequired() {
      return {
        required: this.form.required && !this.service.user.firstName
      }
    },
    lastNameRequired() {
      return {
        required: this.form.required && !this.service.user.lastName
      }
    },
    contactNumberRequired() {
      return {
        required: this.form.required && !this.service.user.contactNumber
      }
    },
    contactEmailRequired() {
      return {
        required: this.form.required && !this.service.user.contactEmail
      }
    },
    serviceTypeRequired() {
      return {
        required: this.form.required && !this.service.serviceType.level
      }
    },
    history() {
      if (this.service.bike.owner === 'historyOrginalOwner') {
        return 'You are the original owner'
      } else if (this.service.bike.owner === 'historyPreviousOwners') {
        return 'This bike has had previous owners'
      } else if (this.service.bike.owner === 'historyOther') {
        return "'Other' history"
      } else {
        return 'No bike history entered'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#form-page {
  // generic classes
  .bg-bronze {
    background: rgb(205, 127, 50);
  }
  .bg-silver {
    background: silver;
  }
  .bg-gold {
    background: gold;
  }
  .bronze {
    background: rgb(205, 127, 50);
  }
  .silver {
    border: 2px solid silver;
    background: silver;
  }
  .gold {
    border: 2px solid gold;
    background: gold;
  }
  .required {
    background: lightcoral;
  }
  .title {
    text-decoration: underline;
    text-decoration-color: orangered;
    font-weight: bold;
  }
  .input-required {
    span {
      // for *
      color: red;
    }
  }

  // generic styling
  legend {
    font-size: 2rem;
    text-transform: capitalize;
    font-variant: small-caps;
  }
  label {
    cursor: pointer;
  }

  // radio stuff
  input[type='radio'] {
    cursor: pointer;
    transform: scale(1.5);
  }
  input[type='radio'] + label {
    cursor: pointer;
  }
  input[type='radio']:not(:checked) + label {
    color: rgba(black, 0.5);
    font-style: italic;
    margin-left: 5px;
    &:hover {
      color: rgba(black, 1);
    }
  }
  input:checked + label {
    color: black;
    font-style: normal;
    margin-left: 5px;
  }
  input:focus,
  textarea:focus,
  select:focus {
    box-shadow: 3px 3px 10px #ff9900;
  }
  input[type='checkbox']:not(:checked):hover {
    box-shadow: 0 0 5px 1px orangered, inset 0 0 5px 1px orangered;
  }
  input[type='radio']:not(:checked):hover {
    box-shadow: 0 0 5px 1px orangered, inset 0 0 5px 1px orangered;
  }
  input[type='radio']:checked {
    box-shadow: 0 0 5px 1px #ff9900, inset 0 0 5px 1px #ff9900;
  }
  input[type='checkbox']:checked {
    box-shadow: 0 0 5px 1px #ff9900, inset 0 0 1px 1px #ff9900;
  }
  // checkbox stuff
  input[type='checkbox'] {
    cursor: pointer;
    transform: scale(1.5);
  }
  input[type='checkbox'] + label {
    cursor: pointer;
  }
  input[type='checkbox']:not(:checked) + label {
    color: rgba(black, 0.5);
    font-style: italic;
    margin-left: 5px;
    &:hover {
      color: rgba(black, 1);
    }
  }
  input:checked + label {
    color: black;
    font-style: normal;
    margin-left: 5px;
  }

  select,
  select[bronze] {
    cursor: pointer;
  }
  input:hover,
  textarea:hover,
  select:hover {
    box-shadow: 3px 3px 10px orangered;
  }
  input[type='submit']:hover {
    box-shadow: 0 0 10px orangered;
  }

  #details-title > h2 {
    max-width: 1200px;
    margin: 0 auto;
    text-transform: capitalize;
    font-variant: small-caps;
    color: black;
    font-size: 2.5rem;
    line-height: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 3px solid orangered;
  }
  #form-details {
    margin: 0 auto;
    text-align: center;
    background: lightgrey;
    background-image: url('../../assets/form/form-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding: 2rem 0;
    color: black;
    #details-form {
      font-size: 1.3rem;
      margin-top: 1rem;
      background: rgba(white, 0.7);
      max-width: 1200px;
      margin: 0 auto;
      .form {
        padding: 1rem;
        text-align: left;
      }
      #personal-details label.q span,
      #service-details p.q span {
        color: red;
      }
      .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        .q {
          flex: 0 0 50%;
          text-transform: capitalize;
          text-align: right;
          padding-right: 10px;
          margin-top: 10px;
        }
        .a {
          flex: 0 0 50%;
          text-align: left;
          padding-left: 5px;
          margin-top: 10px;
        }
        .no-hover {
          &:hover {
            box-shadow: none;
          }
        }

        .description {
          color: white;
          font-size: 1rem;
          font-style: italic;
        }
      }
    }
  }
  #confirm-and-submit {
    // confirm and submit section
    background: rgba(white, 0.7);
    .title {
      margin: 2px 0;
    }
    ul > li {
      margin: 2px 0;
    }
    span {
      display: inline-block;
    }
    #show-errors ul > li {
      margin-top: 0.2rem;
    }
    .form-optional-input {
      font-style: italic;
      color: grey;
    }
  }
  #submit {
    text-align: center;
    input {
      text-transform: capitalize;
      border: 2px solid orangered;
      box-shadow: 2px 2px 3px 1px grey;
      font-size: 1rem;
      padding: 0.2rem 1rem;
      &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 10px orangered;
      }
    }
  }

  #form-submitted {
    // popup submit confirmation
    color: black;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    background: white;
    text-align: center;
    font-size: 1.6rem;
    padding: 2rem;
    background: greenyellow;
    box-shadow: inset 0 0 20px 10px greenyellow;
    span {
      cursor: pointer;
      color: black;
      background: rgba(white, 0.2);
      padding: 0.5rem;
      position: absolute;
      top: 10px;
      right: 20px;
      &:hover {
        background: rgba(white, 0.5);
      }
    }
  }
}

@media screen and (max-width: 700px) and (min-width: 401px) {
  #form-page {
    #details-title > h2 {
      text-align: center;
    }
    #form-details {
      legend {
        font-size: 1.5rem;
      }
      #details-form {
        font-size: 1rem;
        .container {
          .q {
            text-align: left;
          }
          .q,
          .a {
            flex-basis: 100%;
          }
        }
      }
    }
    #submit {
      text-align: center;
      input {
        text-transform: capitalize;
        border: 2px solid orangered;
        box-shadow: 2px 2px 3px 1px grey;
        border-radius: 5px;
        margin: 1rem;
        font-size: 1rem;
        padding: 0.2rem 1rem;
        &:hover {
          cursor: pointer;
          box-shadow: 3px 3px 10px orangered;
        }
      }
    }
  }
}

@media only screen and (max-width: 400px) {
  #form-page {
    #details-title > h2 {
      text-align: center;
    }
    #form-details {
      legend {
        font-size: 1.5rem;
      }
      #details-form {
        font-size: 1rem;
        .container {
          .q {
            text-align: left;
          }
          .q,
          .a {
            flex-basis: 100%;
          }
        }
      }
    }
    #submit {
      text-align: center;
      input {
        text-transform: capitalize;
        border: 2px solid orangered;
        box-shadow: 2px 2px 3px 1px grey;
        border-radius: 5px;
        margin: 1rem;
        font-size: 1rem;
        padding: 0.2rem 1rem;
        &:hover {
          cursor: pointer;
          box-shadow: 3px 3px 10px orangered;
        }
      }
    }
  }
}
</style>
