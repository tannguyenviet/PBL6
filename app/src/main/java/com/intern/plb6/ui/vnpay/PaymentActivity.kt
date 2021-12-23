package com.intern.plb6.ui.vnpay

import android.annotation.SuppressLint
import android.content.Intent
import android.graphics.Bitmap
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.intern.plb6.R
import com.intern.plb6.databinding.ActivityPaymentBinding
import com.intern.plb6.ui.reservation.ReservationActivity
import com.intern.plb6.ui.ticket.TicketActivity
import com.intern.plb6.utils.Status
import kotlinx.android.synthetic.main.activity_payment.*

class PaymentActivity : AppCompatActivity() {

    private lateinit var mViewModel: PaymentViewModel
    private var mCountTicket = 0
    private var mCheckCreateTicket = false

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView( R.layout.activity_payment)

        setupViewModel()

        val urlPayment = intent.extras?.getString(ReservationActivity.KEY_PAYMENT)

        webView.settings.javaScriptEnabled = true

        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
                url?.let { view?.loadUrl(it) }
                return true
            }

//            /order/vnpay_return
            override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
                super.onPageStarted(view, url, favicon)
                url?.let {
                    if (url.contains("/order/vnpay_return")) {
                        mViewModel.fetchTicket("5")
                    }
                }
            }

        }
        urlPayment?.let { webView.loadUrl(it) }
        setupObserver()
    }

    private fun setupViewModel() {
        val binding: ActivityPaymentBinding = DataBindingUtil.setContentView(this, R.layout.activity_payment)
        mViewModel = ViewModelProvider(this).get(PaymentViewModel::class.java)
        binding.viewModel = mViewModel
    }

    private fun setupObserver() {
        mViewModel.getTickets().observe(this, Observer {
            when (it.status) {
                Status.SUCCESS -> {
                    if (!mCheckCreateTicket) {
                        mCountTicket = it.data?.size ?: 0
                        mCheckCreateTicket = true
                    } else {
                        if ((it.data?.size ?: 0) - mCountTicket == 1) {
                            startActivity(Intent(this, TicketActivity::class.java))
                            finish()
                        } else {
                            Toast.makeText(this@PaymentActivity, "Please check info ticket again!!", Toast.LENGTH_LONG).show()
                        }
                    }
                }
                Status.ERROR -> {
                }
                else -> {

                }
            }
        })
        mViewModel.fetchTicket("5")
    }

}