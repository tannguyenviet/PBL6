package com.intern.plb6.ui.reservation

import android.annotation.SuppressLint
import android.app.AlertDialog
import android.app.DatePickerDialog
import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.GridLayoutManager
import com.intern.plb6.R
import com.intern.plb6.data.model.api.PaymentRequest
import com.intern.plb6.data.model.other.Location
import com.intern.plb6.databinding.ActivityReservationBinding
import com.intern.plb6.ui.base.BaseActivity
import com.intern.plb6.ui.detailfilm.DetailFilmActivity
import com.intern.plb6.ui.reservation.adapter.ReservationAdapter
import com.intern.plb6.ui.vnpay.PaymentActivity
import com.intern.plb6.utils.DateTimeUtils
import com.intern.plb6.utils.Status
import kotlinx.android.synthetic.main.activity_reservation.*

class ReservationActivity : BaseActivity(), ReservationNavigator {

    private lateinit var mViewModel: ReservationViewModel
    private lateinit var mReservationAdapter: ReservationAdapter
    private var mIdShowTime = -1
    private var mPrice = 0
    private var mCount = 0

    companion object {
        const val KEY_PAYMENT = "key_payment"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_reservation)

        setupViewModel()
        setupUI()
        setupObserver()
    }

    private fun setupObserver() {
        mViewModel.getLocations().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    renderListLocation(it.data)
                }
                Status.ERROR -> {
                }
                else -> {

                }
            }
        })

        mViewModel.getShowTime().observe(this, {
            when (it.status) {
                Status.SUCCESS -> {
                    it.data?.let { showTime ->
                        txtTimeStart.text = DateTimeUtils.formatDateFromDB(showTime.timeStart)
                        txtTimeEnd.text = DateTimeUtils.formatDateFromDB(showTime.timeEnd)
                    }
                }
            }
        })

        mViewModel.getPriceType().observe(this, {
            when (it.status) {
                Status.SUCCESS -> {
                    it.data?.let { priceType ->
                        priceType.price?.let { price ->
                            mPrice = price
                        }
                    }
                }
            }
        })
        mViewModel.fetchShowTime(mIdShowTime.toString())
        mViewModel.fetchLocation(mIdShowTime.toString())
    }

    private fun renderListLocation(locations: List<Location>?) {
        mReservationAdapter.addData(locations)
        mReservationAdapter.notifyDataSetChanged()
    }

    private fun setupViewModel() {
        val binding: ActivityReservationBinding =
            DataBindingUtil.setContentView(this, R.layout.activity_reservation)
        val factory = ReservationFactory(this)
        mViewModel = ViewModelProvider(this, factory).get(ReservationViewModel::class.java)
        binding.viewModel = mViewModel
        binding.navigator = this
    }

    private fun setupUI() {
        mIdShowTime = intent.getIntExtra(DetailFilmActivity.KEY_ID_SHOW_TIME, -1)

        rclBooking.layoutManager = GridLayoutManager(this, 8)
        mReservationAdapter = ReservationAdapter(arrayListOf()) {
            mCount = it
            txtPrice.text = resources.getString(R.string.price, it*mPrice)
        }
        rclBooking.adapter = mReservationAdapter
    }

    fun payment(view: View) {
        val paymentRequest = PaymentRequest(
            mPrice*mCount,
            mCount,
            DateTimeUtils.getCurrentDate(),
            5,
            mIdShowTime,
            mReservationAdapter.getLocation()
        )
        mViewModel.payment(paymentRequest)
    }

    override fun openPaymentActivity(urlPay: String) {
        val intent = Intent(this, PaymentActivity::class.java)
        intent.putExtra(KEY_PAYMENT, urlPay)
        startActivity(intent)
    }

}