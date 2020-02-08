<template>
    <div class="container">
        <div class="page-inner-header animated fadeInDown">
            <h5 class="mb-3 text-danger">Voucher Code</h5>
        </div>
        <div class="row animated fadeInDown mx-auto">
            <div class="col-12">
                <div class="table-responsive-lg">
                    <table class="table table-hover table-scale--hover table-cards align-items-center">
                        <tbody>
                            <tr v-for="(pm, index) in user.promocode" :key="index">
                                <th scope="row">
                                    <div class="media align-items-center">
                                        <div class="media-body">
                                            <a href="#" class="h5 mb-0">{{pm.promocode}}</a>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            <tr class="table-divider"></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="page-inner-header animated fadeInDown">
            <h5 class="mb-3 text-danger">Loyalty points</h5>
        </div>
        <!-- <div class="container position-relative pt-4 mb--150 animated bounceInDown" style="z-index: 10;">
            <div class="pricing card-group flex-column flex-md-row mb-3">

                <div class="card card-pricing box-shadow-1 text-center px-3 mb-4">
                    <div class="card-header py-5">
                        <h4 class="mb-4">Points earned</h4>

                        <h1 class="display-4 text-warning text-center" data-pricing-value="50"><span class="price">{{user.earnedpoints}}</span></h1>
                    </div>
                </div>

                <div class="card card-pricing zoom-in shadow-lg rounded text-center px-3 mb-4">
                    <div class="card-header py-5">
                        <h4 class="mb-4">Ponts balance</h4>

                        <h1 class="display-4 text-success text-center" data-pricing-value="100"><span class="price">{{user.loyaltypoint}}</span></h1>
                    </div>
                </div>

                <div class="card card-pricing box-shadow-1 text-center px-3 mb-4">
                    <div class="card-header py-5">
                        <h4 class="mb-4">Points used</h4>

                        <h1 class="display-4 text-danger text-center" data-pricing-value="150"><span class="price">{{user.usedpoints}}</span></h1>
                    </div>
                </div>

            </div>
        </div> -->
        <div class="row" v-if="points.status.code == 200">
            <div class="col-lg-12">
                <div class="table-responsive-lg">
                    <table class="table table-hover table-scale--hover table-cards align-items-center">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div class="media align-items-center">
                                        <span class="avatar avatar-lg bg-orange rounded mr-4">PO</span>
                                        <div class="media-body">
                                            <span class="h5 mb-0">Lifetime Points</span>
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    <span class="h6">{{points.customers.customer[0].lifetime_points}}</span>
                                </td>
                                <td>
                                    <i class="far fa-map-marker mr-3"></i><span class="h6">All Loyalty points</span>
                                </td>
                            </tr>
                            <tr class="table-divider"></tr>
                            <tr>
                                <th scope="row">
                                    <div class="media align-items-center">
                                        <span class="avatar avatar-lg bg-red rounded mr-4">PU</span>
                                        <div class="media-body">
                                            <span class="h5 mb-0">Lifetime purchases</span>
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    <span class="h6">{{points.customers.customer[0].lifetime_purchases}}</span>
                                </td>
                                <td><i class="far fa-map-marker mr-3"></i><span class="h6">Amount spent</span>
                                </td>
                            </tr>
                            <tr class="table-divider"></tr>
                            <tr>
                                <th scope="row">
                                    <div class="media align-items-center">
                                        <span class="avatar avatar-lg bg-success rounded mr-4">LP</span>
                                        <div class="media-body">
                                            <span class="h5 mb-0">Loyalty points</span>
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    <span class="h6">{{points.customers.customer[0].loyalty_points}}</span>
                                </td>
                                <td><i class="far fa-map-marker mr-3"></i><span class="h6">Available points</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-center mt-5">
                    <a href="#" class="text-white"><i class="far fa-angle-right mr-2"></i>View all job openings</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: {
            required: true,
            type: Object
        },
        orders: {
            required: true,
            type: Array
        },
        points:{
            required: true,
            type: Object
        }
    },
}
</script>