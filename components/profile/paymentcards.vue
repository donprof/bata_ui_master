<template>
    <span>
        <div class="page-inner-header mb-4 animated fadeInDown">
            <h5 class="mb-1">Your cards</h5>
        </div>

        <div>
            <ul class="list-group list-group-flush animated fadeInDown delay--1s">
                <li class="list-group-item bg-transparent px-0">
                    <div class="row">
                        <div class="col-sm-4"><small class="font-weight-bold text-dark mb-3 mb-sm-0">Credit or debit cards</small>
                        </div>
                        <div class="col-sm-8">
                            <!-- First card -->
                            <div class="row mb-3" :class="[pay.default == 1 ? 'text-success' : '']" v-for="pay in user.paymentMethods" :key="pay.id">
                            <!-- {{pay}} -->
                                <div class="col-10">
                                    <img alt="Image placeholder" src="/img/icons/cards/visa.png" class="mr-1" width="30">x-{{pay.last_four}} (Created on {{pay.created_at}})
                                </div>
                                <div class="col-2 text-right">
                                    <a href="#" class="text-light" data-toggle="tooltip" data-original-title="Remove card">
                                        <el-tooltip content="Romeve" placement="top">
                                            <span class="action-item"><i class="far fa-trash-alt"></i></span>
                                        </el-tooltip>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- Payment history -->
        <!-- <div class="mt-4 pt-4 delimiter-top">

            <div class="page-inner-header mb-4">
                <h5 class="mb-1">Payment history</h5>

                <p class="text-muted mb-0">You can help us, by filling your data, create you a much better experience using our website.</p>

            </div>

            <div class="table-responsive">
                <table class="table table-hover table-cards align-items-center">
                    <tbody>
                        <tr>
                            <th scope="row">
                                <span class="badge badge-lg badge-dot">
                            <i class="bg-success"></i>
                        </span>
                            </th>
                            <td>
                                <i class="far fa-calendar-alt mr-2"></i>
                                <span class="font-weight-bold text-dark">May 20, 2018</span>
                            </td>
                            <td>#10015</td>
                            <td><i class="far fa-credit-card mr-2"></i>Visa ending in 2035</td>
                            <td>$49.00 USD</td>
                            <td>
                                <div class="dropdown">
                                    <a class="btn btn-sm btn-icon-only" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-ellipsis-h"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right hide" x-placement="top-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(32px, -2px, 0px);">
                                        <a class="dropdown-item" href="#"><i class="far fa-file-pdf text-muted"></i>Download invoice</a>
                                        <a class="dropdown-item" href="#"><i class="far fa-file-archive text-muted"></i>See details</a>
                                        <a class="dropdown-item" href="#"><i class="far fa-trash-alt text-muted"></i>Delete</a>

                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="table-divider"></tr>
                        <tr>
                            <th scope="row">
                                <span class="badge badge-lg badge-dot">
                            <i class="bg-danger"></i>
                        </span>
                            </th>
                            <td>
                                <i class="far fa-calendar-alt mr-2"></i>
                                <span class="font-weight-bold text-dark">Apr 15, 2018</span>
                            </td>
                            <td>#10015</td>
                            <td><i class="far fa-credit-card mr-2"></i>Visa ending in 2035</td>
                            <td><span class="text-danger">$39.00 USD</span>
                            </td>
                            <td>
                                <div class="dropdown">
                                    <a class="btn btn-sm btn-icon-only" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-ellipsis-h"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right hide">
                                        <a class="dropdown-item" href="#"><i class="far fa-file-pdf text-muted"></i>Download invoice</a>
                                        <a class="dropdown-item" href="#"><i class="far fa-file-archive text-muted"></i>See details</a>
                                        <a class="dropdown-item" href="#"><i class="far fa-trash-alt text-muted"></i>Delete</a>

                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="table-divider"></tr>
                        <tr>
                            <th scope="row">
                                <span class="badge badge-lg badge-dot">
                            <i class="bg-success"></i>
                        </span>
                            </th>
                            <td>
                                <i class="far fa-calendar-alt mr-2"></i>
                                <span class="font-weight-bold text-dark">May 20, 2018</span>
                            </td>
                            <td>#10015</td>
                            <td><i class="far fa-credit-card mr-2"></i>Visa ending in 2035</td>
                            <td>$49.00 USD</td>
                            <td>
                                <div class="dropdown">
                                    <a class="btn btn-sm btn-icon-only" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-ellipsis-h"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right hide">
                                        <a class="dropdown-item" href="#"><i class="far fa-file-pdf text-muted"></i>Download invoice</a>
                                        <a class="dropdown-item" href="#"><i class="far fa-file-archive text-muted"></i>See details</a>
                                        <a class="dropdown-item" href="#"><i class="far fa-trash-alt text-muted"></i>Delete</a>

                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="table-divider"></tr>
                    </tbody>
                </table>
            </div>
        </div> -->
        <!-- Attach a new card -->
        <!-- <div class="mt-5 pt-5 delimiter-top">

            <div class="page-inner-header mb-4">
                <h5 class="mb-1">Attach a new card</h5>
                <p class="text-muted mb-0">Add you credit card for faster checkout process.</p>
            </div>

            <form class="form-default mt-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-8">
                                <h5>Credit Card</h5>
                                <p class="text-muted mt-2">Safe money transfer using your bank account. We support Mastercard, Visa, Maestro and Skrill.</p>
                            </div>
                            <div class="col-lg-4 text-lg-right">
                                <img alt="Image placeholder" src="/img/icons/cards/mastercard.png" width="40" class="mr-2">
                                <img alt="Image placeholder" src="/img/icons/cards/visa.png" width="40" class="mr-2">
                                <img alt="Image placeholder" src="/img/icons/cards/skrill.png" width="40">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="input-group input-group-transparent">
                                        <input type="text" class="form-control form-control-sm" data-mask="0000 0000 0000 0000" placeholder="4789 5697 0541 7546" autocomplete="off" maxlength="19">
                                        <div class="input-group-append">
                                            <span class="input-group-text"><i class="far fa-credit-card"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Name on card</label>
                                    <input type="text" class="form-control form-control-sm" placeholder="John Doe">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="control-label">Expiry date</label>
                                    <input type="text" class="form-control form-control-sm" data-mask="00/00" placeholder="MM/YY" autocomplete="off" maxlength="5">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="control-label">CVV code</label>
                                    <div class="input-group input-group-transparent">
                                        <input type="text" class="form-control form-control-sm" data-mask="000" placeholder="746" autocomplete="off" maxlength="3">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <a href="#" class="btn btn-sm btn-primary">Save card</a>
                        </div>
                    </div>
                </div>
                
            </form>
        </div> -->
    </span>
</template>
<script>
export default {
    props: {
        user: {
            required: true,
            type: Object
        },
    },
}
</script>