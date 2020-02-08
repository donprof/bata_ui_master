<template>
	<main>
		<section class="slice slice-xl bg-danger bg-cover bg-size--contain" style="padding-bottom: 195px; background-image: url('/img/backgrounds/clouds-bottom-secondary.png'); background-position: center bottom;">
            <div class="container">
                <div class="row row-grid align-items-center justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center">
                            <!-- <h2 class="heading h1 text-white mb-3">Hello John Wanyoike.</h2>
                            <p class="lead lh-180 text-white">Below is a list of all orders you have made and their progress.</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

		<section class="bg-secondary">
            <div class="container">
                <div class="mb-md text-center">
                    <h3 class="h3 mt-0">Listed below are all your orders</h3>
                </div>
                <div class="pricing card-deck flex-column flex-lg-row mb-3" v-if="orders.length">
					<Order
						v-for="order in orders"
						:key="order.id"
						:order="order"
					/>
                </div>
				<div class="row" v-else>
					<div class="col-md-3 mr-auto ml-auto">
						<div class="card card-pricing popular box-shadow-3 text-center px-3 mb-4">
							<span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white box-shadow-2">Oops</span>
							<div class="card-header py-5">
								<h1 class="h1 font-weight-700 text-primary text-center mb-0" data-pricing-value="30"><span class="price">You have no orders.</span></h1>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>




		<!-- <div class="section">
			<div class="container is-fluid">
			<div class="columns">
				<div class="column is-12">
				<h1 class="title is-4">Your orders</h1>

				<article class="message" v-if="orders.length">
					<div class="message-body">
					<table class="table is-hoverable is-fullwidth">
						<tbody>
						<Order
							v-for="order in orders"
							:key="order.id"
							:order="order"
						/>
						</tbody>
					</table>
					</div>
				</article>
				<p v-else>
					You have no orders
				</p>
				</div>
			</div>
			</div>
		</div> -->
	</main>
</template>

<script>
  import Order from '@/components/orders/Order'
import { mapActions } from 'vuex'
  export default {
	data () {
	  return {
		orders: []
	  }
    },

	middleware: [
	  'redirectIfGuest'
	],
	methods: {
        ...mapActions({
            footherstyle: 'navstyle/changestyle'
        }),
    },

	components: {
	  Order
	},
	mounted() {
        this.footherstyle({'classes':'footer-light bg-gradient-light', 'imagemode': false, 'navclasses': 'navbar-light bg-white'});
	},
	async asyncData ({ app }) {
	  let response = await app.$axios.$get('orders')

	  return {
		orders: response.data
	  }
	}
  }
</script>
